"""Read OfficePress Designs archives and recover symbolic design records offline.

This is an evidence extractor, not a renderer. Path geometry stays in the native
archive. Component instances retain their full paths and authored overrides.
"""
from __future__ import annotations

from copy import deepcopy
import json
from pathlib import Path, PurePosixPath
import zipfile


def load_archive(path: Path) -> tuple[dict, dict[str, bytes]]:
    """Check ZIP integrity, JSON members and the declared frame inventory."""
    with zipfile.ZipFile(path) as archive:
        names = archive.namelist()
        assert len(names) == len(set(names)), 'Duplicate archive member'
        for name in names:
            part = PurePosixPath(name)
            assert not part.is_absolute() and '..' not in part.parts and '\\' not in name, 'Unsafe archive member'
        assert archive.testzip() is None, 'Archive CRC failure'
        members = {name: archive.read(name) for name in names}
    parsed = {name: json.loads(data) for name, data in members.items()}
    design = parsed['design.json']
    assert design['format'] == 'opcd' and design['formatVersion'] == 2, 'Unsupported design archive'
    frames = design['frames']
    assert len(frames) == len(set(frames)), 'Duplicate declared frame'
    assert set(frames) == {name for name in names if name.startswith('frames/')}, 'Frame inventory mismatch'
    assert all(name.startswith('frames/') and name.endswith('.json') for name in frames), 'Invalid frame member'
    document = {**design, 'children': [parsed[name] for name in frames]}
    resolved_nodes(document)  # Also reject duplicate IDs, missing references and cycles.
    return document, members


def resolved_nodes(document: dict) -> list[dict]:
    """Resolve the supplied native component format without evaluating tokens."""
    authored = {}

    def inventory(node: dict) -> None:
        assert node['id'] not in authored, 'Duplicate authored node ID: ' + node['id']
        authored[node['id']] = node
        for child in node.get('children', []):
            inventory(child)

    for root in document['children']:
        inventory(root)

    def expand(node: dict, stack: tuple = ()) -> dict:
        if node['type'] != 'ref':
            return deepcopy(node)
        target = node['ref']
        assert target in authored, 'Missing component reference: ' + target
        assert target not in stack, 'Cyclic component reference'
        source = expand(authored[target], (*stack, target))
        for key in ('x', 'y', 'reusable'):
            source.pop(key, None)
        source.update(deepcopy({key: value for key, value in node.items()
                                if key not in ('type', 'ref', 'descendants')}))
        source['_instance'] = True
        overrides = node.get('descendants', {})
        found = set()

        def apply(child: dict, prefix: str = '') -> dict:
            relative = prefix + child['id']
            value = expand(child, (*stack, target))
            for key in (child['id'], relative):
                if key in overrides:
                    value.update(deepcopy(overrides[key]))
                    found.add(key)
            if 'children' in value:
                value['children'] = [apply(n, relative + '/' if value.get('_instance') else prefix)
                                     for n in value['children']]
            return value

        source['children'] = [apply(child) for child in source.get('children', [])]
        assert found == set(overrides), 'Unknown component override: ' + str(set(overrides) - found)
        return source

    records = []
    metadata = ('name', 'content', 'context', 'reusable', 'theme')

    def visit(node: dict, parent: str | None, prefix: str, root: str, stack: tuple = ()) -> None:
        is_instance = node['type'] == 'ref' or node.get('_instance', False)
        target = node.get('ref')
        assert target is None or target not in stack, 'Cyclic component reference'
        value = expand(node, stack)
        identity = prefix + node['id']
        record = {'id': identity, 'type': value['type'],
                  'properties': {key: val for key, val in value.items()
                                 if key not in set(metadata) | {'id', 'type', 'children', 'geometry', '_instance'}}}
        record.update({key: value[key] for key in metadata if key in value})
        if parent is not None:
            record['parent'] = parent
        record['root'] = root
        records.append(record)
        for child in value.get('children', []):
            visit(child, identity, identity + '/' if is_instance else prefix, root,
                  (*stack, target) if is_instance else stack)

    for root in document['children']:
        visit(root, None, '', root['id'])
    assert len({node['id'] for node in records}) == len(records), 'Duplicate resolved node ID'
    return records
