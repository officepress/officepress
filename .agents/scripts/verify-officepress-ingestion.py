#!/usr/bin/env python3
"""Offline fidelity and source-recovery checks for the OfficePress KB snapshot.

Default operation reads only this .agents workspace. --compare-originals is an
optional extra against the initial Documents inputs. --reconstruct writes an
exact source snapshot to a new destination; it never executes source code.
"""
from __future__ import annotations
import argparse
import hashlib
import html
import json
import re
import shutil
import struct
from pathlib import Path


def sha(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def canonical(value: object) -> bytes:
    return json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(',', ':')).encode()


def source_chunk(root: Path, record: dict) -> bytes:
    text = (root / record['path']).read_text()
    body = text.split('<!-- officepress-source:start -->\n', 1)[1].split('<!-- officepress-source:end -->', 1)[0]
    if record['format'] == 'fenced':
        lines = body.splitlines(keepends=True)
        assert lines[0].startswith('~~~~') and lines[-1].strip() == re.match(r'^~+', lines[0]).group(), record['path']
        body = ''.join(lines[1:-1])
    else:
        for before, after in reversed(record['rewrites']):
            body = body.replace(after, before)
    if not record['trailing_newline']:
        body = body.removesuffix('\n')
    data = body.encode()
    assert sha(data) == record['sha256'], 'Source chunk changed: ' + record['path']
    assert len(body.splitlines()) == record['lines'], 'Source line count: ' + record['path']
    return data


def cell(value: str) -> str:
    return html.unescape(value.strip().replace('<br>', '\n'))


def design_nodes(root: Path, manifest: dict) -> list[dict]:
    all_nodes = []
    groups = []
    for entry in manifest['design']['node_chunks']:
        rows = []
        text = (root / entry['path']).read_text()
        table = text.split('## Node records\n', 1)[1]
        for line in table.splitlines():
            if not line.startswith('| ') or line.startswith('| ID / parent '):
                continue
            columns = [cell(c) for c in line.split('|')[1:-1]]
            assert len(columns) == 4, entry['path']
            identity, parent = columns[0].split(' / ', 1)
            kind = columns[1].split(' /', 1)[0]
            n = {'id': identity, 'type': kind, 'properties': json.loads(columns[3])}
            if parent != 'root':
                n['parent'] = parent
            n.update(json.loads(columns[2]))
            rows.append(n)
        assert [n['id'] for n in rows] == entry['ids'], 'Node identities: ' + entry['path']
        all_nodes.extend(rows)
        groups.append((entry, rows))
    by_id = {n['id']: n for n in all_nodes}
    assert len(by_id) == len(all_nodes), 'Duplicate node ID'
    for n in all_nodes:
        top = n
        seen = set()
        while 'parent' in top:
            assert top['id'] not in seen, 'Cyclic design parents'
            seen.add(top['id'])
            top = by_id[top['parent']]
        n['root'] = top['id']
    for entry, rows in groups:
        assert sha(canonical(rows)) == entry['sha256'], 'Design properties/content changed: ' + entry['path']
    design = manifest['design']
    assert len(all_nodes) == design['node_count']
    assert sum('content' in n for n in all_nodes) == design['text_node_count']
    assert sum('parent' not in n for n in all_nodes) == design['root_count']
    assert sum(bool(n.get('reusable')) for n in all_nodes) == design['reusable_count']
    return all_nodes


def verify_variables(root: Path, manifest: dict) -> None:
    variables = {}
    for entry in manifest['design']['variable_chunks']:
        text = (root / entry['path']).read_text()
        for line in text.splitlines():
            if line.startswith('| ') and not line.startswith('| Variable |'):
                key, value = [cell(c) for c in line.split('|')[1:-1]]
                assert key not in variables, 'Duplicate variable: ' + key
                variables[key] = json.loads(value)
    assert len(variables) == manifest['design']['variable_count']
    full = {'variables': variables, 'themes': manifest['design']['themes']}
    assert sha(canonical(full)) == manifest['design']['variables_sha256'], 'Variable definitions changed'


