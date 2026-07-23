/*
 * gift_modal.js — shared Brawl/Clash-style tap-to-open gift.
 * Used by trofeeenpad.html (class/milestone chests) and shop.html (daily gift).
 * vumed.html keeps its own React ChestModal (same rarity system) — this file
 * is NOT loaded there.
 *
 * TWO MODES:
 *  1. RANDOM (Clash Royale-style upgrade chest — Tijmen's spec 2026-07-16,
 *     replaces the 2026-07-13 "taps = rarity" roll):
 *     VumedGift.open({ random:true, title, footText?, onClaim(prize) })
 *     The STARTING rarity is rolled at open: Gewoon 70% (green) · Zeldzaam 20%
 *     (orange) · Episch 9% (purple) · Legendarisch 1% (platinum/silver — very
 *     rare). A legendary start opens in ONE tap; every other chest takes FOUR
 *     taps: tap 1 reveals the starting rarity, and each following tap has an
 *     UPGRADE_CHANCE (15%) of upgrading the chest ONE tier (capped at
 *     legendary) — a new gold star bursts in and the label re-pops in the new
 *     tier colour. A higher start = a better shot at reaching legendary
 *     (episch needs 1 upgrade in 3 chances, gewoon needs all 3). The prize is
 *     random gems (5–20) and/or coins (25–200) rolled from the FINAL tier:
 *     each tier has a pBoth chance of giving both, else a single currency (the
 *     other is 0). Common chests skew single, better chests skew both —
 *     legendary always gives both. Higher amounts in rarer tiers.
 *     HEARTS (2026-07-20, Tijmen: "in other chests a small chance of getting
 *     hearts"): every random chest additionally has a HEART_CHANCE (10%) of
 *     carrying bonus hearts, amount from the FINAL tier's hearts range. They
 *     ride the prize object ({hearts}) — callers credit them via
 *     VumedStats.awardHearts (may overflow past 20, heart_overflow rule).
 *     SEQUENCE VISUALS (Tijmen 2026-07-19): the whole overlay backdrop follows
 *     the chest's current tier (gewoon=wit, zeldzaam=blauw, episch=paars,
 *     legendarisch=goud) and returns to white on the reveal; the present gains
 *     gold features per tier and grows from episch up; stars dock at the
 *     BOTTOM; pre-tap hint = "Tik om te openen"; the reveal is a coin/gem
 *     fountain + big count-up amounts (no card, no gold beams).
 *     onClaim(prize) with prize = {gems, coins, rarity:{key,label,color,stars}}.
 *     (prize object is extensible — future skin drops ride along here.)
 *  2. FIXED (known reward, e.g. the shop's +3-hearts daily gift):
 *     VumedGift.open({ amount, icon:'gem'|'heart', title, footText?, onClaim(amount) })
 *     One tap, green, "Beloning" chip, no rarity stars.
 *
 * onClaim fires ONCE at the reveal; closing early = never fired, so the
 * caller's reward stays claimable. footText may be a string or fn(prize).
 *
 * opts.forceRarity (random mode only) = a rarity key ('gewoon'|'zeldzaam'|
 * 'episch'|'legendarisch') that skips the start-roll and guarantees that tier
 * as the STARTING rarity — the upgrade taps still run, so a forced non-
 * legendary chest can still climb (the tier is a floor, never less). Prestatie
 * (achievement) rewards pass 'legendarisch' — always a legendary chest (1 tap).
 *
 * opts.multiplier (random mode only) scales the rolled gems/coins while keeping
 * the tier — a bigger chest of the same rarity. Dagdoel-reeks chests pass it
 * (see vumed_stats.js GOAL_TIERS × GOAL_MILESTONES).
 */
