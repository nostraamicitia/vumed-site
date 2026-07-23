/* openreview.js — AI grading for open (essay) questions.
 * Shared, self-contained CLASSIC script loaded AFTER the inline exam script,
 * so it can read/patch the exam's top-level globals: state, saveProgress,
 * resolveCheckBtn, awardXP, xpForQuestion, updateStreakBar, fireCorrectAnimation,
 * playSoundCorrect, updateSummary, EXAM_KEY, OPENAI_API_KEY.
 *
 * Behaviour: an open question now has a normal "Controleer antwoord" button.
 * Clicking it sends {question, student answer, model answer, rubric} to OpenAI
 * (gpt-4o-mini), which judges correct / incorrect. The verdict flows through the
 * SAME state.answered path as MCQs, so it affects XP, streak and the progress
 * dots. The official model answer is then revealed so the student can self-check.
 *
 * Offline / no API key / no model answer  ->  graceful fallback: reveal the model
 * answer and mark the question 'answered' (participation XP, no streak change),
 * exactly like the old "Toon modelantwoord" behaviour.
 *
 * §0 golden rule: this does NOT touch the Supabase write path. The typed answer
 * rides along in state.openText, which the inline saveProgress()/restore already
 * persist to localStorage AND Supabase.
 */
(function () {
  'use strict';

  var MODEL = 'gpt-4o-mini';

  function apiKey() {
    try { if (typeof OPENAI_API_KEY !== 'undefined' && OPENAI_API_KEY) return OPENAI_API_KEY; } catch (e) {}
    return (window.OPENAI_API_KEY || '');
  }

  /* Local-only side store for the typed answers, so text survives a reload
   * even on exams built before state.openText existed. Purely additive —
   * never touches Supabase (§0 safe). New builds ALSO get it via saveProgress. */
  function sideKey() {
    var k = 'exam';
    try { if (typeof EXAM_KEY !== 'undefined' && EXAM_KEY) k = EXAM_KEY; } catch (e) {}
    return 'vumed_opentext_' + k;
  }
  function sideLoad() {
    try { return JSON.parse(localStorage.getItem(sideKey()) || '{}') || {}; } catch (e) { return {}; }
  }
  function sideSave(qnum, text) {
    try { var o = sideLoad(); o[qnum] = text; localStorage.setItem(sideKey(), JSON.stringify(o)); } catch (e) {}
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* ---- one-time CSS (works on every already-built exam too) ------------- */
  function injectCss() {
    if (document.getElementById('openreview-style')) return;
    var st = document.createElement('style');
    st.id = 'openreview-style';
    st.textContent =
      '.open-aifeedback{border-radius:12px;padding:11px 14px;margin-bottom:12px;font-size:13.5px;line-height:1.55;}' +
      '.open-aifeedback .oaf-badge{display:inline-block;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:.02em;margin-right:8px;}' +
      '.open-aifeedback.ok{background:#EEF9E7;border:1.5px solid #58CC02;}' +
      '.open-aifeedback.ok .oaf-badge{color:#3F9E00;}' +
      '.open-aifeedback.bad{background:#FFF0EF;border:1.5px solid #FF3B30;}' +
      '.open-aifeedback.bad .oaf-badge{color:#D32B21;}' +
      '.open-aifeedback.neutral{background:#F2F6FA;border:1.5px solid #C7C7CC;}' +
      '.open-aifeedback.neutral .oaf-badge{color:#636366;}' +
      '.open-aifeedback .oaf-text{color:#1C1C1E;}' +
      '.open-input.open-empty{border-color:#FF3B30 !important;box-shadow:0 0 0 3px rgba(255,59,48,.15);}';
    document.head.appendChild(st);
  }

  /* ---- read the pieces we need out of a question block ----------------- */
  function readQ(qnum) {
    var block = document.getElementById('qblock-' + qnum);
    if (!block) return null;
    var qEl = block.querySelector('.q-question') || block.querySelector('.q-text');
    var modelEl = block.querySelector('.open-modelans');
    var critEl = block.querySelector('.open-crit');
    return {
      block: block,
      question: qEl ? qEl.textContent.trim() : '',
      model: modelEl ? modelEl.textContent.trim() : '',
      criteria: critEl ? critEl.textContent.trim() : ''
    };
  }

  /* ---- OpenAI call: returns {correct, feedback} or null on any failure -- */
  function grade(question, student, model, criteria) {
    var key = apiKey();
    if (!key || !navigator.onLine || !model) return Promise.resolve(null);

    var sys = 'Je bent een eerlijke maar nauwkeurige examinator geneeskunde aan een ' +
      'Nederlandse universiteit. Je beoordeelt of het antwoord van een student op een ' +
      'open tentamenvraag inhoudelijk correct is, vergeleken met het officiële ' +
      'modelantwoord. Wees soepel op formulering, spelling en volgorde, maar streng op ' +
      'medische inhoud: alle kernpunten van het modelantwoord moeten aanwezig zijn. ' +
      'Antwoord UITSLUITEND met JSON in de vorm ' +
      '{"correct": true/false, "feedback": "<1 tot 2 korte zinnen in het Nederlands>"}. ' +
      'In feedback: bij fout benoem je kort wat ontbreekt of niet klopt; bij goed een ' +
      'korte bevestiging.';

    var user = 'VRAAG:\n' + question + '\n\nOFFICIEEL MODELANTWOORD:\n' + model +
      (criteria ? ('\n\nBEOORDELINGSCRITERIA:\n' + criteria) : '') +
      '\n\nANTWOORD VAN DE STUDENT:\n' + student +
      '\n\nBeoordeel het studentantwoord.';

    return fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0,
        response_format: { type: 'json_object' },
        messages: [{ role: 'system', content: sys }, { role: 'user', content: user }]
      })
    }).then(function (res) {
      if (!res.ok) return null;
      return res.json().then(function (j) {
        var c = j && j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content;
        if (!c) return null;
        var p = JSON.parse(c);
        return { correct: !!p.correct, feedback: String(p.feedback || '') };
      });
    }).catch(function () { return null; });
  }

  /* ---- feedback chip inside the result card ---------------------------- */
  function showFeedback(qnum, correct, text) {
    var result = document.getElementById('result-' + qnum);
    if (!result) return;
    var fb = result.querySelector('.open-aifeedback');
    if (!fb) {
      fb = document.createElement('div');
      fb.className = 'open-aifeedback';
      result.insertBefore(fb, result.firstChild);
    }
    var cls = correct === true ? 'ok' : correct === false ? 'bad' : 'neutral';
    var label = correct === true ? 'Goed beantwoord'
      : correct === false ? 'Nog niet correct' : 'Modelantwoord';
    fb.className = 'open-aifeedback ' + cls;
    fb.innerHTML = '<span class="oaf-badge">' + label + '</span>' +
      (text ? ('<span class="oaf-text">' + esc(text) + '</span>') : '');
  }

  /* ---- the new check handler ------------------------------------------- */
  function checkOpen(qnum) {
    if (state.answered[qnum]) return;
    var ta = document.getElementById('open-input-' + qnum);
    var ans = ta ? ta.value.trim() : '';
    if (!ans) {                                   // nudge: don't grade an empty box
      if (ta) {
        ta.focus();
        ta.classList.add('open-empty');
        setTimeout(function () { ta.classList.remove('open-empty'); }, 1200);
      }
      return;
    }

    var q = readQ(qnum) || { question: '', model: '', criteria: '' };
    if (!state.openText) state.openText = {};
    state.openText[qnum] = ans;                   // persisted by saveProgress() (new builds)
    sideSave(qnum, ans);                          // local fallback (all builds)

    var btn = document.getElementById('check-' + qnum);
    if (btn) { btn.dataset.orig = btn.textContent; btn.textContent = 'Nakijken…'; btn.disabled = true; }
    if (ta) ta.disabled = true;

    grade(q.question, ans, q.model, q.criteria).then(function (verdict) {
      var result = document.getElementById('result-' + qnum);
      if (result) result.classList.add('show');   // reveal the official model answer
      if (btn && btn.dataset.orig) btn.textContent = btn.dataset.orig;

      if (verdict) {
        var ok = verdict.correct;
        state.answered[qnum] = ok ? 'correct' : 'wrong';
        showFeedback(qnum, ok, verdict.feedback);
        resolveCheckBtn(qnum, ok);
        if (ok) {
          state.streak++;
          try { playSoundCorrect(state.streak); } catch (e) {}
          try { fireCorrectAnimation(qnum); } catch (e) {}
          awardXP(xpForQuestion(qnum), qnum);
        } else {
          state.streak = 0;
          try { playSoundWrong(); } catch (e) {}
          updateStreakBar();
        }
      } else {
        // offline / no key / no model answer -> reveal-only, mark answered
        state.answered[qnum] = 'answered';
        showFeedback(qnum, null,
          navigator.onLine ? '' : 'Je bent offline — bekijk het modelantwoord hieronder en beoordeel jezelf.');
        resolveCheckBtn(qnum, false);
        awardXP(xpForQuestion(qnum), qnum);
        updateStreakBar();
      }
      updateSummary();
      saveProgress();
    });
  }

  /* Expose + hijack the old reveal handler so pre-existing exams (whose
   * button still says onclick="showAnswer(n)") route through AI grading. */
  window.checkOpen = checkOpen;
  window.showAnswer = checkOpen;

  /* ---- restore: rehydrate typed text + verdict chip after a reload ----- */
  function restoreOpen() {
    var open = (typeof state !== 'undefined' && state.openText) ? state.openText : {};
    // The local side store must not outlive the exam's own saved-progress row.
    // Every graded open answer writes SAVE_KEY (saveProgress) alongside the side
    // store, so if SAVE_KEY is now absent the store is ORPHANED — the exam was
    // reset (resetExam removes SAVE_KEY) or another user signed out (SIGNED_OUT
    // removes SAVE_KEY). Clear it and don't rehydrate: this makes "Examen
    // resetten" truly clear typed open answers and stops user B on a shared
    // device from seeing user A's essays. Supabase-restored answers still arrive
    // via state.openText (which takes precedence below), so cross-device restore
    // is unaffected.
    var saveK = 'vumed_progress_';
    try { if (typeof EXAM_KEY !== 'undefined' && EXAM_KEY) saveK += EXAM_KEY; } catch (e) { saveK = null; }
    var hasLocal = false;
    try { hasLocal = !!(saveK && localStorage.getItem(saveK)); } catch (e) {}
    if (!hasLocal) { try { localStorage.removeItem(sideKey()); } catch (e) {} }
    var side = hasLocal ? sideLoad() : {};
    document.querySelectorAll('textarea.open-input').forEach(function (ta) {
      var n = ta.id.replace('open-input-', '');
      var verdict = state.answered[n];
      var txt = open[n] !== undefined ? open[n] : side[n];
      if (txt !== undefined && ta.value === '') ta.value = txt;
      if (verdict) {
        var result = document.getElementById('result-' + n);
        if (result) result.classList.add('show');
        var ok = verdict === 'correct' ? true : verdict === 'wrong' ? false : null;
        if (!document.querySelector('#result-' + n + ' .open-aifeedback')) showFeedback(n, ok, '');
      }
    });
  }

  /* ---- relabel the old "Toon modelantwoord" button on load ------------- */
  function relabel() {
    document.querySelectorAll('button.check-btn').forEach(function (b) {
      if (b.textContent.trim() === 'Toon modelantwoord') b.textContent = 'Controleer antwoord';
    });
  }

  function init() {
    try { if (typeof state !== 'undefined' && !state.openText) state.openText = {}; } catch (e) {}
    injectCss();
    relabel();
    restoreOpen();                 // fast path (localStorage already applied)
    setTimeout(restoreOpen, 400);  // after Supabase restore settles
    setTimeout(restoreOpen, 1600);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