def verify_design_history(root: Path, manifest: dict, current: list[dict]) -> int:
    """Recover prior extraction revisions without making them current knowledge."""
    nodes = {n['id']: n for n in current}
    native_hash = next(r['sha256'] for r in manifest['resources'] if r['source'] == 'officepress.pen')
    recovered_count = 0
    for revision in reversed(manifest.get('design_history', [])):
        assert revision['after_native_sha256'] == native_hash, 'Broken design revision chain'
        text = (root / revision['path']).read_text()
        body = text.split('<!-- officepress-design-history:start -->\n~~~~jsonl\n', 1)[1].split('~~~~\n<!-- officepress-design-history:end -->', 1)[0]
        records = [json.loads(line) for line in body.splitlines() if line]
        assert sha(canonical(records)) == revision['sha256'], 'Prior design records changed'
        assert sum(r['kind'] == 'changed' for r in records) == revision['changed']
        assert sum(r['kind'] == 'removed' for r in records) == revision['removed']
        seen = set()
        for entry in records:
            node = entry['node']
            identity = node['id']
            assert identity not in seen, 'Duplicate historical design node'
            seen.add(identity)
            assert entry['kind'] in ('changed', 'removed'), 'Unknown historical node disposition'
            assert (identity in nodes) == (entry['kind'] == 'changed'), 'Historical node disposition mismatch'
            nodes[identity] = node
        for identity in revision['added_ids']:
            assert identity in nodes and identity not in seen, 'Invalid added-node reversal'
            del nodes[identity]
        prior = sorted(nodes.values(), key=lambda n: n['id'])
        assert len(prior) == revision['before_node_count'], 'Prior design count mismatch'
        assert sha(canonical(prior)) == revision['before_nodes_sha256'], 'Prior extraction did not recover exactly'
        native_hash = revision['before_native_sha256']
        recovered_count += 1
    return recovered_count


def verify_source_archives(root: Path, manifest: dict, recovered: dict[str, bytes]) -> set[str]:
    """Keep explicitly requested file copies identical to complete KB source content."""
    expected = {identity for identity in recovered
                if identity.startswith(('kit/css/', 'kit/js/', 'kit/templates/'))}
    archived = set()
    paths = set()
    for entry in manifest['source_archives']:
        identity = entry['source']
        assert identity in expected, 'Archive outside requested scope: ' + identity
        assert identity not in archived, 'Duplicate source archive: ' + identity
        assert entry['path'] == 'resources/officepress-kit/' + identity.removeprefix('kit/'), 'Archive destination mismatch'
        data = (root / entry['path']).read_bytes()
        assert sha(data) == entry['sha256'] and len(data) == entry['bytes'], 'Source archive mismatch: ' + entry['path']
        assert data == recovered[identity], 'Archive differs from KB references: ' + identity
        archived.add(identity)
        paths.add(entry['path'])
    assert archived == expected, 'Missing requested source archives: ' + ', '.join(sorted(expected - archived))
    return paths


