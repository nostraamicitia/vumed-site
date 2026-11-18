#!/usr/bin/env python3
"""Genereert de mail-illustraties (kopbeelden + iconen) als PNG via Chrome headless.

  python3 email_art.py <mascotte-svg-map> <uitvoer-map>

Kopbeelden: 1120x440 (wordt 560x220 in de mail). Iconen: 128x128 transparant.
"""
import os, random, subprocess, sys, tempfile

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
MASCOT_DIR, OUT = sys.argv[1], sys.argv[2]
os.makedirs(OUT, exist_ok=True)
TMP = tempfile.mkdtemp()


def shot(html, out, w, h, transparent=False):
    path = os.path.join(TMP, os.path.basename(out) + ".html")
    open(path, "w").write(html)
    args = [CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--allow-file-access-from-files",
            f"--window-size={w},{h}", f"--screenshot={out}", "file://" + path]
    if transparent:
        args.insert(1, "--default-background-color=00000000")
    subprocess.run(args, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)


# ---------------------------------------------------------------- iconen (viewBox 0 0 64 64)
ICONS = {
    "book": """<rect x="9" y="7" width="42" height="50" rx="7" fill="#1899D6"/><rect x="9" y="7" width="42" height="44" rx="7" fill="#1CB0F6"/>
      <rect x="13" y="45" width="40" height="11" rx="4" fill="#fff"/><path d="M17 49h30M17 53h26" stroke="#CFE3F0" stroke-width="2"/>
      <rect x="20" y="15" width="22" height="5" rx="2.5" fill="#fff" opacity=".9"/><rect x="20" y="24" width="15" height="4" rx="2" fill="#fff" opacity=".55"/>
      <path d="M40 7h7v16l-3.5-3-3.5 3z" fill="#FF4B4B"/>""",
    "clock": """<circle cx="32" cy="34" r="25" fill="#E07F00"/><circle cx="32" cy="32" r="25" fill="#FF9600"/><circle cx="32" cy="32" r="18" fill="#fff"/>
      <path d="M32 19v13l9 6" stroke="#1C3144" stroke-width="4.5" stroke-linecap="round" fill="none"/><circle cx="32" cy="32" r="3.5" fill="#1C3144"/>
      <path d="M22 13a14 14 0 0 1 20 0" stroke="#FFC48A" stroke-width="3" fill="none" stroke-linecap="round" opacity=".8"/>""",
    "flame": """<path d="M32 3c4 12 19 18 19 36a19 19 0 0 1-38 0c0-10 6-17 10-23 2 6 4 8 6 8 0-8 0-14 3-21z" fill="#FF9600"/>
      <path d="M32 3c4 12 19 18 19 36a19 19 0 0 1-9 16c5-6 6-22-10-32z" fill="#FF7A00"/>
      <path d="M32 31c4 6 9 9 9 15a9 9 0 0 1-18 0c0-5 5-9 9-15z" fill="#FFC800"/>""",
    "flame_grey": """<path d="M32 3c4 12 19 18 19 36a19 19 0 0 1-38 0c0-10 6-17 10-23 2 6 4 8 6 8 0-8 0-14 3-21z" fill="#C3CFD9"/>
      <path d="M32 31c4 6 9 9 9 15a9 9 0 0 1-18 0c0-5 5-9 9-15z" fill="#E4EAEF"/>""",
    "check": """<circle cx="32" cy="34" r="26" fill="#46A302"/><circle cx="32" cy="32" r="26" fill="#58CC02"/>
      <path d="M20 33l8 8 16-17" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M14 22a20 20 0 0 1 12-10" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".45" fill="none"/>""",
    "trophy": """<path d="M14 12h-6v6c0 9 7 14 13 14M50 12h6v6c0 9-7 14-13 14" stroke="#E8A400" stroke-width="5" fill="none"/>
      <path d="M14 8h36v14c0 12-8 20-18 20s-18-8-18-20z" fill="#FFC800"/><path d="M38 8h12v14c0 12-8 20-18 20 8-6 6-22 6-34z" fill="#F5B400"/>
      <rect x="27" y="41" width="10" height="8" fill="#E8A400"/><rect x="18" y="48" width="28" height="9" rx="3" fill="#B97D00"/>
      <path d="M32 15l2.8 5.7 6.2.9-4.5 4.4 1 6.2-5.5-2.9-5.5 2.9 1-6.2-4.5-4.4 6.2-.9z" fill="#fff"/>""",
    "medal": """<path d="M18 4h12l6 22H24zM46 4H34l-6 22h12z" fill="#1CB0F6"/><path d="M34 4h12l-6 22h-6z" fill="#1899D6"/>
      <circle cx="32" cy="40" r="19" fill="#8E55E0"/><circle cx="32" cy="38" r="19" fill="#B57BF6"/><circle cx="32" cy="38" r="13" fill="#CFA6FF"/>
      <path d="M32 29l3 6 6.5 1-4.7 4.6 1.1 6.4L32 44l-5.9 3 1.1-6.4-4.7-4.6 6.5-1z" fill="#fff"/>""",
    "phone": """<rect x="16" y="4" width="32" height="56" rx="8" fill="#1C3144"/><rect x="19" y="10" width="26" height="42" rx="3" fill="#1CB0F6"/>
      <rect x="23" y="16" width="18" height="5" rx="2.5" fill="#fff"/><rect x="23" y="25" width="18" height="7" rx="3" fill="#58CC02"/>
      <rect x="23" y="35" width="18" height="7" rx="3" fill="#fff" opacity=".8"/><rect x="27" y="6" width="10" height="2" rx="1" fill="#3C5A73"/>""",
    "calendar": """<rect x="8" y="12" width="48" height="46" rx="8" fill="#E1E8EE"/><rect x="8" y="10" width="48" height="46" rx="8" fill="#fff" stroke="#D3DEE6" stroke-width="2"/>
      <path d="M8 18a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v6H8z" fill="#FF4B4B"/><rect x="18" y="4" width="5" height="12" rx="2.5" fill="#3C5A73"/><rect x="41" y="4" width="5" height="12" rx="2.5" fill="#3C5A73"/>
      <g fill="#C3D2DD"><rect x="15" y="31" width="7" height="6" rx="2"/><rect x="28" y="31" width="7" height="6" rx="2"/><rect x="41" y="31" width="7" height="6" rx="2"/><rect x="15" y="42" width="7" height="6" rx="2"/><rect x="28" y="42" width="7" height="6" rx="2"/></g>
      <rect x="41" y="42" width="7" height="6" rx="2" fill="#FF4B4B"/>""",
    "bulb": """<path d="M32 5a19 19 0 0 0-11 34c2 2 3 4 3 7h16c0-3 1-5 3-7A19 19 0 0 0 32 5z" fill="#FFC800"/>
      <path d="M32 5a19 19 0 0 1 11 34c-2 2-3 4-3 7h-6c0-3 10-12 8-25-1-8-6-14-10-16z" fill="#F5B400"/>
      <rect x="23" y="48" width="18" height="5" rx="2.5" fill="#8FA8BC"/><rect x="25" y="55" width="14" height="5" rx="2.5" fill="#6F8A9F"/>
      <path d="M22 22a11 11 0 0 1 8-8" stroke="#fff" stroke-width="3.5" stroke-linecap="round" fill="none" opacity=".75"/>""",
    "snow": """<circle cx="32" cy="34" r="27" fill="#84D8FF"/><circle cx="32" cy="32" r="27" fill="#C8EEFF"/>
      <g stroke="#1CB0F6" stroke-width="4" stroke-linecap="round"><path d="M32 13v38M15.5 22.5l33 19M15.5 41.5l33-19"/>
      <path d="M26 16l6 5 6-5M26 48l6-5 6 5" fill="none"/></g>""",
    "target": """<circle cx="32" cy="34" r="26" fill="#E03C3C"/><circle cx="32" cy="32" r="26" fill="#FF4B4B"/><circle cx="32" cy="32" r="18" fill="#fff"/>
      <circle cx="32" cy="32" r="10" fill="#FF4B4B"/><circle cx="32" cy="32" r="4" fill="#fff"/>""",
    "question": """<path d="M10 10h44a6 6 0 0 1 6 6v26a6 6 0 0 1-6 6H30l-12 10v-10h-8a6 6 0 0 1-6-6V16a6 6 0 0 1 6-6z" fill="#1CB0F6"/>
      <text x="32" y="40" font-family="Nunito,Arial" font-weight="900" font-size="30" fill="#fff" text-anchor="middle">?</text>""",
    "users": """<circle cx="22" cy="22" r="10" fill="#FF9600"/><path d="M4 52c0-11 8-18 18-18s18 7 18 18z" fill="#FF9600"/>
      <circle cx="43" cy="24" r="9" fill="#1CB0F6"/><path d="M28 54c0-10 7-17 15-17s16 7 16 17z" fill="#1CB0F6"/>""",
    "heart": """<path d="M32 56S6 40 6 22A13 13 0 0 1 32 15a13 13 0 0 1 26 7c0 18-26 34-26 34z" fill="#FF4B4B"/>
      <path d="M14 18a7 7 0 0 1 8-5" stroke="#fff" stroke-width="3.5" stroke-linecap="round" fill="none" opacity=".6"/>""",
}

