'use strict';
// ---------- game theory: zero-sum matrix games (Applied Game Theory chapter) ----------
// Convention: rows are the attacker's options, columns the defender's. A[i][j] is what the attacker
// gains (damage, or any unit you choose) when row i meets column j; the defender loses the same amount.
// R[i][j] = 1 marks a cell that leads back to this same situation (a loop): its payoff is A[i][j] + V,
// where V is the value of the whole situation.

// Value and optimal mixes of the zero-sum game A, by linear programming (simplex, Bland's rule).
// Shift A so every entry is >= 1; then max sum(y) s.t. A'y <= 1, y >= 0 gives the defender's mix
// q = y / sum(y), the attacker's mix p from the dual values, and the value v = 1 / sum(y) - shift.
function gtSolve(A) {
  var m = A.length, n = A[0].length, i, j, min = Infinity;
  for (i = 0; i < m; i++) for (j = 0; j < n; j++) if (A[i][j] < min) min = A[i][j];
  var k = 1 - min, W = n + m, T = [], basis = [];
  for (i = 0; i < m; i++) {
    var row = [];
    for (j = 0; j < n; j++) row.push(A[i][j] + k);
    for (j = 0; j < m; j++) row.push(i === j ? 1 : 0);
    row.push(1); T.push(row); basis.push(n + i);
  }
  var obj = [];
  for (j = 0; j < W; j++) obj.push(j < n ? -1 : 0);
  obj.push(0); T.push(obj);
  for (var it = 0; it < 1000; it++) {
    var e = -1;
    for (j = 0; j < W; j++) if (T[m][j] < -1e-12) { e = j; break; }   // Bland: lowest index enters
    if (e < 0) break;
    var r = -1, best = Infinity;
    for (i = 0; i < m; i++) {
      if (T[i][e] <= 1e-12) continue;
      var ratio = T[i][W] / T[i][e];
      if (ratio < best - 1e-12 || (Math.abs(ratio - best) <= 1e-12 && basis[i] < basis[r])) { best = ratio; r = i; }
    }
    if (r < 0) break;
    var pv = T[r][e];
    for (j = 0; j <= W; j++) T[r][j] /= pv;
    for (i = 0; i <= m; i++) {
      if (i === r || !T[i][e]) continue;
      var f = T[i][e];
      for (j = 0; j <= W; j++) T[i][j] -= f * T[r][j];
    }
    basis[r] = e;
  }
  var y = [], x = [];
  for (j = 0; j < n; j++) y.push(0);
  for (i = 0; i < m; i++) if (basis[i] < n) y[basis[i]] = T[i][W];
  for (i = 0; i < m; i++) x.push(Math.max(0, T[m][n + i]));
  var tidy = function (a) {
    a = a.map(function (z) { return Math.max(0, z); });
    var s = a.reduce(function (t, z) { return t + z; }, 0);
    return a.map(function (z) { return s > 0 ? z / s : 1 / a.length; });
  };
  var p = tidy(x), q = tidy(y);
  return { p: p, q: q, v: gtPayoff(A, p, q) };
}
function gtPayoff(A, p, q) {   // expected payoff p^T A q
  var s = 0;
  for (var i = 0; i < A.length; i++) for (var j = 0; j < A[0].length; j++) s += p[i] * A[i][j] * q[j];
  return s;
}
function gtRowVals(A, q) { return A.map(function (r) { return r.reduce(function (s, a, j) { return s + a * q[j]; }, 0); }); }   // (Aq)_i
function gtColVals(A, p) { return A[0].map(function (_, j) { return A.reduce(function (s, r, i) { return s + p[i] * r[j]; }, 0); }); }   // (p^T A)_j