def verify_generated_favicons(root: Path, manifest: dict) -> set[str]:
    """Account for 16px ICO derivatives without adding them to source inventory."""
    sources = {entry['path'] for entry in manifest['resources']
               if entry['path'] == 'resources/officepress-kit/logos/officepress/favicon.svg'
               or entry['path'].startswith('resources/officepress-kit/logos/products/')}
    mapped = set()
    paths = set()
    for entry in manifest['generated_favicons']:
        source = entry['source']
        path = entry['path']
        assert source in sources and source not in mapped, 'Invalid favicon source: ' + source
        assert path == source.replace('/logos/', '/favicons/').removesuffix('.svg') + '.ico', 'Favicon destination mismatch: ' + path
        data = (root / path).read_bytes()
        assert sha(data) == entry['sha256'] and len(data) == entry['bytes'], 'Favicon mismatch: ' + path
        assert len(data) >= 46 and struct.unpack_from('<HHH', data) == (0, 1, 1), 'Invalid ICO header: ' + path
        width, height, _, _, _, _, size, offset = struct.unpack_from('<BBBBHHII', data, 6)
        assert (width, height, size, offset) == (16, 16, len(data) - 22, 22), 'Invalid ICO entry: ' + path
        assert data[22:38] == b'\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR', 'Invalid ICO image: ' + path
        assert struct.unpack_from('>II', data, 38) == (16, 16), 'Invalid favicon PNG size: ' + path
        mapped.add(source)
        paths.add(path)
    assert mapped == sources, 'Missing generated favicon for a source mark'
    return paths


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--reconstruct', type=Path, help='Reconstruct the source snapshot in a new directory')
    ap.add_argument('--compare-originals', action='store_true', help='Additionally compare initial external input files')
    args = ap.parse_args()
    root = Path(__file__).resolve().parents[1]
    manifest = json.loads((root / 'scripts/officepress-ingestion-manifest.json').read_text())
    recovered = {}
    for entry in manifest['sources']:
        pieces = []
        next_line = 1
        for chunk in entry['chunks']:
            assert chunk['start_line'] == next_line, 'Missing/reordered source section'
            pieces.append(source_chunk(root, chunk))
            next_line += chunk['lines']
        data = b''.join(pieces)
        assert sha(data) == entry['sha256'] and len(data) == entry['bytes'], 'Source file mismatch: ' + entry['id']
        assert next_line - 1 == entry['lines']
        if args.compare_originals:
            assert Path(entry['provenance']).read_bytes() == data, 'Original source drift: ' + entry['id']
        recovered[entry['id']] = data
    for entry in manifest['resources']:
        data = (root / entry['path']).read_bytes()
        assert sha(data) == entry['sha256'] and len(data) == entry['bytes'], 'Resource mismatch: ' + entry['path']
        assert Path(entry['path']).suffix in ('.svg', '.png', '.pen'), 'Unexpected textual resource'
        if args.compare_originals:
            source = (root.parent / entry['provenance']) if entry.get('provenance') else (Path('/Users/cblanquera/Documents/officepress.pen') if entry['source'] == 'officepress.pen' else Path('/Users/cblanquera/Documents/officepress-kit') / entry['source'].removeprefix('kit/'))
            # Treat the native file as opaque bytes; semantic extraction uses the design API.
            with source.open('rb') as stream:
                assert hashlib.file_digest(stream, 'sha256').hexdigest() == entry['sha256'], 'Original asset drift: ' + entry['source']
    archive_paths = verify_source_archives(root, manifest, recovered)
    favicon_paths = verify_generated_favicons(root, manifest)
    for entry in manifest['drafts']:
        assert sha((root / entry['path']).read_bytes()) == entry['sha256'], 'Accepted input record changed: ' + entry['path']
    current_nodes = design_nodes(root, manifest)
    history_count = verify_design_history(root, manifest, current_nodes)
    verify_variables(root, manifest)
    # Every meaningful kit file has one disposition; OS metadata is explicit.
    ids = [s['id'] for s in manifest['sources']] + [s['source'] for s in manifest['resources']] + [s['source'] for s in manifest['excluded']]
    assert len(ids) == len(set(ids)), 'Duplicate source disposition'
    assert sum(i.startswith('kit/') for i in ids) == 263, 'Kit inventory count'
    actual_resources = {str(p.relative_to(root)) for p in (root / 'resources').rglob('*') if p.is_file()}
    assert actual_resources == {r['path'] for r in manifest['resources']} | archive_paths | favicon_paths, 'Unaccounted resource files'
    assert len(re.findall(r'^## (?!Project and brand)', (root / manifest['drafts'][1]['path']).read_text(), re.M)) == 23, 'User product descriptions'
    if args.reconstruct:
        out = args.reconstruct.expanduser().resolve()
        assert not out.exists(), 'Reconstruction destination must not exist'
        out.mkdir(parents=True)
        for identity, data in recovered.items():
            destination = out / ('officepress-kit/' + identity[4:] if identity.startswith('kit/') else 'officepress-app-ui-guidelines.md')
            destination.parent.mkdir(parents=True, exist_ok=True)
            destination.write_bytes(data)
        for entry in manifest['resources']:
            identity = entry['source']
            destination = out / ('officepress-kit/' + identity[4:] if identity.startswith('kit/') else identity)
            destination.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(root / entry['path'], destination)
        print('Reconstructed offline source snapshot:', out)
    print(f'PASS: {len(recovered)} exact text/code sources; {len(manifest["resources"])} exact native/visual resources; {len(manifest["excluded"])} explicit metadata exclusions.')
    print(f'PASS: {len(archive_paths)} requested CSS/JS/template archives match their complete reference content.')
    print(f'PASS: {len(favicon_paths)} derived 16x16 ICO favicons match their recorded sources and hashes.')
    print(f'PASS: {history_count} prior design extraction revisions recover exactly from local history.')
    d = manifest['design']
    print(f'PASS: {d["node_count"]} design nodes, {d["text_node_count"]} content nodes, {d["variable_count"]} variables; 23 complete user product descriptions.')
    print('Offline verification complete; no external sources or network required.')


if __name__ == '__main__':
    main()
