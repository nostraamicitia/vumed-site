"""Geanimeerde GIF's voor de promo-mail (promo_mail.html), op wit en op 2x resolutie.
Het EERSTE frame is steeds een goed stilstaand eindbeeld (Outlook toont alleen dat).
Gebruik: venv/bin/python make_promo_gifs.py <repo-root> <Nunito.ttf> [icon trophy quiz drag streak chat]"""
import math, sys
from PIL import Image, ImageDraw, ImageFilter, ImageChops

ROOT, FONT = sys.argv[1], sys.argv[2]
IMG = f"{ROOT}/images"
WHITE = (255, 255, 255)
PAGE = (0xF7, 0xFB, 0xFE)  # achtergrond van de lichtblauwe mail-secties
INK, SUB, MUTED, LINE = (0x1C, 0x31, 0x44), (0x5C, 0x7A, 0x92), (0x8F, 0xA8, 0xBC), (0xE6, 0xED, 0xF3)
BLUE, BLUE_D = (0x1C, 0xB0, 0xF6), (0x0B, 0x8F, 0xD0)
GREEN, GREEN_D, GREEN_BG = (0x58, 0xCC, 0x02), (0x3D, 0x92, 0x00), (0xD7, 0xFF, 0xB8)
ORANGE, GOLD, RED, PURPLE = (0xFF, 0x96, 0x00), (0xFF, 0xB0, 0x20), (0xFF, 0x4B, 0x4B), (0xB5, 0x7B, 0xF6)


def font(size, weight="ExtraBold"):
    f = __import__("PIL.ImageFont", fromlist=["x"]).truetype(FONT, size)
    f.set_variation_by_name(weight)
    return f


def ease(t):
    t = max(0.0, min(1.0, t))
    return t * t * (3 - 2 * t)


def back(t):  # overshoot
    t = max(0.0, min(1.0, t))
    c = 1.9
    return 1 + (c + 1) * (t - 1) ** 3 + c * (t - 1) ** 2


def card(d, box, fill=WHITE, border=LINE, r=36, bottom=10, w=4):
    x0, y0, x1, y1 = box
    d.rounded_rectangle((x0, y0, x1, y1), r, fill=border)
    d.rounded_rectangle((x0 + w, y0 + w, x1 - w, y1 - bottom), r - w, fill=fill)


def save(frames, durations, name, scale=0.5, colors=96, extra=None):
    rgb = []
    for f in frames:
        f = f.convert("RGB")
        if scale != 1:
            f = f.resize((int(f.width * scale), int(f.height * scale)), Image.LANCZOS)
        rgb.append(f)
    if extra:  # vast palet: kleuren van frame 0 + de opgegeven felle kleuren (confetti)
        base = rgb[0].quantize(colors=colors - len(extra), method=Image.MEDIANCUT, dither=Image.NONE).getpalette()[: 3 * (colors - len(extra))]
        pal = Image.new("P", (1, 1)); pal.putpalette(base + [c for col in extra for c in col] + [0] * (768 - 3 * colors))
        out = [f.quantize(palette=pal, dither=Image.NONE) for f in rgb]
        for o in out:  # bijna-wit -> exact wit, anders zie je een randje op de witte mail
            pl = o.getpalette()
            for i in range(0, len(pl), 3):
                if min(pl[i:i + 3]) >= 244:
                    pl[i:i + 3] = [255, 255, 255]
            o.putpalette(pl)
    else:
        out = [f.quantize(colors=colors, method=Image.MEDIANCUT, dither=Image.NONE) for f in rgb]
    out[0].save(f"{IMG}/{name}", save_all=True, append_images=out[1:], duration=durations, loop=0, optimize=True, disposal=1)
    print(name, out[0].size, len(out), "frames")