for name, body in ICONS.items():
    html = f"""<html><body style="margin:0;background:transparent;">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="128" height="128">{body}</svg></body></html>"""
    shot(html, os.path.join(OUT, f"email_i_{name}.png"), 128, 128, transparent=True)


# ---------------------------------------------------------------- kopbeelden
def plus_pattern(seed, color="#fff", opacity=0.14, n=34):
    rnd = random.Random(seed)
    out = []
    for _ in range(n):
        x, y = rnd.randint(10, 1100), rnd.randint(10, 420)
        if 330 < x < 790 and y > 40:  # vrij rond de mascotte
            continue
        s = rnd.choice([10, 14, 18])
        if rnd.random() < 0.6:
            out.append(f'<path d="M{x-s} {y}h{2*s}M{x} {y-s}v{2*s}" stroke="{color}" stroke-width="{s/2.6:.1f}" stroke-linecap="round" opacity="{opacity}"/>')
        else:
            out.append(f'<circle cx="{x}" cy="{y}" r="{s/2.2:.1f}" fill="{color}" opacity="{opacity}"/>')
    return "".join(out)


def confetti(seed, colors, n=30):
    rnd = random.Random(seed)
    out = []
    for _ in range(n):
        x, y = rnd.randint(20, 1100), rnd.randint(14, 300)
        if 380 < x < 740 and y > 50:
            continue
        w, h = rnd.choice([(14, 26), (12, 12), (8, 22)])
        out.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="3" fill="{rnd.choice(colors)}" transform="rotate({rnd.randint(-60, 60)} {x} {y})"/>')
    return "".join(out)


