/** Authored proof plugin boundaries, including local action fixtures. */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const require = createRequire(path.join(root, 'proofs/app-shell/package.json'));
const ts = require('typescript');

export function inspectPlugin(source, file = 'plugin.ts') {
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);
  const errors = [];
  const eagerEvents = new Set();
  const fail = (node, message) => errors.push(`${file}:${ast.getLineAndCharacterOfPosition(node.getStart(ast)).line + 1}: ${message}`);
  function walk(node) {
    if ((ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) && node.moduleSpecifier) {
      const target = node.moduleSpecifier.text;
      const clause = node.importClause || node.exportClause;
      const elements = clause?.elements || clause?.namedBindings?.elements;
      const typeOnly = node.isTypeOnly || clause?.isTypeOnly ||
        (clause && !clause.name && elements?.length && elements.every(item => item.isTypeOnly));
      if (!typeOnly && /(?:^|\/)(pages|views)\//.test(target)) fail(node, 'Load pages lazily and bind views through ctx.view; keep their runtime imports out of plugin.ts.');
      if (!typeOnly && /(?:^|\/)events\//.test(target) && ts.isImportDeclaration(node)) {
        if (clause?.name) eagerEvents.add(clause.name.text);
        const bindings = clause?.namedBindings;
        if (bindings && ts.isNamespaceImport(bindings)) eagerEvents.add(bindings.name.text);
        if (bindings && ts.isNamedImports(bindings)) for (const item of bindings.elements) eagerEvents.add(item.name.text);
      }
    }
    if (ts.isCallExpression(node) && ts.isPropertyAccessExpression(node.expression)) {
      const access = node.expression;
      const method = access.name.text;
      const owner = access.expression.getText(ast);
      const isServer = /^(ctx|server)(\.import)?$/.test(owner);
      if (isServer && /^(get|post|put|patch|delete|head|options|all|route)$/.test(method)) {
        const callback = node.arguments[method === 'route' ? 2 : 1];
        const body = callback && ts.isArrowFunction(callback) ? callback.body : undefined;
        const literalImport = body && ts.isCallExpression(body) &&
          body.expression.kind === ts.SyntaxKind.ImportKeyword &&
          body.arguments.length === 1 && ts.isStringLiteral(body.arguments[0]) &&
          /(?:^|\/)pages\//.test(body.arguments[0].text);
        if (!callback || !ts.isArrowFunction(callback) || callback.parameters.length !== 0 || !literalImport)
          fail(node, 'HTTP routes require an inline zero-argument arrow with a literal import of pages/*.js.');
      }
      if (isServer && method === 'on' && node.arguments[1]) {
        const callback = node.arguments[1];
        const binding = ts.isIdentifier(callback) ? callback.text : ts.isPropertyAccessExpression(callback) ? callback.expression.getText(ast) : '';
        if (eagerEvents.has(binding)) fail(node, 'Register external Ingest event actions with () => import("./events/name.js").');
      }
    }
    ts.forEachChild(node, walk);
  }
  walk(ast);
  return errors;
}

export function verifyProof(proof) {
  const errors = [];
  let plugins = 0;
  function scan(dir) {
    for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
      const file = path.join(dir, item.name);
      if (item.isDirectory()) scan(file);
      else if (item.name === 'plugin.ts') {
        plugins++;
        errors.push(...inspectPlugin(fs.readFileSync(file, 'utf8'), path.relative(root, file)));
      }
    }
  }
  scan(path.join(root, proof, 'plugins'));
  const fixtures = path.join(root, proof, '.fixtures');
  if (fs.existsSync(fixtures)) scan(fixtures);
  return { plugins, errors };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const proofs = process.argv.slice(2).length ? process.argv.slice(2) : ['proofs/app-shell', 'proofs/common-components', 'proofs/stackpress-boilerplate', 'proofs/agent-mode-compatibility'];
  let failed = false;
  for (const proof of proofs) {
    const result = verifyProof(proof);
    if (result.errors.length) { failed = true; console.error(result.errors.join('\n')); }
    else console.log(`${proof}: ${result.plugins} authored plugin entrypoints pass lazy-route and view-boundary checks`);
  }
  process.exitCode = failed ? 1 : 0;
}
