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
            source = Path('/Users/cblanquera/Documents/officepress.pen') if entry['source'] == 'officepress.pen' else Path('/Users/cblanquera/Documents/officepress-kit') / entry['source'].removeprefix('kit/')
            # Treat the native file as opaque bytes; semantic extraction uses the design API.
            with source.open('rb') as stream:
                assert hashlib.file_digest(stream, 'sha256').hexdigest() == entry['sha256'], 'Original asset drift: ' + entry['source']
    for entry in manifest['drafts']:
        assert sha((root / entry['path']).read_bytes()) == entry['sha256'], 'Accepted input record changed: ' + entry['path']
    design_nodes(root, manifest)
    verify_variables(root, manifest)
    # Every meaningful kit file has one disposition; OS metadata is explicit.
    ids = [s['id'] for s in manifest['sources']] + [s['source'] for s in manifest['resources']] + [s['source'] for s in manifest['excluded']]
    assert len(ids) == len(set(ids)), 'Duplicate source disposition'
    assert sum(i.startswith('kit/') for i in ids) == 263, 'Kit inventory count'
    actual_resources = {str(p.relative_to(root)) for p in (root / 'resources').rglob('*') if p.is_file()}
    assert actual_resources == {r['path'] for r in manifest['resources']}, 'Unaccounted resource files'
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
    d = manifest['design']
    print(f'PASS: {d["node_count"]} design nodes, {d["text_node_count"]} content nodes, {d["variable_count"]} variables; 23 complete user product descriptions.')
    print('Offline verification complete; no external sources or network required.')


if __name__ == '__main__':
    main()