def sparkle(x, y, s, color="#fff", op=1):
    return (f'<path d="M{x} {y-s}C{x+s*.15} {y-s*.15} {x+s*.15} {y-s*.15} {x+s} {y}C{x+s*.15} {y+s*.15} {x+s*.15} {y+s*.15} {x} {y+s}'
            f'C{x-s*.15} {y+s*.15} {x-s*.15} {y+s*.15} {x-s} {y}C{x-s*.15} {y-s*.15} {x-s*.15} {y-s*.15} {x} {y-s}z" fill="{color}" opacity="{op}"/>')


def icon(name, x, y, size, rot=0):
    return f'<g transform="translate({x},{y}) rotate({rot} {size/2} {size/2}) scale({size/64})">{ICONS[name]}</g>'


def drop(x, y, s, color="#7FD4FF"):
    return f'<path d="M{x} {y}c{s*.5} {s*.8} {s*.9} {s*1.2} {s*.9} {s*1.7}a{s*.9} {s*.9} 0 0 1-{s*1.8} 0c0-{s*.5} {s*.4}-{s*.9} {s*.9}-{s*1.7}z" fill="{color}"/>'


def cloud(x, y, s, fill="#fff", shade="#DCE6EE"):
    return (f'<g transform="translate({x},{y}) scale({s})">'
            f'<path d="M30 70h120a30 30 0 0 0 0-60 40 40 0 0 0-74-8A32 32 0 0 0 30 70z" fill="{shade}" transform="translate(0,6)"/>'
            f'<path d="M30 70h120a30 30 0 0 0 0-60 40 40 0 0 0-74-8A32 32 0 0 0 30 70z" fill="{fill}"/></g>')