// Pure saddle point: max of row minima equals min of column maxima.
function gtSaddle(A) {
  var rowMin = A.map(function (r) { return Math.min.apply(null, r); });
  var colMax = A[0].map(function (_, j) { return Math.max.apply(null, A.map(function (r) { return r[j]; })); });
  var lo = Math.max.apply(null, rowMin), hi = Math.min.apply(null, colMax);
  return { maximin: lo, minimax: hi, pure: Math.abs(hi - lo) < 1e-9, row: rowMin.indexOf(lo), col: colMax.indexOf(hi) };
}
// Dominated options. Strict: row i does worse than some row k in every column (column j costs the defender
// more than some column l against every row). Weak: never better and worse at least once.
function gtDominated(A) {
  var m = A.length, n = A[0].length, rows = [], cols = [];
  var cmp = function (a, b) {   // 2 = a beats b everywhere, 1 = a >= b with one strict, 0 = neither
    var ge = true, gt = true, some = false;
    for (var t = 0; t < a.length; t++) { if (a[t] < b[t]) ge = false; if (a[t] <= b[t]) gt = false; if (a[t] > b[t]) some = true; }
    return gt ? 2 : ge && some ? 1 : 0;
  };
  var pick = function (vecs, list) {
    vecs.forEach(function (vi, i) {
      var best = null;
      vecs.forEach(function (vk, k) { if (k !== i) { var c = cmp(vk, vi); if (c && (!best || c > best.c)) best = { which: i, by: k, c: c }; } });
      if (best) list.push({ which: best.which, by: best.by, strict: best.c === 2 });
    });
  };
  pick(A, rows);
  pick(A[0].map(function (_, j) { return A.map(function (r) { return -r[j]; }); }), cols);   // the defender prefers smaller payoffs
  return { rows: rows, cols: cols };
}
// Options left out of the equilibrium that still do exactly as well against it: other equilibria may exist.
function gtTies(A, s, tol) {
  tol = tol == null ? 1e-6 * (1 + Math.abs(s.v)) : tol;
  var rv = gtRowVals(A, s.q), cv = gtColVals(A, s.p);
  return {
    rows: rv.map(function (x, i) { return s.p[i] < 1e-9 && Math.abs(x - s.v) <= tol ? i : -1; }).filter(function (i) { return i >= 0; }),
    cols: cv.map(function (x, j) { return s.q[j] < 1e-9 && Math.abs(x - s.v) <= tol ? j : -1; }).filter(function (j) { return j >= 0; })
  };
}
// Loops: V = val(A + R*V), found by value iteration from V = 0 (Shapley's operator).
function gtLoop(A, R, maxIt) {
  var has = R.some(function (r) { return r.some(function (x) { return x; }); });
  if (!has) { var s0 = gtSolve(A); return { sol: s0, V: s0.v, M: A, iters: 0, converged: true, loop: false }; }
  var V = 0, sol = null, M = A, it;
  maxIt = maxIt || 5000;
  for (it = 1; it <= maxIt; it++) {
    M = A.map(function (r, i) { return r.map(function (a, j) { return R[i][j] ? a + V : a; }); });
    sol = gtSolve(M);
    if (!isFinite(sol.v) || Math.abs(sol.v) > 1e7) return { sol: sol, V: sol.v, M: M, iters: it, converged: false, loop: true };
    if (Math.abs(sol.v - V) < 1e-4) { V = sol.v; break; }
    V = sol.v;
  }
  return { sol: sol, V: V, M: M, iters: it, converged: it <= maxIt, loop: true };
}
// Habits from counts: Laplace (Dirichlet(1,...,1)) estimate, and Wilson 95% intervals for each raw share.
function gtHabits(counts) {
  var c = counts.map(function (x) { return Math.max(0, Math.round(+x || 0)); });
  var N = c.reduce(function (s, x) { return s + x; }, 0), k = c.length, z = 1.959964;
  return {
    N: N,
    est: c.map(function (x) { return (x + 1) / (N + k); }),
    raw: c.map(function (x) { return N ? x / N : null; }),
    ci: c.map(function (x) {
      if (!N) return null;
      var ph = x / N, d = 1 + z * z / N, mid = (ph + z * z / (2 * N)) / d;
      var half = z * Math.sqrt(ph * (1 - ph) / N + z * z / (4 * N * N)) / d;
      return [Math.max(0, mid - half), Math.min(1, mid + half)];
    })
  };
}
// Best response to an estimated defender mix, and blends between the equilibrium and that response.
function gtExploit(A, s, qhat) {
  var rv = gtRowVals(A, qhat), br = rv.indexOf(Math.max.apply(null, rv));
  var blends = [0, 0.25, 0.5, 0.75, 1].map(function (lam) {
    var p = s.p.map(function (x, i) { return (1 - lam) * x + (i === br ? lam : 0); });
    var cv = gtColVals(A, p);
    return { lam: lam, p: p, ev: gtPayoff(A, p, qhat), worst: Math.min.apply(null, cv) };
  });
  return { rowVals: rv, br: br, blends: blends };
}

