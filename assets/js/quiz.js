'use strict';
// ---------- quizzes ----------
var quizState = {};
function renderQuiz(box) {
  var sid = box.getAttribute('data-quiz'), qs = QUIZ[sid];
  if (!qs) { box.hidden = true; return; }
  var st = quizState[sid] || (quizState[sid] = { picks: {} });
  var best = store.docs.progress.quiz[sid];
  var answered = Object.keys(st.picks).length, right = 0;
  Object.keys(st.picks).forEach(function (i) { if (st.picks[i] === qs[i].answer) right++; });
  var h = '<div class="quiz-head"><h3>' + B('quiz.check-your-understanding') + '</h3><span class="quiz-score">' +
    (answered === qs.length ? B('quiz.score', [right, qs.length]) + ' · ' : '') +
    (best != null ? B('quiz.best', [best, qs.length]) : B('quiz.questions', [qs.length])) + '</span></div>';
  qs.forEach(function (q, i) {
    var pick = st.picks[i];
    h += '<div class="qq"><p class="qq-q">' + (i + 1) + '. ' + BO(q.q) + '</p><div class="qq-opts">';
    q.options.forEach(function (o, j) {
      var cls = '';
      if (pick != null) { if (j === q.answer) cls = ' right'; else if (j === pick) cls = ' wrong'; }
      h += '<button type="button" class="qq-opt' + cls + '" data-q="' + i + '" data-o="' + j + '"' + (pick != null ? ' disabled' : '') + '>' +
        '<span class="letter">' + 'ABCD'[j] + '</span><span>' + BO(o) + '</span></button>';
    });
    h += '</div>';
    if (pick != null) {
      h += '<p class="qq-why"><b>' + (pick === q.answer ? B('quiz.correct') : B('quiz.not-quite')) + '</b> · ' + BO(q.why) + '</p>';
    }
    h += '</div>';
  });
  if (answered === qs.length) h += '<p style="margin-top:14px"><button type="button" class="btn ghost" data-quiz-reset="' + sid + '">' + B('quiz.try-again') + '</button></p>';
  box.innerHTML = h;
}
function renderAllQuizzes() { document.querySelectorAll('.quiz[data-quiz]').forEach(renderQuiz); renderBadges(); }
function renderBadges() {
  document.querySelectorAll('.qs[data-qs]').forEach(function (b) {
    var sid = b.getAttribute('data-qs'), best = store.docs.progress.quiz[sid];
    b.textContent = best != null && QUIZ[sid] ? best + '/' + QUIZ[sid].length : '';
  });
}
document.addEventListener('click', function (e) {
  var o = e.target.closest('.qq-opt');
  if (o && !o.disabled) {
    var box = o.closest('.quiz'), sid = box.getAttribute('data-quiz');
    var st = quizState[sid] || (quizState[sid] = { picks: {} });
    st.picks[+o.getAttribute('data-q')] = +o.getAttribute('data-o');
    var qs = QUIZ[sid];
    if (Object.keys(st.picks).length === qs.length) {
      var right = 0; Object.keys(st.picks).forEach(function (i) { if (st.picks[i] === qs[i].answer) right++; });
      if (store.docs.progress.quiz[sid] == null || right > store.docs.progress.quiz[sid]) {
        store.docs.progress.quiz[sid] = right; saveDoc('progress');
      }
    }
    renderQuiz(box); renderBadges();
    return;
  }
  var r = e.target.closest('[data-quiz-reset]');
  if (r) { quizState[r.getAttribute('data-quiz-reset')] = { picks: {} }; renderQuiz(r.closest('.quiz')); }
});
