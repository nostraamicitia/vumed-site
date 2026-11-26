"""Platen met Engelse labels (geen nummers, geen losse screenshots) omzetten naar dezelfde vorm als de andere platen.

Gebruik: python netter.py platen/<id> preview/platen/<id>
In platen/<id>/bron: origineel.png, ocr.tsv (x0 y0 x1 y1 tekst; macOS Vision) en labels.json:
  {"labels": [{"ocr": ["regel 1", "regel 2"], "R": 40, "targets": [[x,y],..] (optioneel, overschrijft tracering)}],
   "wis": [[x0,y0,x1,y1], ..]  extra gebieden om wit te maken (titels, signatuur)}
Stappen: tekst wit maken -> per label de leiderlijn(en) vinden en volgen tot de structuur -> nummerbolletje
op het lijneinde (of in het midden met verbindingslijntjes als de lijnen naar twee kanten gaan) ->
basis = ontkleurde plaat, sN = originele kleur alleen op de structuur (kleur-flood-fill rond het lijnpunt).
Schrijft basis.png, sN.png en plaat.json (W, H, nums, targets).
"""
import sys, json, os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

PL, OUT = sys.argv[1].rstrip('/'), sys.argv[2]
os.makedirs(OUT, exist_ok=True)
src = Image.open(f'{PL}/bron/origineel.png').convert('RGB')
cfg = json.load(open(f'{PL}/bron/labels.json'))
ocr = []
for line in open(f'{PL}/bron/ocr.tsv', encoding='utf-8'):
    p = line.rstrip('\n').split('\t')
    if len(p) >= 5: ocr.append((int(p[0]), int(p[1]), int(p[2]), int(p[3]), p[4]))
W, H = src.size
img = np.asarray(src).astype(np.int16)

def find(txt):
    for b in ocr:
        if b[4].strip(' -•.') == txt or txt in b[4]: return b
    raise SystemExit(f'OCR-regel niet gevonden: {txt!r}')

# 1. tekst wit maken (alleen de tekst-pixels, zodat doorlopende lijnen intact blijven waar ze de box raken)
clean = img.copy()
gray = img.mean(2)
for (x0, y0, x1, y1, t) in ocr:
    x0, y0, x1, y1 = max(0, x0 - 6), max(0, y0 - 3), min(W, x1 + 6), min(H, y1 + 3)
    clean[y0:y1, x0:x1] = 255
for x0, y0, x1, y1 in cfg.get('wis', []):
    clean[y0:y1, x0:x1] = 255
cg = clean.mean(2)
dark = cg < 150

def endpoints(box):
    """Leiderlijn-eindpunten die tegen de (gewiste) tekstbox aankomen: links en/of rechts."""
    x0, y0, x1, y1 = box; out = []
    for side in (-1, 1):
        best = None
        for dx in range(2, 24):
            x = x0 - dx if side < 0 else x1 + dx
            if not (0 <= x < W): break
            ys = [y for y in range(max(0, y0 - 6), min(H, y1 + 6)) if dark[y, x]]
            if ys:
                # alleen dunne lijn (geen tekening): weinig donkere pixels in deze kolom
                if len(ys) <= 4: best = (x, int(np.mean(ys)))
                break
        if best: out.append((side, best))
    return out

def trace(pt, side):
    """Volg een rechte leiderlijn vanaf het eindpunt, weg van de tekst. Geeft het eindpunt bij de structuur."""
    x, y = pt
    # richting schatten uit donkere pixels 6..26 px verder
    pts = []
    for yy in range(max(0, y - 26), min(H, y + 27)):
        for xx in range(max(0, x - 26), min(W, x + 27)):
            d = np.hypot(xx - x, yy - y)
            if 6 <= d <= 26 and dark[yy, xx] and (xx - x) * side > 0: pts.append((xx - x, yy - y))
    if not pts: return pt
    v = np.mean(pts, 0); v = v / (np.linalg.norm(v) + 1e-9)
    px, py = float(x), float(y); miss = 0; last = (x, y)
    for _ in range(900):
        px += v[0]; py += v[1]
        ix, iy = int(round(px)), int(round(py))
        if not (1 <= ix < W - 1 and 1 <= iy < H - 1): break
        # donkerste pixel loodrecht ±2
        nx, ny = -v[1], v[0]; best = None
        for k in (-2, -1, 0, 1, 2):
            qx, qy = int(round(px + nx * k)), int(round(py + ny * k))
            if 0 <= qx < W and 0 <= qy < H:
                g = cg[qy, qx]
                ring = cg[max(0, qy - 3):qy + 4, max(0, qx - 3):qx + 4]
                if g < ring.mean() - 18 and g < 150 and (best is None or g < best[0]): best = (g, qx, qy)
        if best:
            miss = 0; last = (best[1], best[2])
            px, py = px * 0.6 + best[1] * 0.4, py * 0.6 + best[2] * 0.4
        else:
            miss += 1
            if miss > 5: break
    return last

labels = []
for L in cfg['labels']:
    boxes = [tuple(L['box']) + ('',)] if 'box' in L else [find(t) for t in L['ocr']]
    box = (min(b[0] for b in boxes), min(b[1] for b in boxes), max(b[2] for b in boxes), max(b[3] for b in boxes))
    eps = [tuple(e) for e in L['eps']] if 'eps' in L else endpoints(box)
    eps = [(e[0], tuple(e[1])) for e in eps]
    targets = L.get('targets') or [trace(p, s) for s, p in eps]
    labels.append(dict(L, box=box, eps=eps, targets=targets))

