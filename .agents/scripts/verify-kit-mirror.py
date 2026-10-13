#!/usr/bin/env python3
"""Check that the repository `kit/` folder mirrors the KB's current marks.

`kit/logos/**/*.svg` must be byte-identical to `.agents/resources/officepress-kit/logos/`,
each SVG must have a PNG export at its declared size, `kit/icons/` must be
byte-identical to `.agents/resources/officepress-kit/favicons/`, and the product
marks must match the family table in `.agents/context/brand.md`.
Read-only; it never modifies either tree.
"""
from __future__ import annotations
import re
import struct
import sys
from pathlib import Path

IGNORED = {'.DS_Store'}


def files(base: Path, suffix: str | None = None) -> dict[str, bytes]:
    found = {}
    for path in sorted(base.rglob('*')):
        if path.is_file() and path.name not in IGNORED and (suffix is None or path.suffix == suffix):
            found[path.relative_to(base).as_posix()] = path.read_bytes()
    return found


def mirror(errors: list[str], label: str, expected: dict[str, bytes], actual: dict[str, bytes]) -> None:
    for name in sorted(expected.keys() - actual.keys()):
        errors.append(f'{label}: missing {name}')
    for name in sorted(actual.keys() - expected.keys()):
        errors.append(f'{label}: unexpected {name}')
    for name in sorted(expected.keys() & actual.keys()):
        if expected[name] != actual[name]:
            errors.append(f'{label}: {name} differs from the KB copy')


def brand_marks(brand: Path) -> set[str]:
    marks = set()
    table = brand.read_text().split('## Family identity', 1)[1].split('\n## ', 1)[0]
    for line in table.splitlines():
        cells = [c.strip() for c in line.strip().strip('|').split('|')]
        if len(cells) == 3 and cells[1].startswith('`#'):
            family = cells[0].lower()
            for app in cells[2].split(','):
                marks.add(f'products/{family}/{app.strip().lower()}.svg')
    return marks


def main() -> int:
    repo = Path(__file__).resolve().parents[2]
    kb_kit = repo / '.agents/resources/officepress-kit'
    kit = repo / 'kit'
    errors: list[str] = []

    kb_svgs = files(kb_kit / 'logos', '.svg')
    kit_svgs = files(kit / 'logos', '.svg')
    mirror(errors, 'kit/logos', kb_svgs, kit_svgs)

    pngs = files(kit / 'logos', '.png')
    for name, svg in kit_svgs.items():
        png_name = name[:-4] + '.png'
        data = pngs.get(png_name)
        if data is None:
            errors.append(f'kit/logos: missing PNG export {png_name}')
            continue
        if data[:16] != b'\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR':
            errors.append(f'kit/logos: {png_name} is not a PNG')
            continue
        size = re.search(rb'<svg[^>]*\swidth="(\d+)"[^>]*\sheight="(\d+)"', svg)
        if size and struct.unpack('>II', data[16:24]) != (int(size[1]), int(size[2])):
            errors.append(f'kit/logos: {png_name} is {struct.unpack(">II", data[16:24])}, SVG declares {size[1].decode()}x{size[2].decode()}')
    for name in sorted(pngs.keys() - {n[:-4] + '.png' for n in kit_svgs}):
        errors.append(f'kit/logos: PNG without SVG {name}')
    other = {n for n in files(kit / 'logos')} - kit_svgs.keys() - pngs.keys()
    errors.extend(f'kit/logos: unexpected file {n}' for n in sorted(other))

    mirror(errors, 'kit/icons', files(kb_kit / 'favicons'), files(kit / 'icons'))

    expected_products = brand_marks(repo / '.agents/context/brand.md')
    if not expected_products:
        errors.append('brand.md: family table not found')
    actual_products = {n for n in kit_svgs if n.startswith('products/')}
    for name in sorted(expected_products - actual_products):
        errors.append(f'brand.md lists a product without a kit mark: {name}')
    for name in sorted(actual_products - expected_products):
        errors.append(f'kit mark not in the brand.md family table: {name}')

    extra = sorted(p.name for p in kit.iterdir() if p.name not in IGNORED | {'logos', 'icons'})
    errors.extend(f'kit: unexpected top-level entry {n}' for n in extra)

    if errors:
        print('\n'.join('FAIL: ' + e for e in errors))
        return 1
    print(f'PASS: kit/logos mirrors {len(kit_svgs)} KB SVG marks with {len(pngs)} matching PNG exports.')
    print(f'PASS: kit/icons mirrors {len(files(kit / "icons"))} KB favicons byte for byte.')
    print(f'PASS: {len(expected_products)} product marks match the brand.md family table.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