def books(x, y):
    return f"""<g transform="translate({x},{y})">
      <rect x="0" y="120" width="190" height="40" rx="8" fill="#FF4B4B"/><rect x="10" y="128" width="170" height="8" rx="4" fill="#fff" opacity=".9"/>
      <rect x="18" y="80" width="170" height="40" rx="8" fill="#58CC02"/><rect x="26" y="88" width="150" height="8" rx="4" fill="#fff" opacity=".9"/>
      <rect x="-6" y="40" width="180" height="40" rx="8" fill="#FFC800"/><rect x="2" y="48" width="160" height="8" rx="4" fill="#fff" opacity=".9"/>
      <rect x="28" y="62" width="60" height="6" rx="3" fill="#B97D00" opacity=".5"/></g>"""


def clipboard(x, y, rot=8):
    rows = "".join(f'<g transform="translate(26,{60+i*42})"><circle cx="12" cy="12" r="12" fill="#58CC02"/>'
                   f'<path d="M6 12l4 4 8-8" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
                   f'<rect x="34" y="6" width="{90-i*14}" height="10" rx="5" fill="#C3D2DD"/></g>' for i in range(3))
    return f"""<g transform="translate({x},{y}) rotate({rot})"><rect x="0" y="14" width="170" height="210" rx="16" fill="#B97D00"/>
      <rect x="12" y="30" width="146" height="182" rx="10" fill="#fff"/>{rows}
      <rect x="50" y="0" width="70" height="30" rx="10" fill="#8FA8BC"/></g>"""


def alarm(x, y, rot=-10):
    return f"""<g transform="translate({x},{y}) rotate({rot} 100 100)">
      <path d="M40 60a26 26 0 0 1 36-26M160 60a26 26 0 0 0-36-26" stroke="#E03C3C" stroke-width="16" stroke-linecap="round" fill="none"/>
      <path d="M60 176l-14 18M140 176l14 18" stroke="#3C5A73" stroke-width="10" stroke-linecap="round"/>
      <circle cx="100" cy="112" r="72" fill="#E03C3C"/><circle cx="100" cy="108" r="72" fill="#FF4B4B"/><circle cx="100" cy="108" r="54" fill="#fff"/>
      <path d="M100 70v38l26 18" stroke="#1C3144" stroke-width="10" stroke-linecap="round" fill="none"/><circle cx="100" cy="108" r="8" fill="#1C3144"/>
      <path d="M-10 70l-22-8M-14 104h-26M-10 138l-22 8M210 70l22-8M214 104h26M210 138l22 8" stroke="#fff" stroke-width="8" stroke-linecap="round" opacity=".85"/></g>"""


def cal_page(x, y, rot=8, mark="#FF4B4B"):
    cells = "".join(f'<rect x="{22+(i%4)*36}" y="{86+(i//4)*34}" width="26" height="22" rx="6" fill="{mark if i == 10 else "#D3DEE6"}"/>' for i in range(12))
    return f"""<g transform="translate({x},{y}) rotate({rot} 90 100)"><rect x="0" y="16" width="170" height="200" rx="18" fill="#C3D2DD"/>
      <rect x="0" y="8" width="170" height="200" rx="18" fill="#fff"/><path d="M0 26a18 18 0 0 1 18-18h134a18 18 0 0 1 18 18v38H0z" fill="#FF4B4B"/>
      <rect x="34" y="-6" width="14" height="34" rx="7" fill="#3C5A73"/><rect x="122" y="-6" width="14" height="34" rx="7" fill="#3C5A73"/>{cells}
      <circle cx="{22+2*36+13}" cy="{86+2*34+11}" r="22" fill="none" stroke="#FF4B4B" stroke-width="5"/></g>"""


def trophy(x, y, s=3.2):
    return icon("trophy", x, y, 64 * s)


