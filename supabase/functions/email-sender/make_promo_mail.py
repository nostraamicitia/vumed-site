"""Bouwt promo_mail.html (campagnemail, opgebouwd als de homepage).
Gebruik: python3 make_promo_mail.py            -> promo_mail.html (afbeeldingen van vumed.nl)
         python3 make_promo_mail.py <preview>  -> preview-bestand met lokale afbeeldingen
GIF's maken: make_promo_gifs.py"""
import os, sys
HERE=os.path.dirname(os.path.abspath(__file__)); ROOT=os.path.abspath(os.path.join(HERE,"../../.."))
PREVIEW=sys.argv[1] if len(sys.argv)>1 else None
F="'Nunito','Trebuchet MS',Arial,sans-serif"
SITE="https://vumed.nl"; L=SITE+"/?src=mail"
IMGS=("file://"+ROOT) if PREVIEW else SITE; APP="https://apps.apple.com/nl/app/vumed/id6793511885"
INK="#1C3144"; SUB="#5C7A92"; BLUE="#1CB0F6"

BTN={"blue":("#45C6FF","#1CB0F6","#0B8FD0","28,176,246"),"orange":("#FF9A3C","#FF7A00","#D45F00","255,122,0"),
     "black":("#3A3A3C","#111111","#000000","17,17,17")}
def btn(label,href,color="blue",margin="28px auto 4px",fs=23):
    a=round(fs*1.7)
    top,bot,edge,glow=BTN[color]
    return f'''<table role="presentation" cellpadding="0" cellspacing="0" style="margin:{margin};"><tr>
<td{' class="cta"' if color=="blue" else ""} bgcolor="{bot}" style="background:{bot};background-image:linear-gradient(180deg,{top} 0%,{bot} 100%);border-radius:16px;border-bottom:4px solid {edge};box-shadow:0 10px 22px rgba({glow},.30);">
<a href="{href}" style="display:inline-block;padding:19px 24px 19px 38px;font:800 {fs}px {F};color:#ffffff;text-decoration:none;letter-spacing:.4px;">{label}&nbsp;&nbsp;<span style="display:inline-block;width:{a}px;height:{a}px;line-height:{a}px;border-radius:{a//2}px;background:rgba(255,255,255,.25);text-align:center;font:800 {round(fs*1.05)}px Arial,sans-serif;vertical-align:middle;">&rarr;</span></a>
</td></tr></table>'''

def chip(text,bg,sh,fs=13):
    return f'<td style="padding:4px;"><div style="background:{bg};box-shadow:0 3px 0 {sh};border-radius:12px;padding:9px 13px;font:800 {fs}px {F};color:#ffffff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;">{text}</div></td>'

def floatchip(text,color):
    return f'<td style="padding:4px;"><div style="background:#ffffff;border:2px solid #E6EDF3;border-radius:12px;padding:7px 12px;font:800 14px {F};color:{color};white-space:nowrap;">{text}</div></td>'

def row(cells): return '<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;"><tr>'+''.join(cells)+'</tr></table>'

def section(title,text,art,bg="#ffffff"):
    return f'''<tr><td class="sec" align="center" style="background:{bg};padding:52px 36px;">
  <div class="h2" style="font:900 32px {F};color:{BLUE};letter-spacing:-.4px;line-height:1.2;">{title}</div>
  <div class="p" style="font:500 18px {F};color:{SUB};line-height:1.6;margin:14px auto 0;max-width:460px;">{text}</div>
  <div style="margin-top:30px;">{art}</div>
</td></tr>'''

def card(inner,w=380):
    return f'''<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:{w}px;margin:0 auto;"><tr>
<td style="background:#ffffff;border:2px solid #E6EDF3;border-bottom-width:5px;border-radius:20px;padding:22px 20px;text-align:left;">{inner}</td></tr></table>'''

