"""Zet de PNG-lagen van een plaat om naar WebP voor de site (68 MB PNG -> ~1 MB WebP).

Gebruik: python export_webp.py <map met basis.png + sN.png> <doelmap, bv. anatomie/platen/<id>>
"""
import sys, os, glob
from PIL import Image
src, dst = sys.argv[1].rstrip('/'), sys.argv[2].rstrip('/')
os.makedirs(dst, exist_ok=True)
for f in sorted(glob.glob(src + '/*.png')):
    im = Image.open(f); name = os.path.splitext(os.path.basename(f))[0]
    if name == 'basis':
        im.convert('RGB').save(f'{dst}/{name}.webp', 'WEBP', quality=82, method=6)
    else:
        im.save(f'{dst}/{name}.webp', 'WEBP', quality=80, alpha_quality=85, method=6)
print(dst, len(glob.glob(dst + '/*.webp')), 'bestanden')
