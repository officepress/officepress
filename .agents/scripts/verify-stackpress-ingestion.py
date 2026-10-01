#!/usr/bin/env python3
"""Verify exact Stackpress source recovery using only this repository."""
from pathlib import Path
import hashlib,json
root=Path(__file__).resolve().parents[2]
manifest=json.loads((root/'.agents/scripts/stackpress-ingestion-manifest.json').read_text())
count=0
for source in manifest['sources']:
    recovered=[]
    for relative in source['references']:
        text=(root/relative).read_text()
        block=text.split('<!-- stackpress-source:start -->\n````````markdown\n',1)[1].split('\n````````\n<!-- stackpress-source:end -->',1)[0]
        recovered.append(block)
        count+=1
    actual=hashlib.sha256(''.join(recovered).encode()).hexdigest()
    assert actual==source['sha256'],source['path']
assert len(manifest['sources'])==105
print(f"PASS: {len(manifest['sources'])} complete sources recovered from {count} local reference sections; no external source required.")
