"""Maakt geanimeerde GIF-versies van de mail-illustraties (op wit, 2x resolutie).
Gebruik: venv/bin/python make_gifs.py <images-dir>"""
import math, sys
from PIL import Image, ImageDraw, ImageFilter, ImageChops

IMG = sys.argv[1]
WHITE = (255, 255, 255, 255)


def load(name):
    return Image.open(f"{IMG}/{name}").convert("RGBA")


def scaled(sprite, sx, sy, anchor="bottom", shear=0.0):
    """Schaal (en schuif) een sprite op een canvas van gelijke grootte, verankerd aan de onderkant/midden."""
    W, H = sprite.size
    # inverse affine: output (x,y) -> input
    ax = W / 2
    ay = H if anchor == "bottom" else H / 2
    a = 1 / sx
    e = 1 / sy
    # x_in = (x - ax)/sx + ax + shear*(ay - y)/sy ; y_in = (y - ay)/sy + ay
    b = -shear / sy
    c = ax - ax / sx + shear * ay / sy
    f = ay - ay / sy
    return sprite.transform((W, H), Image.AFFINE, (a, b, c, 0, e, f), resample=Image.BICUBIC)


def shine(sprite, pos, width=70, strength=0.55):
    """Diagonale glans-streep over de sprite (alleen binnen de vorm)."""
    W, H = sprite.size
    band = Image.new("L", (W, H), 0)
    d = ImageDraw.Draw(band)
    x = pos
    d.polygon([(x, 0), (x + width, 0), (x + width - H * 0.5, H), (x - H * 0.5, H)], fill=int(255 * strength))
    band = band.filter(ImageFilter.GaussianBlur(10))
    mask = ImageChops.multiply(band, sprite.getchannel("A"))
    out = sprite.copy()
    glow = Image.new("RGBA", (W, H), WHITE)
    glow.putalpha(mask)
    out.alpha_composite(glow)
    return out


def flatten(frame, size):
    bg = Image.new("RGBA", frame.size, WHITE)
    bg.alpha_composite(frame)
    return bg.convert("RGB").resize(size, Image.LANCZOS)


def save(frames, durations, name, size):
    out = [flatten(f, size).quantize(colors=128, method=Image.MEDIANCUT, dither=Image.NONE) for f in frames]
    out[0].save(f"{IMG}/{name}", save_all=True, append_images=out[1:], duration=durations, loop=0, optimize=True, disposal=1)
    print(name, len(out), "frames")


# 1) Vlam — flakkert en wiegt
flame = load("email_flame.png")
pad = Image.new("RGBA", (flame.width + 40, flame.height + 30), (0, 0, 0, 0))
pad.alpha_composite(flame, (20, 30))
fr = []
N = 20
for i in range(N):
    t = 2 * math.pi * i / N
    fr.append(scaled(pad, 1 - 0.025 * math.sin(2 * t), 1 + 0.045 * math.sin(2 * t), shear=0.035 * math.sin(t)))
save(fr, [70] * N, "email_flame.gif", (pad.width * 7 // 10, pad.height * 7 // 10))

# 2) Slapende vlam — ademt, Z'tjes zweven omhoog
sleep = load("email_flame_sleep.png")
zbox = (310, 0, 470, 150)
zs = sleep.crop(zbox)
base = sleep.copy()
ImageDraw.Draw(base).rectangle(zbox, fill=(0, 0, 0, 0))
fr = []
N = 24
for i in range(N):
    t = 2 * math.pi * i / N
    f = scaled(base, 1 + 0.015 * math.sin(t), 1 - 0.03 * math.sin(t))
    p = (i / N)
    z = zs.copy()
    alpha = 1 - 0.55 * (0.5 - 0.5 * math.cos(t))
    z.putalpha(z.getchannel("A").point(lambda v, a=alpha: int(v * a)))
    f.alpha_composite(z, (zbox[0] + int(4 * math.sin(t)), zbox[1] + 12 - int(14 * p)))
    fr.append(f)
save(fr, [110] * N, "email_flame_sleep.gif", (300, 300))

# 3/4) Badge + trofee — 'pop' en glans-streep, dan even rust
for name, out in (("email_badge.png", "email_badge.gif"), ("email_trophy.png", "email_trophy.gif")):
    sp = load(name)
    fr, du = [], []
    N = 16
    for i in range(N):
        p = i / (N - 1)
        s = 1 + 0.06 * math.sin(math.pi * min(1, p * 1.6))
        f = scaled(sp, s, s, anchor="center")
        fr.append(shine(f, int(-120 + p * (sp.width + 300))))
        du.append(50)
    fr.append(sp)
    du.append(1800)
    save(fr, du, out, (300, 300))

# 5) Hart — in knop-stijl (verloop, 3D-rand, gloed) + hartslag en rust
def button_style(sp, top, bot, edge, glow, depth=12):
    """Kleurt de vorm met een verloop (wit blijft wit), zet er een donkere 3D-rand onder en een zachte gloed."""
    W, H = sp.size
    a = sp.getchannel("A")
    bbox = a.getbbox()
    grad = Image.new("RGB", (1, H))
    for y in range(H):
        t = min(1, max(0, (y - bbox[1]) / max(1, bbox[3] - bbox[1])))
        grad.putpixel((0, y), tuple(int(top[i] + (bot[i] - top[i]) * t) for i in range(3)))
    grad = grad.resize((W, H))
    r = sp.getchannel("R").point(lambda v: max(0, min(255, int((v - 90) * 255 / 165))))  # wit-factor
    body = Image.composite(Image.new("RGB", (W, H), (255, 255, 255)), grad, r).convert("RGBA")
    body.putalpha(a)
    out = Image.new("RGBA", (W, H + depth + 30), (0, 0, 0, 0))
    g = Image.new("RGBA", out.size, glow + (0,))
    gm = Image.new("L", out.size, 0); gm.paste(a.point(lambda v: v * 0.45), (0, depth + 14))
    g.putalpha(gm.filter(ImageFilter.GaussianBlur(16)))
    out.alpha_composite(g)
    e = Image.new("RGBA", (W, H), edge + (255,)); e.putalpha(a)
    out.alpha_composite(e, (0, depth))
    out.alpha_composite(body, (0, 0))
    return out

heart = button_style(load("email_welkom.png"), (0x5A, 0xCF, 0xFF), (0x1C, 0xB0, 0xF6), (0x0B, 0x8F, 0xD0), (28, 176, 246))
beats = [1.0, 1.06, 1.1, 1.04, 1.0, 1.05, 1.07, 1.02, 1.0]
fr = [scaled(heart, s, s, anchor="center") for s in beats]
du = [60] * (len(beats) - 1) + [900]
save(fr, du, "email_welkom.gif", (heart.width * 300 // 480, heart.height * 300 // 480))