def opt(letter,text,state=None):
    bd,bg,col="#E6EDF3","#ffffff",INK
    if state=="good": bd,bg,col="#58CC02","#D7FFB8","#3d9200"
    return f'''<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:8px 0 0;"><tr>
<td style="border:2px solid {bd};border-bottom-width:4px;background:{bg};border-radius:14px;padding:11px 14px;font:700 16px {F};color:{col};">
<span style="display:inline-block;width:24px;height:24px;border:2px solid {bd};border-radius:8px;text-align:center;font:800 13px {F};line-height:24px;color:{col};margin-right:10px;">{letter}</span>{text}</td></tr></table>'''

# 1-4: geanimeerde mockups (make_promo_gifs.py)
q = f'<img src="{IMGS}/images/email_promo_quiz.gif" width="380" height="320" alt="Voorbeeldvraag: welke bloedcellen bevatten hemoglobine? Erytrocyten. Goed! +10 XP" style="display:block;margin:0 auto;border:0;max-width:100%;height:auto;">'
tent = f'<img src="{IMGS}/images/email_promo_drag.gif" width="380" height="280" alt="Sleepvraag uit een oud VU-tentamen" style="display:block;margin:0 auto;border:0;max-width:100%;height:auto;">' + '<div style="height:16px;"></div>' + row([chip("Meerkeuze","#1CB0F6","#0E85B5"),chip("Sleepvraag","#58CC02","#3d9200"),chip("Casus","#FF9600","#C97500"),chip("Open vraag","#B57BF6","#8A54C9")])
streak = f'<img src="{IMGS}/images/email_promo_streak.gif" width="200" height="215" alt="12 dagen op rij" style="display:block;margin:0 auto;border:0;max-width:100%;height:auto;">' + '<div style="height:16px;"></div>' + row([floatchip("+1 dag","#FF9600"),floatchip("Dagdoel gehaald","#58CC02"),floatchip("Streakbevriezer","#5AC8FF")])
ai = f'<img src="{IMGS}/images/email_promo_chat.gif" width="380" height="360" alt="AI-uitleg: Waarom is B goed?" style="display:block;margin:0 auto;border:0;max-width:100%;height:auto;">'

# 5 — app én web
def platform(tag,tagcol,title,text,visual,button):
    return f'''<td class="plat" width="48%" align="center" valign="top" style="background:#ffffff;border:2px solid #E6EDF3;border-bottom-width:5px;border-radius:20px;padding:22px 14px 22px;vertical-align:top;">
<div style="display:inline-block;background:{tagcol};border-radius:8px;padding:4px 10px;font:800 11px {F};color:#ffffff;letter-spacing:1px;">{tag}</div>
<div style="font:900 22px {F};color:{INK};margin-top:10px;">{title}</div>
<div style="font:500 15px {F};color:{SUB};line-height:1.5;margin-top:4px;height:68px;">{text}</div>
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-top:12px;"><tr><td align="center" valign="middle" height="160" style="height:160px;vertical-align:middle;">{visual}</td></tr></table>
{button}
</td>'''
app_visual = f'<img src="{IMGS}/qr_appstore.png" width="118" height="118" alt="QR-code App Store" style="display:block;margin:0 auto;border:0;border-radius:12px;"><div style="font:700 13px {F};color:#8FA8BC;margin-top:6px;">Scan met je iPhone</div>'
web_visual = f'''<table role="presentation" cellpadding="0" cellspacing="0" width="150" style="margin:0 auto;"><tr><td style="border:2px solid #E6EDF3;border-radius:12px;overflow:hidden;">
<div style="background:#F3F8FC;padding:6px 8px;text-align:left;"><span style="display:inline-block;width:7px;height:7px;border-radius:4px;background:#FF5F57;"></span> <span style="display:inline-block;width:7px;height:7px;border-radius:4px;background:#FEBC2E;"></span> <span style="display:inline-block;width:7px;height:7px;border-radius:4px;background:#28C840;"></span></div>
<div style="padding:16px 8px 14px;text-align:center;"><img src="{IMGS}/images/email_promo_icon_sm.png" width="62" height="65" alt="" style="display:block;margin:-6px auto -10px;border:0;"><div style="font:800 14px {F};color:{BLUE};margin-top:8px;">vumed.nl</div></div>
</td></tr></table><div style="font:700 13px {F};color:#8FA8BC;margin-top:6px;">Niets installeren</div>'''
app = f'''<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:500px;margin:0 auto;"><tr>
{platform("APP","#111111","iPhone-app","Gratis in de App Store. Oefen in de trein of tussen colleges door.",app_visual,btn("App Store",APP,"black","16px auto 0",15))}
<td class="gap" width="4%" style="font-size:0;line-height:0;">&nbsp;</td>
{platform("WEB",BLUE,"Webversie","Op je laptop, tablet of Android-telefoon. Gewoon in je browser.",web_visual,btn("vumed.nl",L,"blue","16px auto 0",15))}
</tr></table>
'''

