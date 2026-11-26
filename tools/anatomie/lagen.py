"""Maak uit atlas-screenshots een schone grijze basisplaat + per structuur een kleurlaag.

Gebruik:  python lagen.py platen/<naam> preview/platen/<naam>
In platen/<naam>/:
  bron/structuur_NN.png   één screenshot per nummer, structuur gemarkeerd (geel of blauw)
  plaat.json              W, H (doelkader), kleur ("geel"/"blauw"), nums [[x,y],..] (nummercirkels, 1-based volgorde),
                          shift {"NN": [dx,dy]} voor screenshots met een verschoven kader,
                          zelf_inkleuren {"N": [x0,x1,y0,y1]} voor nummers zonder screenshot (bot binnen dit kader kleuren)
Uitvoer: basis.png + sN.png (RGBA) in de uitvoermap.
"""
import sys, os, glob, json, re
import numpy as np
from PIL import Image, ImageFilter

PL, OUT = sys.argv[1].rstrip('/'), sys.argv[2]
os.makedirs(OUT, exist_ok=True)
cfg = json.load(open(f'{PL}/plaat.json'))
W, H = cfg['W'], cfg['H']

def frame(path, dx, dy):
    im = np.asarray(Image.open(path).convert('RGB')).astype(np.int16)
    out = np.full((H, W, 3), 255, np.int16)
    h, w, _ = im.shape
    for y in range(H):
        sy = y - dy
        if 0 <= sy < h:
            x0 = max(0, dx); x1 = min(W, w + dx)
            out[y, x0:x1] = im[sy, x0 - dx:x1 - dx]
    return out

F = {}
for p in sorted(glob.glob(f'{PL}/bron/structuur_*.png')):
    nn = re.search(r'structuur_(\d+)', p).group(1)
    dx, dy = cfg.get('shift', {}).get(nn, [0, 0])
    F[int(nn)] = frame(p, dx, dy)

# mediaan over alle screenshots: highlights en labels verschillen per screenshot en vallen weg
base = np.median(np.stack(list(F.values())), axis=0).astype(np.uint8)
Image.fromarray(base).save(f'{OUT}/basis.png')

yy, xx = np.mgrid[0:H, 0:W]
numMask = np.zeros((H, W), bool)
for x, y in cfg['nums']:
    numMask |= (xx - x) ** 2 + (yy - y) ** 2 < 16 ** 2

for k, im in F.items():
    r, g, b = im[..., 0], im[..., 1], im[..., 2]
    sat = im.max(2) - im.min(2)
    diff = np.abs(im - base.astype(np.int16)).sum(2)
    kleur = cfg.get('kleur')
    hue = {'geel': (r > g - 10) & (g > b), 'blauw': b > r + 25, 'rood': (r > g + 25) & (r > b + 15)}.get(kleur, True)
    m = (sat > 28) & hue & (diff > 25) & ~numMask
    mi = Image.fromarray((m * 255).astype(np.uint8)).filter(ImageFilter.MinFilter(3)).filter(ImageFilter.MaxFilter(5))
    alpha = np.minimum(np.asarray(mi), np.clip(sat * 6, 0, 255)).astype(np.uint8)
    alpha = np.asarray(Image.fromarray(alpha).filter(ImageFilter.GaussianBlur(0.8)))
    Image.fromarray(np.dstack([im.clip(0, 255).astype(np.uint8), alpha])).save(f'{OUT}/s{k}.png')
    ys, xs = np.nonzero(alpha > 60)
    print(k, len(xs), (int(xs.min()), int(xs.max()), int(ys.min()), int(ys.max())) if len(xs) else None)

# nummers zonder screenshot: bot binnen een kader zelf inkleuren, zacht aflopend boven/onder
base_f = base.astype(float); ssum = base_f.sum(2)
for k, (x0, x1, y0, y1) in cfg.get('zelf_inkleuren', {}).items():
    bone = (ssum < 735) & (ssum > 420)
    win = np.clip((yy - y0) / 45, 0, 1) * np.clip((y1 - yy) / 45, 0, 1) * ((xx > x0) & (xx < x1))
    a = (bone * win * 235).astype(np.uint8)
    a = np.asarray(Image.fromarray(a).filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(1.2)))
    col = (base_f * 0.55 + np.array([235, 190, 60]) * 0.45).clip(0, 255).astype(np.uint8)
    Image.fromarray(np.dstack([col, a])).save(f'{OUT}/s{k}.png')
    print(k, 'zelf ingekleurd')