def podium(x, y):
    return f"""<g transform="translate({x},{y})">
      <rect x="0" y="80" width="70" height="90" rx="8" fill="#C3D2DD"/><rect x="70" y="30" width="70" height="140" rx="8" fill="#FFC800"/><rect x="140" y="105" width="70" height="65" rx="8" fill="#E9A06B"/>
      <text x="35" y="140" font-family="Nunito,Arial" font-weight="900" font-size="44" fill="#fff" text-anchor="middle">2</text>
      <text x="105" y="100" font-family="Nunito,Arial" font-weight="900" font-size="54" fill="#fff" text-anchor="middle">1</text>
      <text x="175" y="152" font-family="Nunito,Arial" font-weight="900" font-size="40" fill="#fff" text-anchor="middle">3</text></g>"""


HEROES = {
    # naam: (achtergrond, gloed, mascotte, decoratie)
    "welkom": ("#1CB0F6", "#7FD4FF", "juichend",
               plus_pattern(1) + confetti(2, ["#FFC800", "#58CC02", "#FF4B4B", "#fff", "#FF9600"]) + books(70, 190) + clipboard(870, 150)
               + sparkle(300, 90, 22) + sparkle(820, 70, 16) + sparkle(250, 170, 12, op=.8)),
    "paniek": ("#FF9600", "#FFC48A", "paniek",
               plus_pattern(3) + alarm(70, 140) + cal_page(880, 160)
               + drop(300, 120, 26) + drop(820, 100, 22) + drop(330, 220, 16) + drop(790, 210, 18)),
    "huilend": ("#7FA3BE", "#B5CBDB", "huilend",
                plus_pattern(4, opacity=.1) + cloud(90, 40, 1.15) + cloud(860, 70, .95)
                + "".join(drop(x, y, 14, "#DFF3FF") for x, y in [(130, 150), (180, 190), (230, 160), (150, 240), (210, 270), (900, 170), (950, 210), (1000, 175), (930, 260), (990, 290)])
                + icon("flame_grey", 120, 300, 120, -12) + icon("flame_grey", 930, 320, 90, 14)),
    "reeks": ("#FF4B4B", "#FF9A8A", "paniek",
              plus_pattern(5) + icon("flame", 70, 150, 230, -8) + icon("flame", 900, 190, 170, 10) + alarm(860, 20, 8).replace("translate(860,20)", "translate(880,30) scale(.55)")
              + sparkle(320, 100, 18) + sparkle(800, 260, 14)),
    "week": ("#58CC02", "#A5ED6E", "trots",
             plus_pattern(6) + podium(60, 250) + trophy(870, 150)
             + sparkle(300, 80, 24) + sparkle(820, 90, 18) + sparkle(260, 200, 12) + sparkle(1060, 120, 14)),
    "badge": ("#A56EF0", "#D2B3FF", "juichend",
              plus_pattern(7) + confetti(8, ["#FFC800", "#58CC02", "#1CB0F6", "#fff", "#FF4B4B"]) + icon("medal", 860, 130, 230, 8) + icon("trophy", 80, 200, 170, -10)
              + sparkle(300, 90, 22) + sparkle(800, 70, 16)),
    "algemeen": ("#1CB0F6", "#7FD4FF", "blij", plus_pattern(9) + books(70, 190) + icon("question", 880, 150, 190, 8) + sparkle(300, 100, 18)),
}

for name, (bg, glow, mascot, deco) in HEROES.items():
    msvg = "file://" + os.path.join(MASCOT_DIR, f"{mascot}.svg")
    html = f"""<html><body style="margin:0;">
    <div style="position:relative;width:1120px;height:440px;overflow:hidden;background:{bg};">
      <div style="position:absolute;left:300px;top:40px;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,{glow} 0%,{glow}00 68%);opacity:.75;"></div>
      <svg xmlns="http://www.w3.org/2000/svg" width="1120" height="440" viewBox="0 0 1120 440" style="position:absolute;left:0;top:0;">{deco}</svg>
      <img src="{msvg}" style="position:absolute;left:340px;top:26px;width:440px;height:440px;">
    </div></body></html>"""
    shot(html, os.path.join(OUT, f"email_h_{name}.png"), 1120, 440)

print("klaar:", OUT)