(function () {
  'use strict';
  if (window.VumedGift) return;

  /* Rarity ladder (keep in sync with vumed.html CHEST_RARITIES).
     p = STARTING-rarity weight (the roll at open — legendary start is very
     rare; most legendaries are reached via upgrade taps instead).
     stars = tier level shown as gold stars (1–4, = index+1).
     pBoth = chance the reward contains BOTH gems and coins; otherwise it's a
     single-currency roll (50/50 gems-or-coins). Common chests skew single,
     better chests skew both — legendary always gives both. */
  var RARITIES = [
    { key: 'gewoon',       label: 'Gewoon',       color: '#58CC02', labelColor: '#58CC02', text: '#fff',    chipBg: '#58CC02', stars: 1, p: 0.70, pBoth: 0.15, gems: [5, 8],   coins: [25, 60],   hearts: [1, 1] },
    { key: 'zeldzaam',     label: 'Zeldzaam',     color: '#FF9600', labelColor: '#FF9600', text: '#fff',    chipBg: '#FF9600', stars: 2, p: 0.20, pBoth: 0.40, gems: [9, 12],  coins: [61, 105],  hearts: [1, 2] },
    { key: 'episch',       label: 'Episch',       color: '#AA72FF', labelColor: '#AA72FF', text: '#fff',    chipBg: '#AA72FF', stars: 3, p: 0.09, pBoth: 0.70, gems: [13, 16], coins: [106, 150], hearts: [2, 3] },
    { key: 'legendarisch', label: 'Legendarisch', color: '#9FB6CC', labelColor: '#FFB300', text: '#33414F', chipBg: 'linear-gradient(135deg,#F2F6FA 0%,#C3D0DE 45%,#8FA6BC 100%)', stars: 4, p: 0.01, pBoth: 1.00, gems: [17, 20], coins: [151, 200], hearts: [3, 4] },
  ];
  /* Small chance a chest ALSO carries hearts (bonus on top of the gems/coins
     roll, amount from the tier's hearts range). Keep in sync with vumed.html
     CHEST_HEART_CHANCE. */
  var HEART_CHANCE = 0.10;
  /* Per-tap chance (taps 2–4) that the chest upgrades one tier. Tuned so the
     overall final-rarity distribution stays close to the old direct roll
     (~6% of chests end legendary). Keep in sync with vumed.html. */
  var UPGRADE_CHANCE = 0.15;
  var TOTAL_TAPS = 4;
  /* Tap beats in PLAY order (Tijmen 2026-07-16) — deliberately NOT filename
     order: sound_chest4 (his "4.aif") is the third beat and chest3 closes.
     Filenames stay matched to his source files, so the order lives here.
     One entry per tap of a full chest; a 1-tap legendary just plays beat 1.
     ?v: chest4 was re-cut (499ms of leading silence trimmed = "slight delay").
     The SW serves assets stale-while-revalidate, so audio that changes under a
     stable filename MUST carry a bumped ?v or clients keep the old sound.
     Keep in sync with vumed.html CHEST_TAP_SOUNDS. */
  var TAP_SOUNDS = ['sound_chest1.mp3', 'sound_chest2.mp3', 'sound_chest4.mp3?v=2', 'sound_chest3.mp3'];
  function randIn(range) { return range[0] + Math.floor(Math.random() * (range[1] - range[0] + 1)); }
  /* Roll amounts for a tier, deciding both-vs-single by tier.pBoth. A zeroed
     currency means "not in this chest" and its reveal row is hidden. Hearts
     are an independent bonus roll (HEART_CHANCE) on top. */
  function amountsFor(tier) {
    var gems = randIn(tier.gems), coins = randIn(tier.coins);
    if (Math.random() >= (tier.pBoth == null ? 1 : tier.pBoth)) {
      if (Math.random() < 0.5) coins = 0; else gems = 0;
    }
    var hearts = (tier.hearts && Math.random() < HEART_CHANCE) ? randIn(tier.hearts) : 0;
    return { gems: gems, coins: coins, hearts: hearts };
  }
  function rollStartTier() {
    var r = Math.random(), acc = 0;
    for (var i = 0; i < RARITIES.length; i++) { acc += RARITIES[i].p; if (r < acc) return i; }
    return 0;
  }
  /* CR-style tap plan: the tier index the chest shows after each tap.
     A legendary start opens in ONE tap (nothing left to upgrade); every other
     chest takes TOTAL_TAPS taps — tap 1 reveals the start tier, each later tap
     rolls UPGRADE_CHANCE to climb one tier (capped at legendary). The whole
     sequence is pre-rolled at open so the prize can be fixed up front. */
  function rollTapPlan(startIdx) {
    if (startIdx >= RARITIES.length - 1) return [startIdx];
    var plan = [startIdx], cur = startIdx;
    for (var t = 1; t < TOTAL_TAPS; t++) {
      if (cur < RARITIES.length - 1 && Math.random() < UPGRADE_CHANCE) cur++;
      plan.push(cur);
    }
    return plan;
  }
  /* opts.multiplier scales the rolled amounts without touching the rarity — a
     bigger chest of the same tier. Dagdoel-reeks chests use it (milestone 7/30/100
     = ×1/×3/×10, dagdoel 50 adds ×1.5). A zeroed currency stays zero, so a
     single-currency roll doesn't sprout the other one. Hearts are deliberately
     NOT scaled (a ×10 milestone handing out 30+ hearts would trivialize them). */
  function scaleAmounts(p, m) {
    if (!m || m === 1) return p;
    p.gems  = p.gems  ? Math.round(p.gems  * m) : 0;
    p.coins = p.coins ? Math.round(p.coins * m) : 0;
    return p;
  }

  function h2rgba(hex, a) {
    var n = parseInt(hex.slice(1), 16);
    return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')';
  }

  var CSS = [
    /* Backdrop follows the chest's CURRENT tier (Tijmen 2026-07-19): gewoon =
       wit, zeldzaam = blauw, episch = paars, legendarisch = goud — and back to
       white on the reveal. Crossfade via the background transition. Dark-mode
       tier rules NEED the html.dark prefix: `html.dark .vg-overlay` (0,2,1)
       outranks `.vg-overlay.vg-bgN` (0,2,0) — gotcha 5. */
    '.vg-overlay{position:fixed;inset:0;z-index:600;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(255,255,255,0.97);animation:vgOverlayIn 0.18s ease both;font-family:inherit;transition:background 0.55s ease;}',
    'html.dark .vg-overlay{background:rgba(16,16,18,0.97);}',
    '.vg-overlay.vg-bg1{background:rgba(23,151,216,0.97);}',
    '.vg-overlay.vg-bg2{background:rgba(147,88,238,0.97);}',
    '.vg-overlay.vg-bg3{background:rgba(255,179,0,0.97);}',
    'html.dark .vg-overlay.vg-bg1{background:rgba(15,105,155,0.97);}',
    'html.dark .vg-overlay.vg-bg2{background:rgba(104,55,182,0.97);}',
    'html.dark .vg-overlay.vg-bg3{background:rgba(202,141,0,0.97);}',
    '.vg-overlay.vg-tinted .vg-title{color:#fff;}',
    '.vg-overlay.vg-tinted .vg-close{background:rgba(255,255,255,0.22);color:#fff;}',
    '.vg-close{position:absolute;top:22px;right:22px;width:44px;height:44px;border-radius:13px;background:#f2f2f7;border:none;cursor:pointer;font-size:18px;color:#888;display:flex;align-items:center;justify-content:center;font-family:inherit;z-index:4;transition:background 0.55s ease,color 0.55s ease;}',
    'html.dark .vg-close{background:#2C2C2E;color:#aaa;}',
    '.vg-title{font-weight:900;font-size:26px;margin-bottom:6px;color:#1C1C1E;animation:vgCardIn 0.35s cubic-bezier(0.25,0.46,0.45,0.94) both;transition:color 0.55s ease;}',
    'html.dark .vg-title{color:#F2F2F7;}',
    '.vg-sub{height:46px;display:flex;align-items:center;font-size:15px;font-weight:800;color:#8E8E93;animation:vgSubPulse 1.6s ease-in-out infinite;}',
    '.vg-stagewrap{height:52px;display:flex;align-items:center;justify-content:center;}',
    '.vg-stage-label{height:46px;display:flex;align-items:center;font-size:40px;font-weight:900;letter-spacing:0.04em;text-transform:uppercase;animation:vgStagePop 0.4s cubic-bezier(0.34,1.56,0.64,1) both;}',
    /* stars dock — sits at the BOTTOM, under the chest (Tijmen 2026-07-19);
       naked gold stars (no pill — "delete the grey div"), a white glow keeps
       them readable on the tinted/gold backdrops */
    '.vg-starsdock{height:66px;margin-top:4px;display:flex;align-items:center;justify-content:center;}',
    '.vg-stars{display:none;gap:12px;align-items:center;}',
    '.vg-stars.vg-has{display:flex;}',
    '.vg-star{position:relative;display:inline-flex;width:44px;height:44px;color:#FFC800;}',
    '.vg-star svg{display:block;width:100%;height:100%;filter:drop-shadow(0 0 7px rgba(255,200,0,0.8));}',
    '.vg-overlay.vg-tinted .vg-star svg{filter:drop-shadow(0 0 8px rgba(255,255,255,0.85)) drop-shadow(0 2px 4px rgba(0,0,0,0.18));}',
    '.vg-star-pop{animation:vgStarIn 0.55s cubic-bezier(0.34,1.56,0.64,1) both;}',
    '.vg-star-pop::after{content:"";position:absolute;inset:-13px;border-radius:50%;background:radial-gradient(circle,rgba(255,230,130,0.95) 0%,rgba(255,200,0,0.45) 40%,transparent 70%);animation:vgStarFlash 0.55s ease-out both;pointer-events:none;}',
    '@keyframes vgStarIn{0%{transform:scale(0) rotate(-170deg);opacity:0}45%{transform:scale(1.8) rotate(12deg);opacity:1}68%{transform:scale(0.82) rotate(-5deg)}100%{transform:scale(1) rotate(0deg);opacity:1}}',
    '@keyframes vgStarFlash{0%{transform:scale(0.3);opacity:1}100%{transform:scale(2);opacity:0}}',
    '.vg-stage{position:relative;width:340px;height:320px;display:flex;align-items:center;justify-content:center;}',
    '.vg-gift{position:relative;z-index:1;cursor:pointer;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;animation:vgBounceIn 0.55s cubic-bezier(0.34,1.4,0.64,1) both;}',
    '.vg-gift.vg-revealed{cursor:default;}',
    /* tier growth + reveal exit live on their OWN wrapper: vgBounceIn on
       .vg-gift fills forwards, so a transform set there would be overridden */
    '.vg-scale{transition:transform 0.45s cubic-bezier(0.34,1.3,0.64,1),opacity 0.4s ease;}',
    /* the open chest lingers a beat (delays) so the fountain reads as
       erupting OUT of it before it sinks away */
    '.vg-gift.vg-revealed .vg-scale{opacity:0;transform:scale(0.5) translateY(52px) !important;transition:transform 0.6s 0.15s ease,opacity 0.45s 0.3s ease;}',
    /* gold upgrade layers baked into the gift SVG — a tier class on .vg-gift
       fades them in (zeldzaam: gouden lint, episch: +trim/studs, legendarisch:
       +gouden strik/voetband) */
    '.vg-g2,.vg-g3,.vg-g4{opacity:0;transition:opacity 0.45s;}',
    '.vg-tier2 .vg-g2{opacity:1;}',
    '.vg-tier3 .vg-g3{opacity:1;}',
    '.vg-tier4 .vg-g4{opacity:1;}',
    '.vg-idle{animation:vgIdle 2.4s ease-in-out infinite;}',
    '.vg-hitwrap{transition:filter 0.2s;}',
    '.vg-hit{animation:vgHit 0.38s cubic-bezier(0.34,1.56,0.64,1) both;}',
    '.vg-lid{transform-box:fill-box;transform-origin:50% 90%;transition:transform 0.16s ease;}',
    '.vg-lid-fly{animation:vgLidFly 0.6s cubic-bezier(0.3,0.6,0.4,1) forwards;}',
    '.vg-spark{position:absolute;top:50%;left:50%;pointer-events:none;opacity:0;animation:vgSparkFly 0.7s cubic-bezier(0.2,0.7,0.3,1) forwards;}',
    '.vg-ring{position:absolute;top:50%;left:50%;width:200px;height:200px;border-radius:50%;border:4px solid rgba(255,200,0,0.65);pointer-events:none;opacity:0;animation:vgShockRing 0.5s ease-out forwards;}',
    '.vg-flash{position:absolute;inset:-60px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,0.98) 0%,rgba(255,244,200,0.85) 40%,transparent 70%);pointer-events:none;z-index:2;animation:vgFlash 0.55s ease-out both;}',
    '.vg-confetti{position:absolute;top:50%;left:50%;pointer-events:none;animation:vgConfettiFly 1.5s cubic-bezier(0.08,0.82,0.17,1) forwards;animation-delay:var(--gd,0s);opacity:0;}',
    '.vg-revealwrap{position:absolute;inset:0;z-index:3;display:flex;align-items:center;justify-content:center;pointer-events:none;}',
    /* payout: geen kaart meer — grote count-up bedragen op de witte backdrop,
       met een munt/gem-fontein eromheen */
    '.vg-payout{display:flex;flex-direction:column;align-items:center;gap:10px;}',
    '.vg-pay-row{display:flex;align-items:center;gap:12px;font-weight:900;line-height:1;color:#1C1C1E;animation:vgPayIn 0.6s cubic-bezier(0.34,1.56,0.64,1) both;}',
    'html.dark .vg-pay-row{color:#fff;}',
    '.vg-pay-gems{font-size:58px;}',
    '.vg-pay-coins{font-size:38px;color:#8E6A00;}',
    'html.dark .vg-pay-coins{color:#FFD34D;}',
    /* hearts bonus row — after the coins rules so the red wins at equal specificity */
    '.vg-pay-heart{color:#E03131;}',
    'html.dark .vg-pay-heart{color:#FF6B6B;}',
    '.vg-pay-ico{display:inline-flex;animation:vgPayIco 0.55s cubic-bezier(0.34,1.7,0.64,1) both;}',
    '.vg-pay-pop{display:inline-block;animation:vgNumPop 0.3s cubic-bezier(0.34,1.56,0.64,1);}',
    /* fountain drops: outer = linear X drift, inner = up-then-fall Y arc
       (two transforms can't share one element) */
    '.vg-drop{position:absolute;top:50%;left:50%;z-index:2;pointer-events:none;animation:vgDropX var(--dt,1.1s) linear both;animation-delay:var(--dd,0s);}',
    '.vg-drop-in{animation:vgDropY var(--dt,1.1s) both;animation-delay:var(--dd,0s);}',
    '@keyframes vgDropX{from{transform:translate(-50%,-50%) translateX(0)}to{transform:translate(-50%,-50%) translateX(var(--dx,0px))}}',
    '@keyframes vgDropY{0%{transform:translateY(0) scale(0.4) rotate(0deg);opacity:0;animation-timing-function:cubic-bezier(0.16,0.72,0.36,1)}10%{opacity:1}52%{transform:translateY(var(--dy,-160px)) scale(1) rotate(var(--dr,0deg));animation-timing-function:cubic-bezier(0.55,0.06,0.78,0.32)}88%{opacity:1}100%{transform:translateY(170px) scale(0.92) rotate(var(--dr,0deg));opacity:0}}',
    '.vg-foot{text-align:center;margin-top:20px;animation:vgCardIn 0.45s 0.1s cubic-bezier(0.34,1.56,0.64,1) both;}',
    '.vg-foottext{font-size:15px;font-weight:700;color:#afafaf;margin-bottom:20px;}',
    '.vg-btn{background:#1CB0F6;color:#fff;border:none;border-bottom:4px solid #0e85b5;border-radius:16px;padding:16px 52px;font-size:17px;font-weight:900;letter-spacing:0.05em;text-transform:uppercase;cursor:pointer;font-family:inherit;transition:background 0.15s,transform 0.1s;}',
    '.vg-btn:hover{background:#22c3ff;}',
    '.vg-btn:active{transform:translateY(3px);}',
    '@keyframes vgOverlayIn{from{opacity:0}to{opacity:1}}',
    '@keyframes vgCardIn{from{opacity:0;transform:scale(0.82) translateY(28px)}to{opacity:1;transform:scale(1) translateY(0)}}',
    '@keyframes vgSubPulse{0%,100%{opacity:1}50%{opacity:0.55}}',
    '@keyframes vgStagePop{0%{transform:scale(0.4);opacity:0}60%{transform:scale(1.25);opacity:1}100%{transform:scale(1);opacity:1}}',
    '@keyframes vgIdle{0%,100%{transform:translateY(0) rotate(-1deg)}50%{transform:translateY(-7px) rotate(1deg)}}',
    '@keyframes vgHit{0%{transform:scale(1,1) rotate(0deg)}30%{transform:scale(1.15,0.82) rotate(-5deg)}60%{transform:scale(0.93,1.1) rotate(4deg)}100%{transform:scale(1,1) rotate(0deg)}}',
    '@keyframes vgShockRing{0%{transform:translate(-50%,-50%) scale(0.35);opacity:0.85}100%{transform:translate(-50%,-50%) scale(1.9);opacity:0}}',
    '@keyframes vgSparkFly{0%{transform:translate(-50%,-50%) scale(0.3) rotate(0deg);opacity:0}15%{opacity:1}100%{transform:translate(calc(-50% + var(--gx)),calc(-50% + var(--gy))) scale(0.9) rotate(var(--gr));opacity:0}}',
    '@keyframes vgFlash{0%{opacity:0}25%{opacity:1}100%{opacity:0}}',
    /* chest lid POPS OPEN and holds (was: gift lid flying off-screen) */
    '@keyframes vgLidFly{0%{transform:translate(0,0) rotate(0deg)}45%{transform:translate(-3px,-36px) rotate(-10deg)}70%{transform:translate(-2px,-25px) rotate(-6deg)}100%{transform:translate(-2px,-29px) rotate(-7deg)}}',
    '@keyframes vgBounceIn{0%{transform:scale(0.3);opacity:0}55%{transform:scale(1.1);opacity:1}80%{transform:scale(0.96)}100%{transform:scale(1)}}',
    '@keyframes vgConfettiFly{0%{transform:translate(-50%,-50%) scale(0) rotate(0deg);opacity:0}12%{opacity:1}100%{transform:translate(calc(-50% + var(--gx)),calc(-50% + var(--gy))) scale(0.45) rotate(var(--gr));opacity:0}}',
    '@keyframes vgPayIn{0%{opacity:0;transform:scale(0.4) translateY(26px)}60%{opacity:1;transform:scale(1.12) translateY(-4px)}100%{opacity:1;transform:scale(1) translateY(0)}}',
    '@keyframes vgPayIco{0%{transform:scale(0) rotate(-40deg)}100%{transform:scale(1) rotate(0deg)}}',
    '@keyframes vgNumPop{0%{transform:scale(1)}45%{transform:scale(1.22)}100%{transform:scale(1)}}',
  ].join('\n');

  function ensureStyle() {
    if (document.getElementById('vg-style')) return;
    var s = document.createElement('style');
    s.id = 'vg-style';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  var STAR_SVG = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.8l3.06 6.2 6.84 1-4.95 4.82 1.17 6.81L12 17.42l-6.12 3.21 1.17-6.81L2.1 9l6.84-1z"/></svg>';

  var ICONS = {
    gem: function (size) {
      return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 32 32" fill="none">'
        + '<polygon points="9,3 23,3 28,12 16,29 4,12" fill="#1CB0F6"/>'
        + '<polygon points="9,3 23,3 20,10 12,10" fill="rgba(255,255,255,0.40)"/></svg>';
    },
    coin: function (size) {
      return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.5" fill="#FFC800"/><circle cx="12" cy="12" r="6.6" fill="none" stroke="#E0A800" stroke-width="1.6"/><path d="M6 12 H8.6 L9.7 8.9 L11.4 15 L12.7 10.6 L13.6 12 H18" stroke="#E0A800" stroke-width="1.7" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    },
    heart: function (size) {
      return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24">'
        + '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#FF4B4B"/></svg>';
    },
  };

  /* De EHBO-KOFFER v2 (Tijmen 2026-07-20: "redesign en simplificeer" — v1
     had koepel+plaquette+scharnierband+klinknagels+hoekbeslag; te druk).
     Nu de iconische kern: één rode koffer, groot wit kruis, lichter
     deksel, handvat, twee sluitklemmen. v2.1 (follow-up zelfde dag):
     handvat = brede platte koffergreep i.p.v. hoge lus, klep = één pad.
     Zelfde structurele hooks:
     .vg-lid group (rammelt per tap, popt open op de laatste tap via
     vgLidFly), .vg-seam (licht in de kier, groeit per tap), goudlagen
     .vg-g2/-g3/-g4 op opacity 0 die per tier-class op .vg-gift infaden.
     Tier-signatuur: zeldzaam = sluitklemmen goud, episch = + dekselrand,
     legendarisch = + handvat. VUmed flat-3D idioom (vlakke vlakken, harde
     donkere onderrand, geen gradients). De SVG wordt nooit her-gerenderd,
     dus lid-transform overleeft upgrades.
     Keep the ARTWORK in sync with vumed.html GiftSvg (de kleine
     EHBO-koffertjes in quest rows / trofeeenpad zijn aparte mini-icons). */
  function giftSvg() {
    return '<svg width="250" height="250" viewBox="0 0 220 220" style="overflow:visible;display:block">'
      // grondschaduw
      + '<ellipse cx="110" cy="199" rx="70" ry="9" fill="rgba(60,30,30,0.14)"/>'
      // romp: rood met een harde donkere onderrand (VUmed 3D-knop-recept)
      + '<rect x="42" y="106" width="136" height="86" rx="11" fill="#C62828"/>'
      + '<rect x="42" y="106" width="136" height="78" rx="11" fill="#FF4B4B"/>'
      + '<rect x="46" y="106" width="128" height="10" fill="rgba(0,0,0,0.10)"/>'
      // groot wit kruis
      + '<rect x="99" y="124" width="22" height="52" rx="7" fill="#FFFFFF"/>'
      + '<rect x="84" y="139" width="52" height="22" rx="7" fill="#FFFFFF"/>'
      // licht in de kier — groeit per tap, vol bij openen
      + '<rect class="vg-seam" x="40" y="100" width="140" height="10" rx="5" fill="#FFF3B8" opacity="0" style="filter:blur(3px)"/>'
      // deksel: handvat + lichter rode klep + dekselrand + sluitklemmen
      + '<g class="vg-lid">'
      // handvat: brede platte koffergreep, zakt achter de klep; legendarisch: goud
      + '<rect x="78" y="46" width="64" height="26" rx="13" fill="none" stroke="#5B6B7C" stroke-width="9"/>'
      + '<rect class="vg-g4" x="78" y="46" width="64" height="26" rx="13" fill="none" stroke="#FFC800" stroke-width="9"/>'
      // klep: één pad — ronde bovenhoeken (r16), rechte onderkant
      + '<path d="M44 106 V80 Q44 64 60 64 H160 Q176 64 176 80 V106 Z" fill="#FF6B6B"/>'
      // dekselrand; episch: goud
      + '<rect x="44" y="98" width="132" height="8" fill="#E03131"/>'
      + '<rect class="vg-g3" x="44" y="98" width="132" height="8" fill="#FFC800"/>'
      // sluitklemmen (vallen over de kier); zeldzaam: goud
      + '<rect x="64" y="86" width="16" height="28" rx="5" fill="#64748B"/>'
      + '<rect x="64" y="108" width="16" height="6" rx="3" fill="#475569"/>'
      + '<rect x="140" y="86" width="16" height="28" rx="5" fill="#64748B"/>'
      + '<rect x="140" y="108" width="16" height="6" rx="3" fill="#475569"/>'
      + '<rect class="vg-g2" x="64" y="86" width="16" height="28" rx="5" fill="#FFC800"/>'
      + '<rect class="vg-g2" x="64" y="108" width="16" height="6" rx="3" fill="#D19E00"/>'
      + '<rect class="vg-g2" x="140" y="86" width="16" height="28" rx="5" fill="#FFC800"/>'
      + '<rect class="vg-g2" x="140" y="108" width="16" height="6" rx="3" fill="#D19E00"/>'
      + '</g></svg>';
  }

  var CONFETTI_COLORS = ['#58C8FF', '#AA72FF', '#FF6B8A', '#58CC02', '#FFC800', '#FF9600', '#00D1FF', '#FF5B5B', '#34C759', '#FFCC00', '#5AC8FA', '#1CB0F6'];

  /* Gold reveal beams DELETED (Tijmen 2026-07-19: "delete the shining
     thingies") — the reveal now stands on a white backdrop with a coin/gem
     fountain instead (see spawnDrops in open()). */
  var TIER_SCALE = [1, 1, 1.07, 1.13]; // present grows from episch up

  /* ── Glitter bed (2026-07-16, Tijmen: "de loop heeft nog een stille pauze
     tussen de loops") ──────────────────────────────────────────────────────
     An <audio loop> is NOT gapless: every cycle replays LAME's ~23ms encoder
     padding, which reads as a tick/pause in a continuous shimmer. So the bed
     runs through Web Audio instead — decode the file once, then loop the raw
     PCM sample-accurately (AudioBufferSourceNode.loop). The asset itself was
     also trimmed: it carried 317ms of real trailing silence that looped right
     along with it. Fades ride a GainNode.

     Shared on purpose: vumed.html's React ChestModal calls this too (it loads
     gift_modal.js), so the two chest homes can't drift apart on sound.
     Falls back to <audio loop> if Web Audio is unavailable. */
  var GlitterBed = (function () {
    var SRC = 'sound_glitter.mp3?v=2';   // ?v: re-cut (317ms trailing silence trimmed) — see TAP_SOUNDS note
    var ctx = null, buffer = null, loading = null;

    function context() {
      if (ctx) return ctx;
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      try { ctx = new AC(); } catch (e) { ctx = null; }
      return ctx;
    }
    function load(c) {
      if (buffer) return Promise.resolve(buffer);
      if (loading) return loading;
      loading = fetch(SRC)
        .then(function (r) { return r.arrayBuffer(); })
        .then(function (ab) {
          return new Promise(function (res, rej) {
            // callback form: Safari still lacks the promise overload
            var p = c.decodeAudioData(ab, res, rej);
            if (p && p.then) p.then(res, rej);
          });
        })
        .then(function (b) { buffer = b; return b; });
      return loading;
    }

    /* Returns a handle immediately (decode is async): { stop(ms), retry() }. */
    function start(vol, fadeMs) {
      var c = context();
      var live = true, src = null, gain = null, el = null;

      function fallback() {
        try {
          el = new Audio(SRC);
          el.loop = true; el.volume = 0;
          el.play().then(function () {
            var steps = Math.max(1, Math.round(fadeMs / 50)), i = 0;
            var iv = setInterval(function () {
              i++;
              if (!live || !el) { clearInterval(iv); return; }
              try { el.volume = Math.min(1, vol * (i / steps)); } catch (e) {}
              if (i >= steps) clearInterval(iv);
            }, 50);
          }).catch(function () {});
        } catch (e) {}
      }

      if (!c) { fallback(); }
      else {
        load(c).then(function (b) {
          if (!live) return;
          if (c.state === 'suspended') c.resume().catch(function () {});
          src = c.createBufferSource();
          src.buffer = b;
          src.loop = true;                 // sample-accurate: no padding, no gap
          gain = c.createGain();
          gain.gain.setValueAtTime(0.0001, c.currentTime);
          gain.gain.exponentialRampToValueAtTime(vol, c.currentTime + fadeMs / 1000);
          src.connect(gain).connect(c.destination);
          src.start(0);
        }).catch(function () { if (live) fallback(); });
      }

      return {
        stop: function (ms) {
          live = false;
          ms = ms || 450;
          if (gain && ctx) {
            var t = ctx.currentTime;
            try {
              gain.gain.cancelScheduledValues(t);
              gain.gain.setValueAtTime(Math.max(gain.gain.value, 0.0001), t);
              gain.gain.exponentialRampToValueAtTime(0.0001, t + ms / 1000);
            } catch (e) {}
            var s = src;
            setTimeout(function () { try { s.stop(); } catch (e) {} }, ms + 80);
            src = null; gain = null;
          }
          if (el) {
            var e2 = el; el = null;
            var v0 = e2.volume, steps = Math.max(1, Math.round(ms / 50)), i = 0;
            var iv = setInterval(function () {
              i++;
              try { e2.volume = Math.max(0, v0 * (1 - i / steps)); } catch (e) {}
              if (i >= steps) { clearInterval(iv); try { e2.pause(); } catch (e) {} }
            }, 50);
          }
        },
        // first tap = a real gesture; recover a bed that autoplay blocked
        retry: function () {
          if (!live) return;
          if (ctx && ctx.state === 'suspended') ctx.resume().catch(function () {});
          if (el && el.paused) el.play().catch(function () {});
        }
      };
    }
    return { start: start };
  })();
  window.VumedGlitterBed = GlitterBed;   // vumed.html ChestModal reuses this

  function open(opts) {
    opts = opts || {};
    var isRandom = !!opts.random;
    var prize, needed, plan, icon;
    if (isRandom) {
      // forceRarity: skip the start-roll and guarantee that tier as the
      // STARTING rarity (a floor — the upgrade taps still run, so a forced
      // non-legendary chest can climb). Prestatie rewards pass 'legendarisch'
      // (see progressdots.js achievements) → a 1-tap legendary chest.
      var _startIdx = -1;
      if (opts.forceRarity) {
        for (var _fi = 0; _fi < RARITIES.length; _fi++) {
          if (RARITIES[_fi].key === opts.forceRarity) { _startIdx = _fi; break; }
        }
      }
      plan = rollTapPlan(_startIdx >= 0 ? _startIdx : rollStartTier());
      var _finalTier = RARITIES[plan[plan.length - 1]];
      var _fa = amountsFor(_finalTier);
      prize  = { rarity: _finalTier, gems: _fa.gems, coins: _fa.coins, hearts: _fa.hearts };
      scaleAmounts(prize, opts.multiplier);
      needed = plan.length;
    } else {
      prize  = { amount: opts.amount || 0 };
      needed = 1;
      icon   = ICONS[opts.icon] ? opts.icon : 'gem';
    }
    var taps    = 0;
    var phase   = 'tap'; // tap | burst | revealed
    var claimed = false;
    var timers  = [];

    /* ── Sounds (2026-07-16): the glitter bed loops (faded in) while the chest
       is still closed, and each tap plays the next beat of TAP_SOUNDS — the
       tadaa then plays over the reveal ~620ms later. Autoplay can be blocked
       when the modal opens without a user gesture, so the first tap retries
       the bed. */
    var glitter = GlitterBed.start(0.45, 700);
    function stopGlitter(ms) { glitter.stop(ms || 450); }
    function sndTap(n) {
      var f = TAP_SOUNDS[Math.min(n, TAP_SOUNDS.length) - 1];
      try { var a = new Audio(f); a.volume = 0.8; a.play().catch(function () {}); } catch (e) {}
    }
    function sndTadaa() {
      try { var a = new Audio('sound_chest_tadaa.mp3'); a.volume = 0.85; a.play().catch(function () {}); } catch (e) {}
    }

    ensureStyle();

    var ov = document.createElement('div');
    ov.className = 'vg-overlay';
    ov.innerHTML =
      '<button class="vg-close" type="button">&#10005;</button>'
      + '<div class="vg-title"></div>'
      + '<div class="vg-stagewrap"><div class="vg-sub">Tik om te openen</div></div>'
      + '<div class="vg-stage">'
      +   '<div class="vg-gift"><div class="vg-scale"><div class="vg-idle"><div class="vg-hitwrap">' + giftSvg() + '</div></div></div></div>'
      + '</div>'
      + (isRandom ? '<div class="vg-starsdock"><div class="vg-stars"></div></div>' : '')
      + '<div class="vg-foot" style="display:none">'
      +   '<div class="vg-foottext" style="display:none"></div>'
      +   '<button class="vg-btn" type="button">Geweldig!</button>'
      + '</div>';
    var titleEl = ov.querySelector('.vg-title');
    if (opts.title) titleEl.textContent = opts.title;
    else titleEl.style.display = 'none';
    document.body.appendChild(ov);

    var stage  = ov.querySelector('.vg-stage');
    var gift   = ov.querySelector('.vg-gift');
    var scaleW = ov.querySelector('.vg-scale');
    var idleW  = ov.querySelector('.vg-idle');
    var hitW   = ov.querySelector('.vg-hitwrap');
    var lid    = ov.querySelector('.vg-lid');
    var seam   = ov.querySelector('.vg-seam');
    var sub    = ov.querySelector('.vg-sub');
    var foot   = ov.querySelector('.vg-foot');
    var starsRow = ov.querySelector('.vg-stars');

    hitW.style.filter = 'drop-shadow(0 0 10px rgba(255,200,0,0.28))';

    /* Backdrop = the chest's CURRENT tier: idx 0 (gewoon) stays white; 1/2/3
       tint the whole overlay blauw/paars/goud. -1 = back to white (reveal). */
    function setBg(idx) {
      ov.classList.remove('vg-bg1', 'vg-bg2', 'vg-bg3', 'vg-tinted');
      if (idx >= 1) ov.classList.add('vg-bg' + idx, 'vg-tinted');
    }

    function close() {
      timers.forEach(clearTimeout);
      stopGlitter(200);
      if (ov.parentNode) ov.parentNode.removeChild(ov);
      if (opts.onClose) try { opts.onClose(); } catch (e) {}
    }
    ov.querySelector('.vg-close').addEventListener('click', close);
    ov.querySelector('.vg-btn').addEventListener('click', close);

    function spawnSparks(count, spread, color) {
      for (var i = 0; i < count; i++) {
        var rad  = ((i / count) * 360 + Math.random() * 40) * Math.PI / 180;
        var dist = spread + Math.random() * spread * 0.8;
        var size = 7 + Math.floor(Math.random() * 8);
        var d = document.createElement('div');
        d.className = 'vg-spark';
        d.style.setProperty('--gx', (Math.cos(rad) * dist).toFixed(0) + 'px');
        d.style.setProperty('--gy', (Math.sin(rad) * dist).toFixed(0) + 'px');
        d.style.setProperty('--gr', ((Math.random() - 0.5) * 500).toFixed(0) + 'deg');
        d.innerHTML = '<svg width="' + size + '" height="' + size + '" viewBox="0 0 20 22">'
          + '<polygon points="10,1 20,8 16,21 4,21 0,8" fill="' + (color || '#FFC800') + '"/>'
          + '<polygon points="10,1 20,8 10,6 0,8" fill="rgba(255,255,255,0.45)"/></svg>';
        stage.appendChild(d);
      }
      var ring = document.createElement('div');
      ring.className = 'vg-ring';
      if (color) ring.style.borderColor = h2rgba(color, 0.65);
      stage.appendChild(ring);
    }

    /* gold light wash over the chest on an upgrade tap (tinted vg-flash) */
    function spawnWash() {
      var w = document.createElement('div');
      w.className = 'vg-flash';
      w.style.background = 'radial-gradient(circle,rgba(255,200,0,0.5) 0%,rgba(255,200,0,0.22) 45%,transparent 72%)';
      stage.appendChild(w);
    }

    function spawnConfetti(rarityColor, count) {
      for (var i = 0; i < count; i++) {
        var angle = (i / count) * 360 + (Math.random() - 0.5) * 16;
        var dist  = 100 + Math.random() * 210;
        var rad   = angle * Math.PI / 180;
        var color = (i % 4 === 0 && rarityColor) ? rarityColor : CONFETTI_COLORS[i % CONFETTI_COLORS.length];
        var d = document.createElement('div');
        d.className = 'vg-confetti';
        d.style.setProperty('--gx', (Math.cos(rad) * dist).toFixed(1) + 'px');
        d.style.setProperty('--gy', (Math.sin(rad) * dist).toFixed(1) + 'px');
        d.style.setProperty('--gr', ((Math.random() - 0.5) * 800).toFixed(0) + 'deg');
        d.style.setProperty('--gd', (Math.random() * 0.22).toFixed(3) + 's');
        if (i % 3 === 0) {
          var rw = 5 + Math.floor(Math.random() * 5), rh = 13 + Math.floor(Math.random() * 10);
          d.innerHTML = '<div style="width:' + rw + 'px;height:' + rh + 'px;background:' + color + ';border-radius:2px;opacity:0.9"></div>';
        } else {
          var sz = 10 + Math.floor(Math.random() * 11);
          d.innerHTML = '<svg width="' + sz + '" height="' + sz + '" viewBox="0 0 20 22">'
            + '<polygon points="10,1 20,8 16,21 4,21 0,8" fill="' + color + '"/>'
            + '<polygon points="10,1 20,8 10,6 0,8" fill="rgba(255,255,255,0.38)"/></svg>';
        }
        stage.appendChild(d);
      }
    }

    /* CR-style stage: after tap n the chest is at plan[n-1]. Stars mirror the
       CURRENT tier level (1–4) in the bottom dock — tap 1 bursts in the
       starting tier's stars, an upgrade tap bursts in one more + re-pops the
       label + crossfades the backdrop + fades in the next gold layer + grows
       the present. A no-upgrade tap leaves the stage as-is (shake + sparks). */
    function setStage(n) {
      var idx = plan[n - 1], st = RARITIES[idx];
      var upgraded = n > 1 && plan[n - 1] > plan[n - 2];
      setBg(idx);
      for (var g = 2; g <= st.stars; g++) gift.classList.add('vg-tier' + g);
      scaleW.style.transform = 'scale(' + TIER_SCALE[idx] + ')';
      while (starsRow.children.length < st.stars) {
        var s = document.createElement('span');
        s.className = 'vg-star vg-star-pop';
        s.innerHTML = STAR_SVG;
        starsRow.appendChild(s);
      }
      starsRow.classList.add('vg-has');
      if (n === 1 || upgraded) {
        sub.className = 'vg-stage-label';
        // retrigger the pop animation on an upgrade (same element re-labels)
        sub.style.animation = 'none';
        void sub.offsetWidth;
        sub.style.animation = '';
        // on a tinted backdrop the label reads white; tier colour on white bg
        sub.style.color = idx >= 1 ? '#fff' : st.labelColor;
        sub.textContent = st.label + '!';
      }
      return upgraded;
    }

    /* ── Reveal payout helpers ── */
    function countUp(el, target, dur) {
      var t0 = null, done = false;
      function f(now) {
        if (done) return;
        if (t0 === null) t0 = now;
        var p = Math.min(1, (now - t0) / dur);
        var e = 1 - Math.pow(1 - p, 3);
        el.textContent = '+' + Math.round(target * e);
        if (p < 1 && el.isConnected) requestAnimationFrame(f);
        else { done = true; el.classList.add('vg-pay-pop'); }
      }
      requestAnimationFrame(f);
      // rAF freezes in background tabs — land the final amount AND stop the
      // loop (a late-starting throttled frame would otherwise overwrite it)
      timers.push(setTimeout(function () {
        done = true;
        el.textContent = '+' + target;
        el.classList.add('vg-pay-pop');
      }, dur + 400));
    }
    function payRow(kind, amount, big, delay) {
      var row = document.createElement('div');
      row.className = 'vg-pay-row ' + (big ? 'vg-pay-gems' : 'vg-pay-coins')
        + (kind === 'heart' ? ' vg-pay-heart' : '');
      row.style.animationDelay = delay + 's';
      row.innerHTML = '<span class="vg-pay-ico" style="animation-delay:' + (delay + 0.05) + 's">'
        + ICONS[kind](big ? 46 : 32) + '</span><span class="vg-pay-num">+0</span>';
      var num = row.querySelector('.vg-pay-num');
      timers.push(setTimeout(function () { countUp(num, amount, 850); }, (delay + 0.15) * 1000));
      return row;
    }
    /* Fountain of the actual currencies: icons erupt up out of the chest and
       fall past it (outer div drifts X, inner arcs Y — see vgDropX/Y). */
    function spawnDrops(kind, count) {
      if (!ICONS[kind]) return;
      for (var i = 0; i < count; i++) {
        var d = document.createElement('div');
        d.className = 'vg-drop';
        var dt = (0.95 + Math.random() * 0.5).toFixed(2) + 's';
        var dd = (Math.random() * 0.28).toFixed(2) + 's';
        d.style.setProperty('--dx', ((Math.random() * 2 - 1) * 230).toFixed(0) + 'px');
        d.style.setProperty('--dt', dt);
        d.style.setProperty('--dd', dd);
        var inner = document.createElement('div');
        inner.className = 'vg-drop-in';
        inner.style.setProperty('--dy', (-(90 + Math.random() * 190)).toFixed(0) + 'px');
        inner.style.setProperty('--dt', dt);
        inner.style.setProperty('--dd', dd);
        inner.style.setProperty('--dr', ((Math.random() - 0.5) * 300).toFixed(0) + 'deg');
        inner.innerHTML = ICONS[kind](16 + Math.floor(Math.random() * 14));
        d.appendChild(inner);
        stage.appendChild(d);
      }
    }

    function reveal() {
      phase = 'revealed';
      stopGlitter(500);
      sndTadaa();
      // backdrop back to WHITE — the payout gets a clean stage
      setBg(-1);
      gift.classList.add('vg-revealed');
      idleW.className = '';
      hitW.style.filter = 'none';

      // fountain of the currencies that are actually in the prize
      if (isRandom) {
        if (prize.gems   > 0) spawnDrops('gem', 12);
        if (prize.coins  > 0) spawnDrops('coin', 14);
        if (prize.hearts > 0) spawnDrops('heart', 8);
      } else {
        spawnDrops(icon, 13);
      }

      var wrap = document.createElement('div');
      wrap.className = 'vg-revealwrap';
      var pay = document.createElement('div');
      pay.className = 'vg-payout';
      if (isRandom) {
        // final tier name re-pops in its own colour on the white backdrop;
        // the bottom star dock already shows the final tier
        var t = prize.rarity;
        sub.className = 'vg-stage-label';
        sub.style.animation = 'none';
        void sub.offsetWidth;
        sub.style.animation = '';
        sub.style.color = t.labelColor;
        sub.textContent = t.label + '!';
        // rows stagger in prize order; the single-roll logic guarantees gems
        // and/or coins, so a hearts bonus is never the (big) first row
        var _rows = [];
        if (prize.gems   > 0) _rows.push(['gem',   prize.gems]);
        if (prize.coins  > 0) _rows.push(['coin',  prize.coins]);
        if (prize.hearts > 0) _rows.push(['heart', prize.hearts]);
        for (var _ri = 0; _ri < _rows.length; _ri++) {
          pay.appendChild(payRow(_rows[_ri][0], _rows[_ri][1], _ri === 0, 0.15 + _ri * 0.19));
        }
      } else {
        sub.textContent = '';
        pay.appendChild(payRow(icon, prize.amount, true, 0.15));
      }
      wrap.appendChild(pay);
      stage.appendChild(wrap);

      var ftv = typeof opts.footText === 'function' ? opts.footText(prize) : opts.footText;
      if (ftv) {
        var ft = foot.querySelector('.vg-foottext');
        ft.textContent = ftv;
        ft.style.display = '';
      }
      foot.style.display = '';

      if (!claimed) {
        claimed = true;
        if (opts.onClaim) try { opts.onClaim(isRandom ? prize : prize.amount); } catch (e) {}
      }
    }

    gift.addEventListener('click', function () {
      if (phase !== 'tap') return;
      taps++;
      sndTap(taps);
      // autoplay was blocked on open → this tap IS a user gesture, recover the bed
      glitter.retry();
      // squash-shake: retrigger via class remove + reflow + add
      hitW.classList.remove('vg-hit');
      void hitW.offsetWidth;
      hitW.classList.add('vg-hit');
      seam.setAttribute('opacity', (Math.min(taps / needed, 1) * 0.95).toFixed(2));
      // glow follows the chest's CURRENT tier — white glow on a tinted
      // backdrop (the tier colour would drown in its own background),
      // gold sparks there for the same reason
      var curIdx   = isRandom ? plan[taps - 1] : -1;
      var curTier  = curIdx >= 0 ? RARITIES[curIdx] : null;
      var tinted   = curIdx >= 1;
      var glowCol  = tinted ? '#FFFFFF' : (curTier ? curTier.color : '#FFC800');
      var sparkCol = tinted ? '#FFC800' : (curTier ? curTier.color : '#FFC800');
      var glowN    = curTier ? curTier.stars : taps;
      hitW.style.filter = 'drop-shadow(0 0 ' + (10 + glowN * 9) + 'px ' + h2rgba(glowCol, (0.28 + glowN * 0.11)) + ')';
      var upgraded = isRandom ? setStage(taps) : false;

      if (taps >= needed) {
        phase = 'burst';
        gift.style.cursor = 'default';
        lid.classList.add('vg-lid-fly');
        var flash = document.createElement('div');
        flash.className = 'vg-flash';
        stage.appendChild(flash);
        spawnSparks(14, 130, isRandom ? sparkCol : null);
        spawnConfetti(isRandom ? prize.rarity.color : null, isRandom ? 40 + prize.rarity.stars * 8 : 44);
        timers.push(setTimeout(reveal, 620));
      } else {
        lid.style.transform = 'translateY(' + (-taps * 4) + 'px) rotate(' + (taps * -3) + 'deg)';
        // an upgrade tap gets a bigger burst + a gold light wash
        if (upgraded) spawnWash();
        spawnSparks(upgraded ? 12 : 8, upgraded ? 115 : 85, sparkCol);
      }
    });
  }

  window.VumedGift = { open: open, RARITIES: RARITIES, UPGRADE_CHANCE: UPGRADE_CHANCE };

  /* DEV PREVIEW (Tijmen, 2026-07-13): Shift+R opens a throwaway random roll to
     develop/review the reward mechanic. onClaim is a no-op — nothing is ever
     credited or persisted, so spam away. Ignored while typing in a field,
     while a gift is already open, or with cmd/ctrl/alt held (hard-reload etc). */
  document.addEventListener('keydown', function (e) {
    if (!e.shiftKey || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key !== 'R' && e.key !== 'r' && e.code !== 'KeyR') return;
    var t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    if (document.querySelector('.vg-overlay')) return;
    open({ random: true, onClaim: function () {} });
  });
})();