def stat(num,lbl,top,bot,edge,glow,lc):
    return f'''<td class="stat" width="33%" style="padding:0 5px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" bgcolor="{bot}" style="background:{bot};background-image:linear-gradient(180deg,{top} 0%,{bot} 100%);border-radius:16px;border-bottom:4px solid {edge};box-shadow:0 10px 22px rgba({glow},.30);padding:16px 4px;">
<div class="num" style="font:900 24px {F};color:#ffffff;line-height:1.1;">{num}</div>
<div class="lbl" style="font:800 11px {F};color:{lc};letter-spacing:.6px;margin-top:4px;">{lbl}</div></td></tr></table></td>'''

def feat(img,title,text,link,label):
    return f'''<tr><td style="padding:0 0 14px;">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr>
<td style="background:#ffffff;border:2px solid #E6EDF3;border-bottom-width:5px;border-radius:20px;padding:22px 22px;">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr>
<td width="76" style="vertical-align:top;"><img src="{IMGS}/images/{img}" width="68" height="68" alt="" style="display:block;border:0;"></td>
<td style="padding-left:14px;vertical-align:top;text-align:left;">
<div style="font:900 22px {F};color:{INK};">{title}</div>
<div style="font:500 16px {F};color:{SUB};line-height:1.5;margin-top:4px;">{text}</div>
<a href="{link}" style="display:inline-block;margin-top:8px;font:800 15px {F};color:{BLUE};text-decoration:none;">{label} &rarr;</a>
</td></tr></table></td></tr></table></td></tr>'''

subjects=["Arts en Patiënt","Start van het Leven","Groei en Ontwikkeling","Huid en Afweer","Bouw en Bewegen","Homeostase","Metabole Systemen","Circulatie en Volumeregulatie","Circulatie en Vasculaire Stoornissen","Spijsvertering en Stofwisseling","Hematologie en Oncologie","Infectie en Inflammatie","Schade, Afweer en Herstel","Hersenen en Zintuigen","Neurologie en Oogheelkunde","Psychisch Functioneren en Cognitie","Leefstijl en Gezondheidszorg","MWO"]
pal=[("#1CB0F6","#0E85B5"),("#58CC02","#3d9200"),("#FF9600","#C97500"),("#B57BF6","#8A54C9"),("#FF4B4B","#C93030"),("#16C7B5","#0E9184")]
chips=''.join(f'<a href="{L}" style="display:inline-block;margin:4px 3px;background:{pal[i%6][0]};box-shadow:0 3px 0 {pal[i%6][1]};border-radius:12px;padding:9px 13px;font:800 12px {F};color:#ffffff;letter-spacing:.5px;text-transform:uppercase;text-decoration:none;">{s}</a>' for i,s in enumerate(subjects))

