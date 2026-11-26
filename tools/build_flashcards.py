#!/usr/bin/env python3
"""Build flashcard decks for flashcards.html.

Source: tools/flashcards/<slug>/*.json  (one file per region, written by hand from
the Canvas itemlijst of that course).  Output: flashcards_<slug>.js in the repo root,
defining window.FLASHDECK.  Each card gets a stable id and `n` = number of
questions in qbank_<slug>.js that mention the structure, so the page can show
"N× gevraagd" and offer an "Meest gevraagd" order.

Usage: python3 tools/build_flashcards.py [slug ...]   (default: all decks)
"""
import glob
import html
import json
import os
import re
import sys
import unicodedata

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "tools", "flashcards")

DECK_META = {
    "bouw_en_bewegen": {"subject": "Bouw en Bewegen",
                        "source": "Itemlijst anatomie Bouw en Bewegen (Canvas)"},
}

PREFIX = [(r"\bnervus\b", "n."), (r"\bnervi\b", "nn."), (r"\bmusculus\b", "m."),
          (r"\bmusculi\b", "mm."), (r"\barteria\b", "a."), (r"\bvena\b", "v."),
          (r"\bligamentum\b", "lig."), (r"\bperoneus\b", "fibularis"),
          (r"\bperonea\b", "fibularis"), (r"\bperoneae\b", "fibulares")]


def norm(s):
    s = unicodedata.normalize("NFKD", s.lower())
    s = "".join(c for c in s if not unicodedata.combining(c))
    for a, b in PREFIX:
        s = re.sub(a, b, s)
    s = re.sub(r"[‘’'\"]", "", s)
    return re.sub(r"\s+", " ", s).strip()


def slugify(s):
    return re.sub(r"[^a-z0-9]+", "_", norm(s)).strip("_")[:60]


def keys_for(front):
    """Search keys for a card front, e.g. 'm. gluteus medius' or
    'tuberculum majus en minus' -> ['tuberculum majus', 'tuberculum minus']."""
    base = norm(re.sub(r"\([^)]*\)", " ", front))
    base = re.sub(r"\s[–-]\s.*$", "", base)  # drop ' – arm' style suffixes
    alias = [norm(x) for x in re.findall(r"\(([^)]*)\)", front)]
    parts = re.split(r",| en | vs\. ", base)
    keys = []
    first_words = parts[0].split()
    for i, p in enumerate(parts):
        p = p.strip(" :")
        if not p:
            continue
        # 'tuberculum majus en minus' -> second part inherits the head noun
        if i and len(p.split()) == 1 and len(first_words) >= 2:
            p = " ".join(first_words[:-1] + [p])
        keys.append(p)
    # Only name-like aliases ('schoudergewricht', 'kanaal van guyon'); single generic
    # words such as '(enkel)', '(diep)' or '(peroneus)' would match far too much.
    for a in alias:
        if re.search(r"\d", a) or len(a) > 40:
            continue
        if " " in a or a.endswith("gewricht"):
            keys.append(a)
    return [k for k in dict.fromkeys(keys) if len(k) >= 4]


def load_questions(slug):
    path = os.path.join(ROOT, f"qbank_{slug}.js")
    if not os.path.exists(path):
        return []
    s = open(path, encoding="utf-8").read()
    j = json.loads(s[s.index("{"):s.rstrip().rstrip(";").rindex("}") + 1])
    out = []
    for qhtml in j["q"].values():
        t = html.unescape(re.sub(r"<[^>]+>", " ", qhtml))
        out.append(" " + norm(t) + " ")
    return out


def count(keys, questions):
    pats = [re.compile(r"(?<![a-z])" + re.escape(k) + r"(?![a-z])") for k in keys]
    return sum(1 for q in questions if any(p.search(q) for p in pats))


def build(slug):
    files = sorted(glob.glob(os.path.join(SRC, slug, "*.json")))
    if not files:
        sys.exit(f"geen bronbestanden voor {slug}")
    questions = load_questions(slug)
    regions, seen, total = [], set(), 0
    for f in files:
        r = json.load(open(f, encoding="utf-8"))
        groups = []
        for g in r["groups"]:
            cards = []
            for front, back in g["cards"]:
                cid = slugify(r["region"][:12] + " " + front)
                if cid in seen:
                    sys.exit(f"dubbele kaart-id: {cid}")
                seen.add(cid)
                cards.append({"id": cid, "f": front, "b": back,
                              "n": count(keys_for(front), questions)})
            groups.append({"name": g["name"], "cards": cards})
            total += len(cards)
        regions.append({"name": r["region"], "groups": groups})
    deck = {"slug": slug, **DECK_META.get(slug, {"subject": slug}),
            "total": total, "regions": regions}
    out = os.path.join(ROOT, f"flashcards_{slug}.js")
    with open(out, "w", encoding="utf-8") as fh:
        fh.write("// Gegenereerd door tools/build_flashcards.py — niet met de hand bewerken.\n")
        fh.write("window.FLASHDECK = " + json.dumps(deck, ensure_ascii=False, separators=(",", ":")) + ";\n")
    asked = sum(1 for r in regions for g in r["groups"] for c in g["cards"] if c["n"])
    print(f"{slug}: {total} kaarten, {asked} komen voor in {len(questions)} tentamenvragen -> {os.path.basename(out)}")


if __name__ == "__main__":
    for s in (sys.argv[1:] or sorted(os.listdir(SRC))):
        if os.path.isdir(os.path.join(SRC, s)):
            build(s)
