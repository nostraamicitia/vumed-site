#!/usr/bin/env python3
"""Splitst answer_terms.js (de bron, hier bewerk je) in één bestand per vak:
answer_terms/<vak>.js. Elk vakbestand bevat alleen de begrippen die in de
toetsen/oefenpagina's/qbank van dat vak voorkomen. Daarna worden de
<script>-tags in de html-pagina's bijgewerkt, met een inhouds-hash als ?v=
zodat browsers automatisch de nieuwe versie ophalen.

Gebruik (vanuit de repo-root):  python3 tools/split_answer_terms.py
"""
import glob, hashlib, html, json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

src = open('answer_terms.js', encoding='utf-8').read()
TERMS = json.loads(src[src.index('{'):src.rindex('}') + 1])

SLUGS = sorted((re.search(r'"subj_slug": "([^"]+)"', open(f, encoding='utf-8').read(400)).group(1)
                for f in glob.glob('qbank_*.js')), key=len, reverse=True)
TAG_RE = re.compile(r'answer_terms(?:/[a-z0-9_]+)?\.js\?v=[0-9a-z]+')


def group_of(fn):
    """Vak-groep van een html-bestand, of None als het geen begrippen laadt."""
    b = fn[:-5]
    if b.startswith('pak_'):
        return b
    if b == 'missie':
        return None                      # laadt per ?vak= (zie missie.html)
    b = b[6:] if b.startswith('oefen_') else b
    b = b.replace('arts_en_patient_', 'arts_en_pati_nt_')
    if re.match(r'ha_\d{4}', b):
        return 'huid_en_afweer'
    for s in SLUGS:
        if b == s or b.startswith(s + '_'):
            return s
    return None


def norm(s):                              # = normTerm() in progressdots.js
    s = (s or '').replace(' ', ' ').lower()
    s = re.sub(r'\s+', ' ', s)
    return re.sub(r'[.…\s]+$', '', s).strip()


def text_of(h):
    return html.unescape(re.sub(r'<[^>]+>', ' ', h))


def options_of(raw):
    opts = set()
    for m in re.finditer(r'<span class=\\?"opt-letter\\?">[^<]*</span>\s*<span>(.*?)</span>', raw, re.S):
        opts.add(norm(text_of(m.group(1).replace('\\"', '"'))))
    return opts


groups = {}
pages = [f for f in glob.glob('*.html') if TAG_RE.search(open(f, encoding='utf-8').read())]
for f in pages:
    g = group_of(f)
    if g:
        groups.setdefault(g, []).append(f)
for s in SLUGS:
    groups.setdefault(s, [])

forms = {}
for k, e in TERMS.items():
    fs = [x for x in (e.get('match') or '').split('|') if x] + [k] + ([e['title']] if e.get('title') else [])
    forms[k] = {norm(x) for x in fs if norm(x)}

os.makedirs('answer_terms', exist_ok=True)
versions = {}
for g, files in sorted(groups.items()):
    raws = [open(f, encoding='utf-8').read() for f in files]
    qb = 'qbank_%s.js' % g
    if os.path.exists(qb):
        q = open(qb, encoding='utf-8').read()
        raws.append(q)
        # qbank-teksten zitten in JSON-strings: ook die losse strings als kandidaat-optie
        extra = {norm(text_of(json.loads('"%s"' % m))) for m in re.findall(r'"((?:[^"\\]|\\.){1,120})"', q)}
    else:
        extra = set()
    opts = set().union(*[options_of(r) for r in raws]) | extra if raws else set()
    text = norm(' '.join(text_of(r) for r in raws))
    keep = {}
    for k, e in TERMS.items():
        fk = forms[k]
        if fk & opts or (not e.get('option_only') and any(x in text for x in fk)):
            keep[k] = e
    body = ('// GEGENEREERD door tools/split_answer_terms.py uit answer_terms.js — niet met de hand bewerken.\n'
            'window.ANSWER_TERMS = ' + json.dumps(keep, ensure_ascii=False, separators=(',', ':')) + ';\n')
    open('answer_terms/%s.js' % g, 'w', encoding='utf-8').write(body)
    versions[g] = hashlib.sha1(body.encode()).hexdigest()[:8]
    print('%-40s %4d pagina\'s %5d begrippen %7.0f kB' % (g, len(files), len(keep), len(body.encode()) / 1024))

# script-tags bijwerken
changed = 0
for g, files in groups.items():
    for f in files:
        h = open(f, encoding='utf-8').read()
        n = TAG_RE.sub('answer_terms/%s.js?v=%s' % (g, versions[g]), h)
        if n != h:
            open(f, 'w', encoding='utf-8').write(n); changed += 1
# missie.html laadt het vak via ?vak=; daar staat een versietabel in
m = open('missie.html', encoding='utf-8').read()
slugv = {g: v for g, v in versions.items() if g in SLUGS}
m2 = re.sub(r'/\*AT_V\*/.*?/\*AT_V\*/', '/*AT_V*/' + json.dumps(slugv, sort_keys=True, separators=(',', ':')) + '/*AT_V*/', m)
if m2 != m:
    open('missie.html', 'w', encoding='utf-8').write(m2); changed += 1
print('html bijgewerkt:', changed)