def shine(img, mask, pos, width=90, strength=0.5):
    W, H = img.size
    band = Image.new("L", (W, H), 0)
    ImageDraw.Draw(band).polygon([(pos, 0), (pos + width, 0), (pos + width - H * 0.5, H), (pos - H * 0.5, H)], fill=int(255 * strength))
    band = ImageChops.multiply(band.filter(ImageFilter.GaussianBlur(12)), mask)
    out = img.copy()
    out.paste(Image.new("RGB", (W, H), WHITE), (0, 0), band)
    return out


# ---------------------------------------------------------------- 1) app-icoon in 3D (knop-stijl): indrukken + glans
def icon3d(S, press=0.0, sh=None, depth=None):
    """VUmed-icoon als 3D-knop: verloop, witte V met schaduw, donkere onderrand en gloed. press 0..1 = ingedrukt."""
    depth = depth or int(S * 0.07)
    src = Image.open(f"{ROOT}/icon-512.png").convert("RGB").resize((S, S), Image.LANCZOS)
    v = src.getchannel("R").point(lambda x: max(0, min(255, int((x - 40) * 255 / 200))))  # wit = de V
    m = Image.new("L", (S, S), 0)
    ImageDraw.Draw(m).rounded_rectangle((0, 0, S - 1, S - 1), int(S * 0.235), fill=255)
    grad = Image.new("RGB", (1, S))
    for y in range(S):
        t = y / (S - 1)
        grad.putpixel((0, y), tuple(int(a + (b - a) * t) for a, b in zip((0x5E, 0xD2, 0xFF), (0x14, 0xA6, 0xEE))))
    body = grad.resize((S, S))
    vs = Image.new("L", (S, S), 0); vs.paste(v, (0, int(S * 0.025)))  # schaduw onder de V
    body.paste((0x0B, 0x8F, 0xD0), (0, 0), vs.filter(ImageFilter.GaussianBlur(S * 0.012)).point(lambda x: int(x * 0.55)))
    body.paste(WHITE, (0, 0), v)
    gloss = Image.new("L", (S, S), 0)  # zachte glans bovenaan
    ImageDraw.Draw(gloss).ellipse((-S * 0.2, -S * 0.75, S * 1.2, S * 0.42), fill=44)
    body.paste(WHITE, (0, 0), ImageChops.multiply(gloss.filter(ImageFilter.GaussianBlur(S * 0.04)), m))
    if sh is not None:
        body = shine(body, m, sh)
    pad = int(S * 0.28)
    W, H = S + 2 * pad, S + depth + 2 * pad
    f = Image.new("RGB", (W, H), WHITE)
    off = int(depth * press)
    gl = Image.new("L", (W, H), 0); gl.paste(m.point(lambda x: int(x * (0.5 - 0.2 * press))), (pad, pad + depth + int(S * 0.08)))
    f.paste((0x8F, 0xD9, 0xFC), (0, 0), gl.filter(ImageFilter.GaussianBlur(S * 0.09)))
    f.paste((0x0B, 0x8F, 0xD0), (pad, pad + depth), m)  # 3D-rand
    f.paste(body, (pad, pad + off), m)
    return f


def app_icon():
    S = 300
    frames, dur = [icon3d(S)], [1500]
    for p in (0.4, 0.8, 1.0, 1.0):  # indrukken
        frames.append(icon3d(S, press=p)); dur.append(45)
    for p in (0.5, -0.15, 0.05, 0.0):  # loslaten met veer
        frames.append(icon3d(S, press=p)); dur.append(50)
    N = 12
    for i in range(N):  # glans-streep
        frames.append(icon3d(S, sh=int(-160 + i / (N - 1) * (S + 360)))); dur.append(45)
    save(frames, dur, "email_promo_icon.gif", scale=380 / frames[0].width, colors=96)
    icon3d(120, depth=8).save(f"{IMG}/email_promo_icon_sm.png")  # klein, stilstaand (webversie-kaart)
    print("email_promo_icon_sm.png")


