"""Regression checks for offline native archive verification and recovery."""
import importlib.util
import json
from pathlib import Path
import sys
import tempfile
import unittest
import zipfile

SCRIPTS = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(SCRIPTS))
from officepress_design import load_archive, resolved_nodes


class ArchiveTests(unittest.TestCase):
    def archive(self, members):
        folder = tempfile.TemporaryDirectory()
        self.addCleanup(folder.cleanup)
        path = Path(folder.name) / 'design.opcd'
        with zipfile.ZipFile(path, 'w') as target:
            for name, value in members.items():
                target.writestr(name, json.dumps(value))
        return path

    def members(self):
        return {
            'design.json': {'format': 'opcd', 'formatVersion': 2,
                            'frames': ['frames/root.json']},
            'frames/root.json': {'id': 'root', 'type': 'frame', 'children': []},
        }

    def test_valid_archive_and_frame_members(self):
        document, members = load_archive(self.archive(self.members()))
        self.assertEqual(document['children'][0]['id'], 'root')
        self.assertEqual(len(members), 2)

    def test_missing_declared_frame_is_rejected(self):
        members = self.members()
        del members['frames/root.json']
        with self.assertRaisesRegex(AssertionError, 'inventory'):
            load_archive(self.archive(members))

    def test_undeclared_frame_is_rejected(self):
        members = self.members()
        members['frames/extra.json'] = {'id': 'extra', 'type': 'frame'}
        with self.assertRaisesRegex(AssertionError, 'inventory'):
            load_archive(self.archive(members))

    def test_unsafe_member_is_rejected_without_extraction(self):
        members = self.members()
        members['../escape.json'] = {}
        with self.assertRaisesRegex(AssertionError, 'Unsafe'):
            load_archive(self.archive(members))

    def test_invalid_json_member_is_rejected(self):
        path = self.archive(self.members())
        with zipfile.ZipFile(path, 'a') as target:
            target.writestr('.opcd/chat.json', '{broken')
        with self.assertRaises(json.JSONDecodeError):
            load_archive(path)


class ResolutionTests(unittest.TestCase):
    def document(self, *children):
        return {'children': list(children)}

    def test_instances_keep_paths_overrides_and_symbolic_tokens(self):
        source = {'id': 'component', 'type': 'frame', 'x': 100, 'y': 200,
                  'reusable': True, 'fill': '$op-surface', 'children': [
                      {'id': 'label', 'type': 'text', 'content': 'Original'},
                      {'id': 'path', 'type': 'path', 'geometry': 'M0 0 L1 1'}]}
        instance = {'id': 'instance', 'type': 'ref', 'ref': 'component',
                    'x': 10, 'descendants': {'label': {'content': 'Override'}}}
        nodes = {node['id']: node for node in resolved_nodes(self.document(source, instance))}
        self.assertEqual(nodes['instance/label']['content'], 'Override')
        self.assertEqual(nodes['label']['content'], 'Original')
        self.assertEqual(nodes['instance']['properties'], {'fill': '$op-surface', 'x': 10})
        self.assertNotIn('reusable', nodes['instance'])
        self.assertNotIn('geometry', nodes['instance/path']['properties'])

    def test_nested_instances_keep_full_paths(self):
        leaf = {'id': 'leaf', 'type': 'frame', 'children': [
            {'id': 'label', 'type': 'text', 'content': 'Original'}]}
        component = {'id': 'component', 'type': 'frame', 'children': [
            {'id': 'inner', 'type': 'ref', 'ref': 'leaf'}]}
        instance = {'id': 'outer', 'type': 'ref', 'ref': 'component',
                    'descendants': {'inner/label': {'content': 'Override'}}}
        nodes = {node['id']: node for node in resolved_nodes(self.document(leaf, component, instance))}
        self.assertEqual(nodes['outer/inner/label']['content'], 'Override')
        self.assertEqual(nodes['outer/inner/label']['parent'], 'outer/inner')

    def test_invalid_references_and_duplicate_ids_are_rejected(self):
        cases = [
            ([{'id': 'x', 'type': 'ref', 'ref': 'missing'}], 'Missing'),
            ([{'id': 'x', 'type': 'frame'}, {'id': 'x', 'type': 'frame'}], 'Duplicate'),
            ([{'id': 'x', 'type': 'ref', 'ref': 'x'}], 'Cyclic'),
        ]
        for roots, message in cases:
            with self.subTest(message=message), self.assertRaisesRegex(AssertionError, message):
                resolved_nodes(self.document(*roots))

    def test_unknown_override_is_rejected(self):
        roots = [{'id': 'component', 'type': 'frame'},
                 {'id': 'instance', 'type': 'ref', 'ref': 'component',
                  'descendants': {'missing': {'content': 'Ignored?'}}}]
        with self.assertRaisesRegex(AssertionError, 'Unknown component override'):
            resolved_nodes(self.document(*roots))


class FidelityTests(unittest.TestCase):
    def test_modified_table_is_rejected_against_native_source(self):
        spec = importlib.util.spec_from_file_location('verifier', SCRIPTS / 'verify-officepress-ingestion.py')
        verifier = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(verifier)
        root = SCRIPTS.parent
        manifest = json.loads((SCRIPTS / 'officepress-ingestion-manifest.json').read_text())
        nodes = verifier.design_nodes(root, manifest)
        target = next(node for node in nodes if node['id'] == 'MzZG5')
        target['content'] = 'An accidental change to the supplied language description.'
        with self.assertRaisesRegex(AssertionError, 'tables disagree'):
            verifier.verify_design_archive(root, manifest, nodes)


if __name__ == '__main__':
    unittest.main()
