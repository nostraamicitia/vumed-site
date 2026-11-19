# VUmed mailstijl

Vaste huisstijl voor **alle** VUmed-mails (automatische mails én custom broadcasts).
Nieuwe mails bouw je met de bestaande bouwstenen in `index.ts`. Schrijf geen losse inline-styles opnieuw.
Live sinds 2026-11-19 (email-sender v15).

## Opbouw
- `shell()` levert de lichtblauwe achtergrond `#EDF4FA`, het logo (`email_logo.png`) met het woord "VUmed", een witte kaart met radius 20 en daaronder de afmeldregel. Gebruik hem altijd.
- Volgorde in de kaart:
  1. illustratie (GIF)
  2. kop (800, 26–30px, `#1C3144`)
  3. tekst (400, 15–16px, `#5C7A92`, max-width 420–440px)
  4. eventueel detail (tegels, strip, `infoBox`)
  5. knop
- Lettertype: `FONT` (Nunito → Trebuchet → Arial).

## Knop-stijl (het herkenningspunt)
Alles wat "klikbaar" of "uitgelicht" is, krijgt dezelfde behandeling:
- **verloop** van licht (boven) naar basiskleur (onder), met `bgcolor` als effen terugval voor Outlook
- **3D-rand**: `border-bottom: 4px solid <donker>`
- **gloed**: `box-shadow: 0 10px 22px rgba(<kleur>, .30)`
- radius 16px, witte tekst (800)

Zo gebruik je het:
- Knoppen gaan via `btn(label, href, kleur)`, met als kleur `blue` (standaard), `orange` (streak/vlam) of `purple` (badges). Ze hebben altijd een pijl in een rondje.
- Stat-tegels gaan via `tile()` in de weekrecap.
- Illustraties gaan via `button_style()` in `make_gifs.py` (verloop, 3D-rand, gloed), zie het hart in `email_welkom.gif`.

| kleur  | licht     | basis     | rand      | gloed (rgb)  |
|--------|-----------|-----------|-----------|--------------|
| blauw  | `#45C6FF` | `#1CB0F6` | `#0B8FD0` | 28,176,246   |
| oranje | `#FF9A3C` | `#FF7A00` | `#D45F00` | 255,122,0    |
| geel   | `#FFD84D` | `#FFC200` | `#D99A00` | 255,194,0    |
| paars  | `#C79BFA` | `#A266F2` | `#7E45CF` | 162,102,242  |

## Illustraties en animatie
- Elke mail heeft bovenaan een **geanimeerde GIF** uit `images/email_*.gif`. Die worden gemaakt met `make_gifs.py`, van de PNG-bron, op wit en op 2x resolutie.
- De animatie is subtiel en loopt door: flakkeren, ademen, glans-streep of hartslag. Het **eerste frame moet een goed stilstaand beeld zijn**, want Outlook op de computer toont alleen dat.
- Geen CSS-animaties: Gmail ondersteunt ze niet.
- Icoontjes in tekstvorm (✓, ✗) zetten we **niet** in gekleurde bolletjes, want die staan per mailapp scheef. Gebruik een PNG, zoals `email_check.png`.

## Detail-blokken
- `infoBox()` is een lichtgrijs-blauw blok (`#F3F8FC`, radius 14) voor tips, stappen en "volgende mijlpaal". Eventueel met een kopje in 800, 12px, `#8FA8BC` en letter-spacing 1.2px, in HOOFDLETTERS.
- Toon alleen echte data uit `Candidate`. Verzin geen cijfers.

## Tekst
- Begroet met de **voornaam** via `nm(c)`, bijvoorbeeld "Hoi Sanne". Is er geen bruikbare naam, dan wordt het netjes "Hoi," zonder naam. Gebruik nooit `display_name` direct.
- Informeel, kort en positief, in je/jij-vorm. Een emoji mag alleen aan het eind van de onderwerpregel.

## Live zetten
1. Nieuwe afbeeldingen eerst via `main` live op vumed.nl zetten (GitHub Pages).
2. Pas daarna de edge function deployen, met `verify_jwt` uit, want de functie controleert zelf wie hem aanroept.

## Auth-mails van Supabase (wachtwoord-reset e.d.)
Die worden niet door email-sender verstuurd, maar door Supabase Auth. Hun templates staan in `supabase/auth-templates/`, in dezelfde stijl, en moeten met de hand in het Dashboard geplakt worden (Authentication → Emails → Templates).