# ---------------------------------------------------------------- 1b) trofee met confetti, gloed en glans
def trophy():
    import random
    random.seed(7)
    W, H = 520, 460
    tr = Image.open(f"{IMG}/email_trophy.png").convert("RGBA").resize((330, 330), Image.LANCZOS)
    cols = [BLUE, GREEN, ORANGE, PURPLE, RED, (0xFF, 0xC2, 0x00), (0x16, 0xC7, 0xB5)]
    N = 22
    conf = [(random.uniform(0, W), random.uniform(0, H), random.choice([1, 2]), random.uniform(0, 6.28),
             random.choice(cols), random.uniform(18, 28), random.choice([1, -1])) for _ in range(34)]

    def frame(t, sh=None):
        f = Image.new("RGBA", (W, H), WHITE + (255,))
        g = Image.new("L", (W, H), 0)  # gouden gloed
        ImageDraw.Draw(g).ellipse((W / 2 - 115, 130, W / 2 + 115, 360), fill=120)
        f.paste((0xFF, 0xE7, 0x8A, 255), (0, 0), g.filter(ImageFilter.GaussianBlur(36)))
        d = ImageDraw.Draw(f)
        for x0, y0, sp, ph, c, sz, dirn in conf:  # confetti valt naadloos rond
            y = (y0 + t * H * sp) % (H + 40) - 20
            x = x0 + 14 * math.sin(t * 2 * math.pi * sp + ph)
            a = ph + dirn * t * 2 * math.pi * 2
            w, h = sz, sz * 0.55 * abs(math.cos(a)) + 5
            pc = Image.new("RGBA", (int(sz) + 4, int(sz) + 4), (0, 0, 0, 0))
            ImageDraw.Draw(pc).rectangle(((sz + 4 - w) / 2, (sz + 4 - h) / 2, (sz + 4 + w) / 2, (sz + 4 + h) / 2), fill=c + (255,))
            pc = pc.rotate(math.degrees(a), expand=True)
            f.alpha_composite(pc, (int(x), int(y)))
        bob = 6 * math.sin(t * 2 * math.pi)
        s = 1 + 0.03 * math.sin(t * 2 * math.pi)
        tt = tr.resize((int(330 * s), int(330 * s)), Image.LANCZOS)
        if sh is not None:  # glans alleen binnen de trofee
            band = Image.new("L", tt.size, 0)
            ImageDraw.Draw(band).polygon([(sh, 0), (sh + 80, 0), (sh + 80 - tt.height * 0.5, tt.height), (sh - tt.height * 0.5, tt.height)], fill=150)
            ov = Image.new("RGBA", tt.size, WHITE + (0,))
            ov.putalpha(ImageChops.multiply(band.filter(ImageFilter.GaussianBlur(10)), tt.getchannel("A")))
            tt = tt.copy(); tt.alpha_composite(ov)
        f.alpha_composite(tt, (int((W - tt.width) / 2), int(H - 40 - tt.height + bob)))
        return f

    frames, dur = [], []
    for i in range(N):
        sh = int(-160 + (i - 6) / 8 * 560) if 6 <= i < 14 else None
        frames.append(frame(i / N, sh)); dur.append(80)
    save(frames, dur, "email_promo_trophy.gif", scale=0.6, colors=72, extra=cols + [WHITE])


