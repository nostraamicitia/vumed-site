"""Maak plaat.json automatisch: kader-uitlijning per screenshot + nummerposities (geel gevuld bolletje).

Gebruik: python voorbereid.py platen/<naam> <kleur: rood|blauw|geel>
- Doelkader = grootste screenshot. Kleinere/verschoven screenshots worden uitgelijnd op de eerste van dat formaat.
- Nummerpositie = zwaartepunt van het lichtgele gevulde nummerbolletje in structuur_NN.png.
"""
import sys, glob, json, re
import numpy as np
from PIL import Image

PL, kleur = sys.argv[1].rstrip('/'), sys.argv[2]
files = sorted(glob.glob(f'{PL}/bron/structuur_*.png'))
ims = {int(re.search(r'structuur_(\d+)', f).group(1)): np.asarray(Image.open(f).convert('RGB')).astype(np.int16) for f in files}
if len(sys.argv) > 3:
    ref_no = int(sys.argv[3]); H, W = ims[ref_no].shape[:2]
else:
    W = max(i.shape[1] for i in ims.values()); H = max(i.shape[0] for i in ims.values())
    ref_no = next(k for k, i in ims.items() if i.shape[1] == W and i.shape[0] == H)
ref = ims[ref_no].mean(2)

def _search(a, b, rng, step, cx=0, cy=0):
    best = (1e9, 0, 0)
    for dy in range(cy - rng, cy + rng + 1, step):
        for dx in range(cx - rng, cx + rng + 1, step):
            ya0, yb0 = max(0, dy), max(0, -dy); xa0, xb0 = max(0, dx), max(0, -dx)
            h = min(a.shape[0] - ya0, b.shape[0] - yb0); w = min(a.shape[1] - xa0, b.shape[1] - xb0)
            if h < 60 or w < 60: continue
            d = np.abs(a[ya0:ya0+h, xa0:xa0+w] - b[yb0:yb0+h, xb0:xb0+w]).mean()
            if d < best[0]: best = (d, dx, dy)
    return best

def best_shift(g):
    """dx,dy zodat g op (x+dx, y+dy) in het referentiekader valt. Grof (1/4) en dan fijn (volle resolutie)."""
    _, dx, dy = _search(ref[::4, ::4], g[::4, ::4], 30, 1)
    _, dx, dy = _search(ref, g, 5, 1, dx * 4, dy * 4)
    return dx, dy

shift, nums = {}, {}
for k, im in ims.items():
    dx, dy = (0, 0) if im.shape[:2] == ref.shape else best_shift(im.mean(2))
    if (dx, dy) != (0, 0): shift[f'{k:02d}'] = [dx, dy]
    r, g, b = im[..., 0], im[..., 1], im[..., 2]
    m = (r > 235) & (g > 215) & (b > 110) & (b < 215) & (r - b > 40) & (abs(r - g) < 40)
    ys, xs = np.nonzero(m)
    if len(xs) < 30: print('geen geel bolletje bij', k); continue
    # dichtste plek (8px-raster), daarna gemiddelde binnen 20px: robuust tegen gele structuren elders
    hist, xe, ye = np.histogram2d(xs, ys, bins=[np.arange(0, im.shape[1] + 8, 8), np.arange(0, im.shape[0] + 8, 8)])
    bx, by = np.unravel_index(hist.argmax(), hist.shape); cx, cy = xe[bx] + 4, ye[by] + 4
    sel = (abs(xs - cx) < 20) & (abs(ys - cy) < 20)
    nums[k] = [int(round(xs[sel].mean())) + dx, int(round(ys[sel].mean())) + dy]
n_max = max(nums)
cfg = {'W': W, 'H': H, 'kleur': kleur, 'nums': [nums.get(i, [-100, -100]) for i in range(1, n_max + 1)], 'shift': shift, 'zelf_inkleuren': {}}
json.dump(cfg, open(f'{PL}/plaat.json', 'w'))
print(json.dumps(cfg))