# 2. lijnkleur bepalen en nummerposities + verbindingslijntjes
line_col = tuple(int(c) for c in np.median(img[gray < 110], 0)) if (gray < 110).any() else (40, 40, 40)
canvas = Image.fromarray(clean.clip(0, 255).astype(np.uint8)); dr = ImageDraw.Draw(canvas)
nums = []
for L in labels:
    x0, y0, x1, y1 = L['box']; cy = (y0 + y1) // 2
    sides = {s for s, _ in L['eps']}
    if 'num' in L: c = tuple(L['num'])
    elif len(sides) == 1:
        s, (ex, ey) = L['eps'][0]
        c = (ex - s * 16, ey)            # bolletje direct tegen het lijneinde, aan de tekstkant
    else:
        c = ((x0 + x1) // 2, cy)
    if len(sides) != 1 or 'num' in L:
        for s, (ex, ey) in L['eps']:
            dr.line([c, (ex, ey)], fill=line_col, width=1)
    nums.append([int(c[0]), int(c[1])])
clean = np.asarray(canvas).astype(np.int16)

# 3. basis = ontkleurd en iets lichter (zoals de grijze screenshots)
g3 = clean.mean(2, keepdims=True)
base = (0.22 * clean + 0.78 * g3); base = base + (255 - base) * 0.18
Image.fromarray(base.clip(0, 255).astype(np.uint8)).save(f'{OUT}/basis.png')

# 4. kleurlaag per label: flood fill op kleurgelijkenis rond elk lijnpunt, begrensd tot straal R
yy, xx = np.mgrid[0:H, 0:W]
col = img.astype(float)
for i, L in enumerate(labels, 1):
    R = L.get('R', 38); mask = np.zeros((H, W), bool)
    for tx, ty in L['targets']:
        tx, ty = int(tx), int(ty)
        patch = col[max(0, ty - 3):ty + 4, max(0, tx - 3):tx + 4].reshape(-1, 3)
        ref = np.median(patch[patch.mean(1) > 60], 0) if (patch.mean(1) > 60).any() else patch.mean(0)
        near = (xx - tx) ** 2 + (yy - ty) ** 2 <= R * R
        sim = (np.abs(col - ref).sum(2) < L.get('tol', 70)) & near & (col.mean(2) < 247)
        # verbonden component vanaf het startpunt (BFS)
        seen = np.zeros_like(sim); stack = []
        for dy in range(-4, 5):
            for dx in range(-4, 5):
                qx, qy = tx + dx, ty + dy
                if 0 <= qx < W and 0 <= qy < H and sim[qy, qx]: stack.append((qy, qx))
        while stack:
            qy, qx = stack.pop()
            if seen[qy, qx]: continue
            seen[qy, qx] = True
            for ny, nx in ((qy + 1, qx), (qy - 1, qx), (qy, qx + 1), (qy, qx - 1)):
                if 0 <= ny < H and 0 <= nx < W and sim[ny, nx] and not seen[ny, nx]: stack.append((ny, nx))
        if seen.sum() < 40:   # te klein (bv. op een lijn geland): zachte schijf
            seen = ((xx - tx) ** 2 + (yy - ty) ** 2 <= (R * 0.45) ** 2) & (col.mean(2) < 247)
        mask |= seen
    a = Image.fromarray((mask * 255).astype(np.uint8)).filter(ImageFilter.MaxFilter(3)).filter(ImageFilter.GaussianBlur(1.2))
    rgba = np.dstack([img.clip(0, 255).astype(np.uint8), np.asarray(a)])
    Image.fromarray(rgba).save(f'{OUT}/s{i}.png')

json.dump({'W': W, 'H': H, 'nums': nums, 'targets': [L['targets'] for L in labels], 'eps': [[p for _, p in L['eps']] for L in labels]},
          open(f'{PL}/plaat.json', 'w'))
for i, L in enumerate(labels, 1):
    print(i, '/'.join(L['ocr'])[:40].ljust(40), 'lijnen', len(L['eps']), 'doel', L['targets'])

# 5. bijsnijden tot inhoud + nummers (minder witruimte, zelfde gevoel als de screenshot-platen)
b = np.asarray(Image.open(f'{OUT}/basis.png').convert('L'))
ys, xs = np.nonzero(b < 245)
nx = [n[0] for n in nums]; ny = [n[1] for n in nums]
x0 = max(0, min(xs.min(), min(nx) - 18) - 14); x1 = min(W, max(xs.max(), max(nx) + 18) + 14)
y0 = max(0, min(ys.min(), min(ny) - 18) - 14); y1 = min(H, max(ys.max(), max(ny) + 18) + 14)
for f in os.listdir(OUT):
    if f.endswith('.png'):
        Image.open(f'{OUT}/{f}').crop((x0, y0, x1, y1)).save(f'{OUT}/{f}')
pj = json.load(open(f'{PL}/plaat.json'))
pj['W'], pj['H'] = int(x1 - x0), int(y1 - y0)
pj['nums'] = [[n[0] - int(x0), n[1] - int(y0)] for n in nums]
json.dump(pj, open(f'{PL}/plaat.json', 'w'))
print('bijgesneden tot', pj['W'], 'x', pj['H'])