# ---------------------------------------------------------------- 3) mini-vraag: B kiezen -> groen -> Goed! +10 XP
def quiz():
    W, H = 760, 640
    fq, fo, fl, fg, fx, fb = font(34, "ExtraBold"), font(31, "Bold"), font(24, "Black"), font(36, "Black"), font(34, "Black"), font(28, "Black")
    opts = [("A", "Leukocyten"), ("B", "Erytrocyten"), ("C", "Trombocyten")]

    def frame(sel, good, bar, xp_t, press=0.0):
        f = Image.new("RGB", (W, H), WHITE)
        d = ImageDraw.Draw(f)
        card(d, (8, 8, W - 8, H - 8))
        d.text((52, 50), "Welke bloedcellen bevatten", font=fq, fill=INK)
        d.text((52, 98), "hemoglobine", font=fq, fill=BLUE)
        tw = d.textlength("hemoglobine", font=fq)
        for x in range(52, int(52 + tw), 14):
            d.line((x, 146, x + 7, 146), fill=BLUE, width=4)
        d.text((52 + tw + 2, 98), "?", font=fq, fill=INK)
        for k, (L, txt) in enumerate(opts):
            y = 180 + k * 104
            if good and L == "B":
                bd, bg, col = GREEN, GREEN_BG, GREEN_D
            elif sel and L == "B":
                bd, bg, col = BLUE, (0xDD, 0xF4, 0xFF), BLUE_D
            else:
                bd, bg, col = LINE, WHITE, INK
            off = int(6 * press) if (L == "B" and sel and not good) else 0
            d.rounded_rectangle((44, y + off, W - 44, y + 86), 26, fill=bd)
            d.rounded_rectangle((48, y + 4 + off, W - 48, y + 78), 23, fill=bg)
            d.rounded_rectangle((70, y + 18 + off, 120, y + 64 + off), 12, outline=bd, width=4, fill=bg)
            d.text((95, y + 41 + off), L, font=fl, fill=col, anchor="mm")
            d.text((144, y + 41 + off), txt, font=fo, fill=col, anchor="lm")
        if bar > 0:  # 'Goed!'-balk schuift omhoog
            y0 = int(H - 24 - 96 * ease(bar))
            d.rounded_rectangle((44, y0 - 10, W - 44, H - 26), 26, fill=GREEN_BG)
            d.text((76, y0 + 36), "Goed!", font=fg, fill=GREEN_D, anchor="lm")
            d.text((W - 76, y0 + 36), "+10 XP", font=fx, fill=GOLD, anchor="rm")
        else:  # Controleren-knop
            active = sel
            c, e = (BLUE, BLUE_D) if active else (LINE, (0xD5, 0xDF, 0xE8))
            y0 = H - 118
            d.rounded_rectangle((44, y0, W - 44, y0 + 78), 24, fill=e)
            d.rounded_rectangle((44, y0, W - 44, y0 + 70), 24, fill=c)
            d.text((W / 2, y0 + 35), "CONTROLEREN", font=fb, fill=WHITE if active else MUTED, anchor="mm")
        if xp_t > 0:  # zwevende +10 XP
            a = 1 - ease((xp_t - 0.5) * 2) if xp_t > 0.5 else 1
            y = int(H - 160 - 90 * ease(xp_t))
            col = tuple(int(255 + (g - 255) * a) for g in GOLD)
            d.text((W - 110, y), "+10", font=fx, fill=col, anchor="mm")
        return f

    frames, dur = [frame(True, True, 1, 0)], [2600]          # 1e frame = eindbeeld
    frames += [frame(False, False, 0, 0)]; dur += [900]       # leeg
    frames += [frame(True, False, 0, 0)]; dur += [600]        # B gekozen
    frames += [frame(True, False, 0, 0, press=1)]; dur += [160]
    for i in range(1, 7):                                     # groen + balk omhoog
        frames.append(frame(True, True, i / 6, 0)); dur.append(45)
    for i in range(1, 11):                                    # +10 zweeft weg
        frames.append(frame(True, True, 1, i / 10)); dur.append(55)
    save(frames, dur, "email_promo_quiz.gif", scale=1, colors=48)