html=f'''<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<title>VUmed</title>
<!--
  Promo-mail VUmed (campagne), opgebouwd als de homepage van vumed.nl.
  Onderwerp:  Klaar met verouderde pdf'jes? Maak kennis met VUmed
  Preheader:  Alle oude CAT's van jaar 1 t/m 3 op één plek, interactief en met uitleg.
  Link-tracking: ?src=mail  (wordt opgeslagen in signup_sources)
-->
<style>
  @keyframes pulse {{ 0%,100% {{ box-shadow:0 10px 22px rgba(28,176,246,.30); }} 50% {{ box-shadow:0 10px 34px rgba(28,176,246,.60); }} }}
  @keyframes bob {{ 0%,100% {{ transform:translateY(0); }} 50% {{ transform:translateY(-3px); }} }}
  .cta {{ animation:pulse 2.2s ease-in-out infinite; }}
  .chips a {{ animation:bob 2.8s ease-in-out infinite; }}
  .chips a:nth-child(3n+2) {{ animation-delay:.5s; }}
  .chips a:nth-child(3n) {{ animation-delay:1s; }}
  @media (prefers-reduced-motion:reduce) {{ .cta, .chips a {{ animation:none; }} }}
  @media only screen and (max-width:620px){{
    .sec{{padding:40px 20px !important}}
    .hero{{padding:36px 20px 40px !important}}
    .h1{{font-size:28px !important}}
    .h2{{font-size:27px !important}}
    .p{{font-size:16px !important}}
    .plat{{display:block !important;width:auto !important}}
    .gap{{display:block !important;width:auto !important;height:14px !important}}
    .num{{font-size:19px !important}}
    .lbl{{font-size:10px !important;letter-spacing:.2px !important}}
  }}
</style>
</head>
<body style="margin:0;padding:0;background:#EDF4FA;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">Alle oude CAT's van jaar 1 t/m 3 op één plek, interactief en met uitleg.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#EDF4FA;"><tr><td align="center" style="padding:28px 10px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:#ffffff;border-radius:24px;overflow:hidden;">

<!-- introductie -->
<tr><td class="hero" align="center" style="padding:40px 36px 48px;">
  <img src="{IMGS}/images/email_promo_icon.gif" width="190" height="198" alt="VUmed" style="display:block;margin:0 auto;border:0;">
  <div class="h1" style="font:900 36px {F};color:{INK};letter-spacing:-.5px;line-height:1.2;margin-top:10px;">Maak kennis met <span style="color:{BLUE};">VUmed</span>.<br>Alle oude CAT's op één plek.</div>
  <div class="p" style="font:500 18px {F};color:{SUB};line-height:1.6;margin:14px auto 0;max-width:430px;">Elk oud VU-tentamen van jaar 1 t/m 3, interactief en met uitleg. Gratis, als app én in je browser.</div>
  {btn("Aan de slag",L)}
</td></tr>

<!-- vakken -->
<tr><td class="chips" align="center" style="border-top:2px solid #E6EDF3;border-bottom:2px solid #E6EDF3;padding:18px 16px;">
  <div style="font:800 12px {F};color:#8FA8BC;letter-spacing:1.2px;margin-bottom:8px;">ALLE VAKKEN VAN JAAR 1 T/M 3</div>
  {chips}
</td></tr>

{section("Gratis. Leuk. Effectief.","Met korte, interactieve vragen verdien je XP, houd je je reeks vast en ontgrendel je beloningen, terwijl de stof écht blijft hangen.",q)}
{section("Échte VU-tentamens","Geen losse flashcards, maar de oude toetsen zelf: meerkeuze, sleepvragen, casussen en open vragen. Precies zoals je ze op het tentamen krijgt.",tent,"#F7FBFE")}
{section("Blijf gemotiveerd","Dagelijkse reeksen, dagdoelen, missies, schatkisten en een trofeeënpad van student tot specialist. Elke dag een beetje, zo blijft kennis plakken.",streak)}
{section("Persoonlijke uitleg met AI","Snap je een vraag niet? De AI-uitleg legt stap voor stap uit waarom een antwoord goed of fout is, tot het kwartje valt.",ai,"#F7FBFE")}
{section("Oefen waar en wanneer je wilt","VUmed is er als iPhone-app én als webversie. Kies wat jij fijn vindt, of gebruik ze allebei.",app)}

<!-- drie kaarten -->
<tr><td class="sec" style="background:#F7FBFE;padding:44px 28px 30px;">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%">
{feat("email_badge.gif","Tentamens","Alle oude VU-tentamens, per vak en toetsmoment, met uitleg en begrippenlijst.",L,"Bekijk de tentamens")}
{feat("email_flame.gif","Missies","Eén vraag tegelijk per onderwerp. Je fouten komen terug tot je álles beheerst.",L,"Start een missie")}
{feat("email_trophy.gif","Klassement","Verdien XP, verzamel badges en neem het elke week op tegen je jaargenoten.",L,"Bekijk het klassement")}
</table></td></tr>

<!-- slot -->
<tr><td class="sec" align="center" style="padding:56px 36px 54px;">
  <img src="{IMGS}/images/email_promo_trophy.gif" width="230" height="203" alt="" style="display:block;margin:0 auto;border:0;">
  <div class="h2" style="font:900 34px {F};color:{INK};letter-spacing:-.4px;line-height:1.2;margin-top:14px;">Klaar voor je<br><span style="color:{BLUE};">volgende tentamen?</span></div>
  <div class="p" style="font:500 18px {F};color:{SUB};line-height:1.6;margin:14px auto 0;max-width:440px;">Maak gratis een account en oefen vandaag nog je eerste oude CAT. Je ziet meteen welke onderwerpen je al beheerst en waar je nog punten laat liggen.</div>
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:28px auto 0;max-width:460px;"><tr>
    {stat("Alle","OUDE VU-TENTAMENS","#45C6FF","#1CB0F6","#0B8FD0","28,176,246","#D9F1FF")}
    {stat("€0","ALTIJD GRATIS","#FFD84D","#FFC200","#D99A00","255,194,0","#FFF3CC")}
    {stat("App + web","JIJ KIEST","#FF9A3C","#FF7A00","#D45F00","255,122,0","#FFE3CC")}
  </tr></table>
  {btn("Begin met oefenen",L,"blue","32px auto 4px",18)}
  <div style="font:700 15px {F};color:#8FA8BC;margin-top:14px;">of <a href="{APP}" style="color:{BLUE};text-decoration:none;">download de iPhone-app</a></div>
  <img src="{IMGS}/images/email_promo_doctor.gif" width="440" height="100" alt="" style="display:block;margin:30px auto 0;border:0;max-width:100%;height:auto;">
  <div style="font:500 16px {F};color:{SUB};line-height:1.6;margin:22px auto 0;max-width:440px;">Gemaakt door een VU-geneeskundestudent, voor VU-geneeskundestudenten. Mis je iets of zie je een fout? Stuur gewoon een reply.<br><br><b style="color:{INK};">Succes met studeren!<br>Tijmen</b></div>
</td></tr>

</table>

<!-- footer -->
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;"><tr><td align="center" style="padding:20px 24px 0;">
  <div style="font:400 12px {F};color:#8FA8BC;line-height:1.6;">
    VUmed is een studentenproject en niet verbonden aan de VU of het Amsterdam UMC.<br>
    Liever geen mails meer? Stuur een reply met "afmelden". &nbsp;·&nbsp; <a href="{L}" style="color:#8FA8BC;text-decoration:underline;">vumed.nl</a>
  </div>
</td></tr></table>

</td></tr></table>
</body>
</html>
'''
open(PREVIEW or os.path.join(HERE,"promo_mail.html"),"w").write(html)