// ----- presets (payoffs are examples; replace them with damage you measured) -----
var GT_PRESETS = {
  sw2: {
    rows: [{ en: 'Meaty strike', pt: 'Golpe meaty' }, { en: 'Throw', pt: 'Throw' }],
    cols: [{ en: 'Block', pt: 'Defender' }, { en: 'Tech', pt: 'Tech' }],
    A: [[0, 1800], [1200, 0]], R: [[0, 0], [0, 0]], counts: [6, 4]
  },
  loop: {
    rows: [{ en: 'Meaty strike', pt: 'Golpe meaty' }, { en: 'Throw (back to oki)', pt: 'Throw (volta ao oki)' }],
    cols: [{ en: 'Block', pt: 'Defender' }, { en: 'Tech', pt: 'Tech' }],
    A: [[0, 1800], [1200, 0]], R: [[0, 0], [1, 0]], counts: [6, 4]
  },
  oki: {
    rows: [{ en: 'Meaty strike', pt: 'Golpe meaty' }, { en: 'Throw', pt: 'Throw' }, { en: 'Shimmy', pt: 'Shimmy' }, { en: 'Block and bait', pt: 'Defender e esperar' }],
    cols: [{ en: 'Block', pt: 'Defender' }, { en: 'Tech', pt: 'Tech' }, { en: 'Fast button', pt: 'Botão rápido' }, { en: 'OD Shoryuken', pt: 'OD Shoryuken' }],
    A: [[0, 1800, 1800, -1600], [1200, 0, -1000, -1600], [0, 2500, 1500, -1600], [0, -1200, 0, 3000]],
    R: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], counts: [5, 3, 1, 1]
  },
  nobait: {
    rows: [{ en: 'Meaty strike', pt: 'Golpe meaty' }, { en: 'Throw', pt: 'Throw' }, { en: 'Shimmy', pt: 'Shimmy' }],
    cols: [{ en: 'Block', pt: 'Defender' }, { en: 'Tech', pt: 'Tech' }, { en: 'OD Shoryuken', pt: 'OD Shoryuken' }],
    A: [[0, 1800, -1600], [1200, 0, -1600], [0, 2500, -1600]], R: [[0, 0, 0], [0, 0, 0], [0, 0, 0]], counts: [5, 3, 2]
  }
};
var GT_MAX = 5;
function gtLoad(key) {
  var P = GT_PRESETS[key];
  adv.gt = { preset: key, rows: clone(P.rows), cols: clone(P.cols), A: clone(P.A), R: clone(P.R), counts: P.counts.slice() };
  advSave();
}
if (!adv.gt || !adv.gt.A || !adv.gt.A.length) gtLoad('oki');
function gtResize(m, n) {
  var g = adv.gt;
  m = Math.max(2, Math.min(GT_MAX, m)); n = Math.max(2, Math.min(GT_MAX, n));
  while (g.rows.length < m) { var r = String.fromCharCode(65 + g.rows.length); g.rows.push({ en: 'Option ' + r, pt: 'Opção ' + r }); g.A.push(g.cols.map(function () { return 0; })); g.R.push(g.cols.map(function () { return 0; })); }
  g.rows.length = m; g.A.length = m; g.R.length = m;
  while (g.cols.length < n) { var c = g.cols.length + 1; g.cols.push({ en: 'Answer ' + c, pt: 'Resposta ' + c }); g.A.forEach(function (r) { r.push(0); }); g.R.forEach(function (r) { r.push(0); }); g.counts.push(0); }
  g.cols.length = n; g.counts.length = n;
  g.A.forEach(function (r) { r.length = n; }); g.R.forEach(function (r) { r.length = n; });
  g.preset = '';
  advSave();
}