# ---------------------------------------------------------------- 4) sleepvraag: kaartjes vliegen in de vakken
def drag():
    W, H = 760, 560
    fu, fq, fz, fc = font(22, "Black"), font(33, "ExtraBold"), font(22, "Black"), font(30, "Black")
    zones = [((44, 196, 372, 380), "ZUURSTOFTRANSPORT"), ((388, 196, W - 44, 380), "AFWEER")]
    home = {"Erytrocyt": (52, 412), "Leukocyt": (292, 412), "Trombocyt": (520, 412)}
    target = {"Erytrocyt": (88, 270), "Leukocyt": (432, 270)}

    def chip(d, x, y, txt, on):
        w = d.textlength(txt, font=fc) + 56
        if on:
            d.rounded_rectangle((x, y, x + w, y + 76), 22, fill=BLUE_D)
            d.rounded_rectangle((x, y, x + w, y + 68), 22, fill=BLUE)
            d.text((x + w / 2, y + 34), txt, font=fc, fill=WHITE, anchor="mm")
        else:
            d.rounded_rectangle((x, y, x + w, y + 76), 22, fill=LINE)
            d.rounded_rectangle((x + 4, y + 4, x + w - 4, y + 66), 19, fill=WHITE)
            d.text((x + w / 2, y + 35), txt, font=fc, fill=INK, anchor="mm")

    def frame(pe, pl, done):
        f = Image.new("RGB", (W, H), PAGE)
        d = ImageDraw.Draw(f)
        card(d, (8, 8, W - 8, H - 8))
        d.text((52, 46), "VUMED.NL/TENTAMEN", font=fu, fill=MUTED)
        d.text((52, 88), "12. Sleep elk celtype naar zijn", font=fq, fill=INK)
        d.text((52, 132), "functie in het bloed", font=fq, fill=INK)
        for k, (box, lab) in enumerate(zones):
            ok = done and True
            col = GREEN if ok else (0xB5, 0xC7, 0xD6)
            fill = (0xF2, 0xFF, 0xE8) if ok else WHITE
            d.rounded_rectangle(box, 26, fill=fill)
            x0, y0, x1, y1 = box
            for x in range(x0 + 20, x1 - 20, 22):  # stippelrand
                d.line((x, y0, x + 11, y0), fill=col, width=4); d.line((x, y1, x + 11, y1), fill=col, width=4)
            for y in range(y0 + 20, y1 - 20, 22):
                d.line((x0, y, x0, y + 11), fill=col, width=4); d.line((x1, y, x1, y + 11), fill=col, width=4)
            d.text(((x0 + x1) / 2, y0 + 36), lab, font=fz, fill=GREEN_D if ok else MUTED, anchor="mm")
        chip(d, *home["Trombocyt"], "Trombocyt", False)
        for name, p in (("Erytrocyt", pe), ("Leukocyt", pl)):
            hx, hy = home[name]; tx, ty = target[name]
            e = ease(p)
            x = hx + (tx - hx) * e
            y = hy + (ty - hy) * e - 70 * math.sin(math.pi * e)
            chip(d, int(x), int(y), name, p > 0.98)
        return f

    frames, dur = [frame(1, 1, True)], [2600]
    frames.append(frame(0, 0, False)); dur.append(800)
    for i in range(1, 11):
        frames.append(frame(i / 10, 0, False)); dur.append(45)
    dur[-1] = 350
    for i in range(1, 11):
        frames.append(frame(1, i / 10, False)); dur.append(45)
    dur[-1] = 250
    save(frames, dur, "email_promo_drag.gif", scale=1, colors=48)


