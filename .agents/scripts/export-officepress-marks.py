#!/usr/bin/env python3
"""Export the native Files/Forge tiles without redesigning their geometry.

Requires CairoSVG and Pillow. --write updates the current KB SVG/ICO exports and
root kit SVG/PNG/ICO copies; the default checks them without modifying files.
The supplied OPCD archive is always read-only. Superseded asset preservation and
manifest maintenance are separate ingestion operations.
"""
from __future__ import annotations

import argparse
import io
import math
from pathlib import Path
import struct
from xml.sax.saxutils import escape, quoteattr

import cairosvg
from PIL import Image

from officepress_design import load_archive


def number(value: float) -> str:
    """Keep source coordinates compact without losing their precision."""
    return str(int(value)) if float(value).is_integer() else str(value)


def attr(name: str, value: object) -> str:
    """Escape a single XML attribute, including authored IDs and path data."""
    return f' {name}={quoteattr(str(value))}'


def paint(name: str, value: str | None, variables: dict) -> str:
    """Resolve scalar source tokens and preserve eight-digit alpha exactly."""
    if value is None:
        return attr(name, 'none')
    if value.startswith('$'):
        value = variables[value[1:]]['value']
    assert isinstance(value, str) and value.startswith('#'), 'Non-solid mark paint'
    if len(value) == 9:
        return attr(name, value[:7]) + attr(name + '-opacity', int(value[7:], 16) / 255)
    return attr(name, value)


def tile_svg(tile: dict, variables: dict, product: str) -> bytes:
    """Translate explicit native primitives, clipping and counterclockwise rotation."""
    definitions = []

    def shape(node: dict) -> str:
        width, height = node['width'], node['height']
        assert isinstance(width, (int, float)) and isinstance(height, (int, float))
        kind = node['type']
        if kind in ('rectangle', 'frame'):
            radius = node.get('cornerRadius', 0)
            if isinstance(radius, list):
                assert len(radius) == 4, 'Unexpected mark corner count'
                a, b, c, d = [min(value, width / 2, height / 2) for value in radius]
                path = f'M{a} 0H{width-b}A{b} {b} 0 0 1 {width} {b}V{height-c}A{c} {c} 0 0 1 {width-c} {height}H{d}A{d} {d} 0 0 1 0 {height-d}V{a}A{a} {a} 0 0 1 {a} 0Z'
                return '<path' + attr('d', path)
            assert isinstance(radius, (int, float)), 'Unexpected mark radius'
            return '<rect' + attr('width', width) + attr('height', height) + attr('rx', radius)
        if kind == 'ellipse':
            return '<ellipse' + attr('cx', width / 2) + attr('cy', height / 2) + attr('rx', width / 2) + attr('ry', height / 2)
        if kind == 'path':
            assert node['viewBox'] == [0, 0, width, height], 'Scaled mark path requires explicit handling'
            return '<path' + attr('d', node['geometry'])
        if kind == 'polygon':
            count = node['polygonCount']
            points = [(width / 2 + width / 2 * math.sin(2 * math.pi * i / count),
                       height / 2 - height / 2 * math.cos(2 * math.pi * i / count)) for i in range(count)]
            return '<polygon' + attr('points', ' '.join(f'{number(round(x, 10))},{number(round(y, 10))}' for x, y in points))
        raise AssertionError('Unsupported mark primitive: ' + kind)

    def render(node: dict, root: bool = False) -> str:
        if node.get('enabled') is False:
            return ''
        assert node.get('layout', 'none') == 'none', 'Mark needs native layout resolution'
        geometry = shape(node)
        style = paint('fill', node.get('fill'), variables)
        if 'stroke' in node:
            style += paint('stroke', node['stroke'], variables)
            style += attr('stroke-width', node.get('strokeWidth', 1))
            for source, target in [('strokeLinecap', 'stroke-linecap'), ('strokeLinejoin', 'stroke-linejoin')]:
                if source in node:
                    style += attr(target, node[source])
        body = geometry + style + '/>'
        children = ''.join(render(child) for child in node.get('children', []))
        if children and node.get('clip'):
            identity = 'clip-' + node['id']
            definitions.append('<clipPath' + attr('id', identity) + '>' + geometry + '/></clipPath>')
            children = '<g' + attr('clip-path', f'url(#{identity})') + '>' + children + '</g>'
        transform = []
        if not root and (node.get('x', 0) or node.get('y', 0)):
            transform.append(f'translate({number(node.get("x", 0))} {number(node.get("y", 0))})')
        #Designs rotates counterclockwise about the authored local origin.
        if node.get('rotation'):
            transform.append(f'rotate({number(-node["rotation"])})')
        attributes = attr('id', 'node-' + node['id'])
        if transform:
            attributes += attr('transform', ' '.join(transform))
        return '<g' + attributes + '>' + body + children + '</g>'

    assert tile['width'] == tile['height'] == 96, 'Unexpected tile size'
    body = render(tile, True)
    svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96" role="img"' + attr('aria-label', product) + '>\n'
    svg += '<title>' + escape(product) + '</title>\n<defs>' + ''.join(definitions) + '</defs>\n' + body + '\n</svg>\n'
    return svg.encode()


def ico_from_svg(svg: bytes) -> bytes:
    """Package the exact single-size PNG-backed 16px favicon format."""
    raster = cairosvg.svg2png(bytestring=svg, output_width=128, output_height=128)
    image = Image.open(io.BytesIO(raster)).convert('RGBA').resize((16, 16), Image.Resampling.LANCZOS)
    stream = io.BytesIO()
    image.save(stream, format='PNG')
    png = stream.getvalue()
    return struct.pack('<HHHBBBBHHII', 0, 1, 1, 16, 16, 0, 0, 1, 32, len(png), 22) + png


def exports(document: dict) -> dict[str, bytes]:
    """Build both kit trees from the two changed family sections only."""
    board = next(root for root in document['children'] if root['id'] == 'o8qxhR')
    found = {}
    for section in board['children']:
        if section.get('name') not in ('Section · Files', 'Section · Forge'):
            continue
        family = section['name'].split(' · ')[1].lower()

        def visit(node: dict) -> None:
            if node.get('name', '').startswith('Mark · '):
                product = node['name'].split(' · ')[1]
                name = f'products/{family}/{product.lower()}'
                svg = tile_svg(node['children'][0], document['variables'], product)
                ico = ico_from_svg(svg)
                found[f'.agents/resources/officepress-kit/logos/{name}.svg'] = svg
                found[f'.agents/resources/officepress-kit/favicons/{name}.ico'] = ico
                found[f'kit/logos/{name}.svg'] = svg
                found[f'kit/logos/{name}.png'] = cairosvg.svg2png(bytestring=svg)
                found[f'kit/icons/{name}.ico'] = ico
            else:
                for child in node.get('children', []):
                    visit(child)
        visit(section)
    assert len(found) == 16 * 5, 'Unexpected Files/Forge mark inventory'
    return found


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--write', action='store_true')
    args = parser.parse_args()
    repo = Path(__file__).resolve().parents[2]
    document, _ = load_archive(repo / '.agents/resources/officepress-design/officepress.opcd')
    for name, data in exports(document).items():
        path = repo / name
        if args.write:
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_bytes(data)
        else:
            assert path.read_bytes() == data, 'Native export drift: ' + name
    print('PASS: 16 Files/Forge native tiles match both SVG/PNG/16px ICO export sets.')


if __name__ == '__main__':
    main()