// ----- widget -----
widgets['adv-games'] = el('<div class="widget adv-tool gt-tool" data-group="advanced"></div>');
function gtName(o) { return (o && (o[lang] || o.en)) || ''; }
function gtFmt(n) { var r = Math.round(n); return (r < 0 ? '−' : '') + Math.abs(r).toLocaleString(lang === 'pt' ? 'pt-BR' : 'en-US'); }
function gtPct(x) { return (Math.round(x * 1000) / 10).toString().replace('.', lang === 'pt' ? ',' : '.') + '%'; }
function renderGames() {
  var w = widgets['adv-games'], g = adv.gt, m = g.rows.length, n = g.cols.length;
  var presets = ['oki', 'nobait', 'sw2', 'loop'].map(function (k) { return '<option value="' + k + '"' + (g.preset === k ? ' selected' : '') + '>' + esc(tx(lang, 'gt.preset.' + k)) + '</option>'; }).join('');
  var h = '<div class="tr-grid">' +
    '<div class="field"><label for="gt-preset">' + B('gt.preset') + '</label><select id="gt-preset">' + (g.preset ? '' : '<option value="" selected>' + esc(tx(lang, 'gt.custom')) + '</option>') + presets + '</select></div>' +
    '<div class="field"><label for="gt-m">' + B('gt.rows') + '</label><input id="gt-m" type="number" inputmode="numeric" min="2" max="' + GT_MAX + '" value="' + m + '"></div>' +
    '<div class="field"><label for="gt-n">' + B('gt.cols') + '</label><input id="gt-n" type="number" inputmode="numeric" min="2" max="' + GT_MAX + '" value="' + n + '"></div></div>';
  h += '<p class="small muted">' + B('gt.how') + '</p>';
  h += '<div class="table-wrap"><table class="pf-table gt-matrix"><thead><tr><th scope="col"><span class="gt-corner">' + B('gt.corner') + '</span></th>';
  g.cols.forEach(function (c, j) { h += '<th scope="col"><input class="gt-name" data-gt-col="' + j + '" aria-label="' + esc(tx(lang, 'gt.col-name', [j + 1])) + '" value="' + esc(gtName(c)) + '"></th>'; });
  h += '</tr></thead><tbody>';
  g.rows.forEach(function (r, i) {
    h += '<tr><th scope="row"><input class="gt-name" data-gt-row="' + i + '" aria-label="' + esc(tx(lang, 'gt.row-name', [i + 1])) + '" value="' + esc(gtName(r)) + '"></th>';
    g.cols.forEach(function (c, j) {
      h += '<td><input class="gt-cell" type="number" inputmode="numeric" step="100" data-gt-i="' + i + '" data-gt-j="' + j + '" aria-label="' + esc(gtName(r) + ' × ' + gtName(c)) + '" value="' + esc(g.A[i][j]) + '">' +
        '<label class="gt-loop"><input type="checkbox" data-gt-ri="' + i + '" data-gt-rj="' + j + '"' + (g.R[i][j] ? ' checked' : '') + '> ↻</label></td>';
    });
    h += '</tr>';
  });
  h += '</tbody></table></div>';
  h += '<div class="gt-out" aria-live="polite"></div>';
  h += '<h4>' + B('gt.habits') + '</h4><p class="small muted">' + B('gt.habits-how') + '</p><div class="tr-grid gt-counts">';
  g.cols.forEach(function (c, j) { h += '<div class="field"><label for="gt-c' + j + '">' + esc(gtName(c)) + '</label><input id="gt-c' + j + '" data-gt-count="' + j + '" type="number" inputmode="numeric" min="0" max="999" value="' + esc(g.counts[j]) + '"></div>'; });
  h += '</div><div class="gt-exploit" aria-live="polite"></div>';
  w.innerHTML = h;
  gamesResults();
}
function gtMatrix() { return adv.gt.A.map(function (r) { return r.map(function (a) { var x = +a; return isFinite(x) ? x : 0; }); }); }
function gtBars(names, mix) {
  return '<div class="gt-bars">' + names.map(function (nm, i) {
    return '<div class="gt-bar"><span class="gt-bar-l">' + esc(gtName(nm)) + '</span><span class="gt-bar-t"><span style="width:' + (mix[i] * 100).toFixed(1) + '%"></span></span><b>' + gtPct(mix[i]) + '</b></div>';
  }).join('') + '</div>';
}
function gamesResults() {
  var w = widgets['adv-games'], g = adv.gt, out = w.querySelector('.gt-out'), ex = w.querySelector('.gt-exploit');
  var A = gtMatrix(), L = gtLoop(A, g.R), s = L.sol, M = L.M, h = '';
  if (!L.converged) {
    out.innerHTML = '<p class="adv-sum">' + B('gt.diverge') + '</p>'; ex.innerHTML = ''; return;
  }
  h += '<div class="adv-big"><span>' + B('gt.value') + '</span><b>' + gtFmt(L.V) + '</b><small>' + B(L.V >= 0 ? 'gt.value-att' : 'gt.value-def') + '</small></div>';
  if (L.loop) h += '<p class="small">' + B('gt.loop-note', [gtFmt(gtSolve(A).v), gtFmt(L.V), L.iters]) + '</p>';
  h += '<div class="gt-mixes"><div><h5>' + B('gt.att-mix') + '</h5>' + gtBars(g.rows, s.p) + '</div><div><h5>' + B('gt.def-mix') + '</h5>' + gtBars(g.cols, s.q) + '</div></div>';
  var sd = gtSaddle(M), dom = gtDominated(M), ties = gtTies(M, s), notes = [];
  if (sd.pure) {   // name the saddle cell the solver's own mix uses, so the note and the bars agree
    var sr = s.p.indexOf(Math.max.apply(null, s.p)), sc = s.q.indexOf(Math.max.apply(null, s.q));
    if (Math.abs(M[sr][sc] - sd.maximin) > 1e-9) { sr = sd.row; sc = sd.col; }
    notes.push(B('gt.saddle', [esc(gtName(g.rows[sr])), esc(gtName(g.cols[sc])), gtFmt(sd.maximin)]));
  }
  else notes.push(B('gt.no-saddle', [gtFmt(sd.maximin), gtFmt(sd.minimax)]));
  dom.rows.forEach(function (d) { notes.push(B(d.strict ? 'gt.dom-row' : 'gt.wdom-row', [esc(gtName(g.rows[d.which])), esc(gtName(g.rows[d.by]))])); });
  dom.cols.forEach(function (d) { notes.push(B(d.strict ? 'gt.dom-col' : 'gt.wdom-col', [esc(gtName(g.cols[d.which])), esc(gtName(g.cols[d.by]))])); });
  if (ties.rows.length || ties.cols.length) notes.push(B('gt.ties', [ties.rows.map(function (i) { return esc(gtName(g.rows[i])); }).concat(ties.cols.map(function (j) { return esc(gtName(g.cols[j])); })).join(', ')]));
  h += '<ul class="small gt-notes">' + notes.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
  out.innerHTML = h;
  // exploitation
  var H = gtHabits(g.counts);
  if (!H.N) { ex.innerHTML = '<p class="muted">' + B('gt.no-counts') + '</p>'; return; }
  var E = gtExploit(M, s, H.est), e = '';
  e += '<div class="table-wrap"><table class="pf-table"><thead><tr><th>' + B('gt.answer') + '</th><th>' + B('gt.seen') + '</th><th>' + B('gt.est') + '</th><th>' + B('gt.ci') + '</th></tr></thead><tbody>';
  g.cols.forEach(function (c, j) {
    e += '<tr><td>' + esc(gtName(c)) + '</td><td class="inp">' + gtPct(H.raw[j]) + '</td><td class="inp">' + gtPct(H.est[j]) + '</td><td class="inp">' + gtPct(H.ci[j][0]) + '–' + gtPct(H.ci[j][1]) + '</td></tr>';
  });
  e += '</tbody></table></div>';
  e += '<p class="adv-sum">' + B('gt.br', [esc(gtName(g.rows[E.br])), gtFmt(E.rowVals[E.br]), gtFmt(E.blends[0].ev), H.N]) + '</p>';
  e += '<div class="table-wrap"><table class="pf-table"><thead><tr><th>' + B('gt.blend') + '</th><th>' + B('gt.blend-ev') + '</th><th>' + B('gt.blend-worst') + '</th></tr></thead><tbody>';
  E.blends.forEach(function (b) { e += '<tr><td class="inp">' + gtPct(b.lam) + '</td><td class="inp">' + gtFmt(b.ev) + '</td><td class="inp">' + gtFmt(b.worst) + '</td></tr>'; });
  e += '</tbody></table></div><p class="small muted">' + B('gt.blend-note') + '</p>';
  ex.innerHTML = e;
}
widgets['adv-games'].addEventListener('change', function (e) {
  var t = e.target;
  if (t.id === 'gt-preset') { if (t.value) gtLoad(t.value); renderGames(); return; }
  if (t.id === 'gt-m' || t.id === 'gt-n') { gtResize(+widgets['adv-games'].querySelector('#gt-m').value || 2, +widgets['adv-games'].querySelector('#gt-n').value || 2); renderGames(); return; }
  if (t.hasAttribute('data-gt-ri')) { adv.gt.R[+t.getAttribute('data-gt-ri')][+t.getAttribute('data-gt-rj')] = t.checked ? 1 : 0; adv.gt.preset = ''; advSave(); renderGames(); return; }
  if (t.classList.contains('gt-name')) { renderGames(); }
});
widgets['adv-games'].addEventListener('input', function (e) {
  var t = e.target, g = adv.gt;
  if (t.hasAttribute('data-gt-i')) { g.A[+t.getAttribute('data-gt-i')][+t.getAttribute('data-gt-j')] = t.value === '' ? 0 : +t.value; }
  else if (t.hasAttribute('data-gt-count')) { g.counts[+t.getAttribute('data-gt-count')] = t.value; }
  else if (t.hasAttribute('data-gt-row')) { g.rows[+t.getAttribute('data-gt-row')] = { en: t.value, pt: t.value }; }
  else if (t.hasAttribute('data-gt-col')) { g.cols[+t.getAttribute('data-gt-col')] = { en: t.value, pt: t.value }; }
  else return;
  if (!t.hasAttribute('data-gt-count')) g.preset = '';
  advSave(); gamesResults();
});
onShow['adv-games'] = renderGames;
onLang.push(function () { if (current === 'adv-games') renderGames(); });