# ---------------------------------------------------------------- 5) reeks: vlam + teller 11 -> 12
def streak():
    W, H = 520, 560
    flame = Image.open(f"{IMG}/email_flame.png").convert("RGBA")
    flame = flame.resize((flame.width * 250 // flame.height * 1, 250), Image.LANCZOS)
    fn, ft = font(130, "Black"), font(40, "ExtraBold")

    def frame(roll, wob):
        f = Image.new("RGBA", (W, H), WHITE + (255,))
        sx, sy = 1 - 0.03 * math.sin(2 * wob), 1 + 0.05 * math.sin(2 * wob)
        fl = flame.resize((int(flame.width * sx), int(flame.height * sy)), Image.LANCZOS)
        f.alpha_composite(fl, ((W - fl.width) // 2, 260 - fl.height))
        num = Image.new("RGBA", (W, 160), WHITE + (255,))
        dn = ImageDraw.Draw(num)
        e = ease(roll)
        dn.text((W / 2, 80 - 150 * e), "11", font=fn, fill=ORANGE, anchor="mm")
        dn.text((W / 2, 80 + 150 * (1 - e)), "12", font=fn, fill=ORANGE, anchor="mm")
        f.alpha_composite(num, (0, 270))
        d = ImageDraw.Draw(f)
        d.text((W / 2, 470), "dagen op rij!", font=ft, fill=INK, anchor="mm")
        if 0 < roll < 1 or roll == 1:
            pass
        return f

    frames, dur = [], []
    frames.append(frame(1, 0)); dur.append(1600)
    for i in range(10):
        frames.append(frame(0, 2 * math.pi * i / 10)); dur.append(70)
    for i in range(1, 9):
        frames.append(frame(back(i / 8), 2 * math.pi * i / 10)); dur.append(45)
    for i in range(10):
        frames.append(frame(1, 2 * math.pi * i / 10)); dur.append(70)
    save(frames, dur, "email_promo_streak.gif", scale=0.5, colors=96)


# ---------------------------------------------------------------- 6) AI-chat: berichtjes komen één voor één binnen
def chat():
    W, H = 760, 600
    fh, fm = font(24, "Black"), font(29, "Bold")
    msgs = [(True, ["Waarom is B goed?"]),
            (False, ["Goede vraag! Erytrocyten zitten vol", "hemoglobine, het eiwit dat zuurstof", "bindt en door je lichaam vervoert."]),
            (True, ["En waarom A niet?"]),
            (False, ["Leukocyten zijn je afweercellen.", "Die hebben geen hemoglobine."])]

    def frame(n_full, appear=1.0, typing=None):
        f = Image.new("RGB", (W, H), PAGE)
        d = ImageDraw.Draw(f)
        card(d, (8, 8, W - 8, H - 8))
        d.text((52, 46), "AI-UITLEG", font=fh, fill=PURPLE)
        y = 100
        for k, (me, lines) in enumerate(msgs[:n_full + (1 if appear < 1 else 0)]):
            a = appear if k == n_full else 1.0
            lh = 40
            tw = max(d.textlength(l, font=fm) for l in lines)
            bw, bh = tw + 48, len(lines) * lh + 30
            dy = int(24 * (1 - ease(a)))
            if me:
                x1 = W - 52; x0 = x1 - bw
                bg, col = tuple(int(255 + (c - 255) * ease(a)) for c in BLUE), WHITE
            else:
                x0 = 52; x1 = x0 + bw
                bg, col = (0xF3, 0xF8, 0xFC), INK
            d.rounded_rectangle((x0, y + dy, x1, y + bh + dy), 30, fill=bg)
            if a > 0.4:
                for j, l in enumerate(lines):
                    d.text((x0 + 24, y + 15 + j * lh + dy), l, font=fm, fill=col)
            y += bh + 22
        if typing is not None:  # AI is aan het typen
            d.rounded_rectangle((52, y, 172, y + 64), 30, fill=(0xF3, 0xF8, 0xFC))
            for j in range(3):
                b = 0.5 + 0.5 * math.sin(typing * 2 * math.pi - j * 0.9)
                c = tuple(int(0xB5 + (0x5C - 0xB5) * b) for _ in range(1))[0]
                d.ellipse((80 + j * 26 - 8, y + 32 - 8 - int(5 * b), 80 + j * 26 + 8, y + 32 + 8 - int(5 * b)), fill=(c, c + 20, c + 40))
        return f

    frames, dur = [frame(4)], [2800]
    frames.append(frame(0)); dur.append(500)
    for k in range(4):
        me = msgs[k][0]
        if not me:
            for i in range(8):
                frames.append(frame(k, 1.0, typing=i / 8)); dur.append(90)
        for i in range(1, 6):
            frames.append(frame(k, i / 5)); dur.append(40)
        frames.append(frame(k + 1)); dur.append(900 if not me else 450)
    save(frames, dur, "email_promo_chat.gif", scale=1, colors=40)


ALL = {"icon": app_icon, "trophy": trophy, "quiz": quiz, "drag": drag, "streak": streak, "chat": chat}
for name in (sys.argv[3:] or ALL):
    ALL[name]()
