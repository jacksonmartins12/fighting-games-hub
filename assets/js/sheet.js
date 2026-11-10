'use strict';
// ---------- pocket sheet (PNG) ----------
var SHEET = { W: 1080, pad: 64, ink: '#17181f', soft: '#565968', paper: '#f4f5f8', rule: '#d5d8e1', ok: '#2a7548', bad: '#b3261e',
  arch: { shoto: '#c22a1f', rushdown: '#b4520f', zoner: '#33408f', grappler: '#2c6a47', midrange: '#17697d', special: '#7a3a8a' } };
var FONT_D = "'Dela Gothic One', 'Arial Black', Impact, sans-serif", FONT_B = "'Zen Kaku Gothic New', 'Segoe UI', system-ui, sans-serif", FONT_M = "'IBM Plex Mono', Menlo, Consolas, monospace";
function loadImg(src) { return new Promise(function (res) { var i = new Image(); i.onload = function () { res(i); }; i.onerror = function () { res(null); }; i.src = src; }); }
function wrap(ctx, text, maxW) {
  var words = String(text || '').split(/\s+/), lines = [], line = '';
  words.forEach(function (w) { var t = line ? line + ' ' + w : w; if (ctx.measureText(t).width > maxW && line) { lines.push(line); line = w; } else line = t; });
  if (line) lines.push(line); return lines;
}
function T(o) { return o ? (o[lang] || o.en || '') : ''; }
function sheetLayout(ctx, c, portrait, draw) {
  var W = SHEET.W, P = SHEET.pad, y = 0, ac = SHEET.arch[c.archetype] || SHEET.ink, inner = W - 2 * P;
  function text(str, x, yy, font, color, align) { if (!draw) return; ctx.font = font; ctx.fillStyle = color; ctx.textAlign = align || 'left'; ctx.fillText(str, x, yy); }
  function para(str, font, color, lh, maxLines, x, w) {
    ctx.font = font; var ls = wrap(ctx, str, w || inner);
    if (maxLines && ls.length > maxLines) { ls = ls.slice(0, maxLines); ls[maxLines - 1] = ls[maxLines - 1].replace(/[\s,.;:]*\S*$/, '') + '…'; }
    ls.forEach(function (l) { y += lh; text(l, x || P, y, font, color); }); return ls.length;
  }
  function heading(str) {
    y += 84; if (draw) { ctx.fillStyle = ac; ctx.fillRect(P, y - 26, 14, 14); }
    text(str.toUpperCase(), P + 26, y - 12, '500 26px ' + FONT_M, SHEET.ink); y += 6;
    if (draw) { ctx.fillStyle = SHEET.ink; ctx.fillRect(P, y, inner, 3); } y += 6;
  }
  // header band
  var HB = 330;
  if (draw) { ctx.fillStyle = SHEET.paper; ctx.fillRect(0, 0, W, 99999); ctx.fillStyle = SHEET.ink; ctx.fillRect(0, 0, W, HB); ctx.fillStyle = ac; ctx.fillRect(0, HB, W, 12); }
  if (draw && portrait) { ctx.drawImage(portrait, P, 45, 240, 240); ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 4; ctx.strokeRect(P, 45, 240, 240); }
  var hx = P + 240 + 40;
  text(c.name, hx, 135, '400 76px ' + FONT_D, '#ffffff');
  text((tr('arch.' + c.archetype) + ' · ' + T(c.release)).toUpperCase(), hx, 190, '500 26px ' + FONT_M, '#c9ccd8');
  var dots = ''; for (var i = 1; i <= 5; i++) dots += i <= c.difficulty ? '◆' : '◇';
  text(dots + '  ' + tr('diff.' + c.difficulty), hx, 240, '500 28px ' + FONT_M, '#ffffff');
  text(tr('sheet.pocket-sheet'), hx, 285, '400 24px ' + FONT_B, '#9aa0b4');
  y = HB + 12 + 20;
  // gameplan summary
  para(T(c.summary), '400 30px ' + FONT_B, SHEET.ink, 44, 5);
  // key moves
  heading(tr('roster.key-moves'));
  (c.key_moves || []).slice(0, 7).forEach(function (m) {
    y += 46; text(m.name, P, y, '700 30px ' + FONT_B, SHEET.ink);
    var inp = m.input + '   ' + m.classic;
    ctx.font = '700 30px ' + FONT_B; var nw = ctx.measureText(m.name).width;
    ctx.font = '500 28px ' + FONT_M; var iw = ctx.measureText(inp).width;
    if (nw + iw + 30 > inner) { y += 38; text(inp, P, y, '500 28px ' + FONT_M, ac); }
    else text(inp, W - P, y, '500 28px ' + FONT_M, ac, 'right');
    para(T(m.role), '400 25px ' + FONT_B, SHEET.soft, 34, 2);
  });
  // key normals
  heading(tr('sheet.key-normals'));
  y += 40;
  var cols = [P, P + 300, P + 520, P + 720];
  [tr('roster.normal'), 'Startup', tr('widgets.on-block'), tr('widgets.on-hit')].forEach(function (h, i) { text(h.toUpperCase(), cols[i], y, '500 22px ' + FONT_M, SHEET.soft); });
  function adv(v) { if (v == null || v === '') return ['—', SHEET.soft]; if (typeof v === 'string') return [v, SHEET.ink]; return [(v > 0 ? '+' : (v < 0 ? '−' : '')) + Math.abs(v), v > 0 ? SHEET.ok : (v < 0 ? SHEET.bad : SHEET.ink)]; }
  (c.key_normals || []).forEach(function (n) {
    y += 46; ctx.font = '500 28px ' + FONT_M;
    var lab = n.move + '  (' + n.classic + ')';
    if (ctx.measureText(lab).width > cols[1] - cols[0] - 16) lab = n.move;
    text(lab, cols[0], y, '500 28px ' + FONT_M, SHEET.ink);
    text(n.startup == null ? '—' : n.startup + 'f', cols[1], y, '500 28px ' + FONT_M, SHEET.ink);
    var b = adv(n.on_block), h = adv(n.on_hit);
    text(b[0], cols[2], y, '700 28px ' + FONT_M, b[1]); text(h[0], cols[3], y, '700 28px ' + FONT_M, h[1]);
  });
  // anti-air
  heading('Anti-air'); para(T(c.anti_air), '400 27px ' + FONT_B, SHEET.ink, 38, 5);
  // combos
  heading(tr('roster.combos-to-start-with'));
  (c.combos || []).slice(0, 3).forEach(function (k) {
    y += 42; text(T(k.label), P, y, '700 27px ' + FONT_B, SHEET.ink);
    ctx.font = '500 27px ' + FONT_M; var rl = wrap(ctx, k.route, inner - 36);
    var bh = rl.length * 38 + 22;
    if (draw) { ctx.fillStyle = SHEET.ink; ctx.fillRect(P, y + 12, inner, bh); ctx.fillStyle = ac; ctx.fillRect(P, y + 12, 8, bh); }
    rl.forEach(function (l, i) { text(l, P + 28, y + 12 + 38 * (i + 1) - 4, '500 27px ' + FONT_M, '#ffffff'); });
    y += 12 + bh;
  });
  // counterplay
  heading(tr('roster.playing-against') + c.name); para(T(c.counterplay), '400 27px ' + FONT_B, SHEET.ink, 38, 6);
  // footer
  y += 80; if (draw) { ctx.fillStyle = SHEET.rule; ctx.fillRect(P, y - 40, inner, 2); }
  text('Fighting Games Resource Hub', P, y, '400 26px ' + FONT_D, SHEET.ink);
  y += 36; text(tr('sheet.data-checked-oct-2026-confirm-values'), P, y, '400 22px ' + FONT_B, SHEET.soft);
  return y + P;
}
function makeSheet(slug) {
  var c = CHARS[slug];
  var fontsReady = (document.fonts && document.fonts.load) ? Promise.all([
    document.fonts.load('400 40px "Dela Gothic One"'), document.fonts.load('400 20px "Zen Kaku Gothic New"'),
    document.fonts.load('700 20px "Zen Kaku Gothic New"'), document.fonts.load('500 20px "IBM Plex Mono"')]).catch(function () {}) : Promise.resolve();
  return Promise.all([fontsReady, loadImg('img/fighters/' + slug + '.webp')]).then(function (r) {
    var portrait = r[1], cv = document.createElement('canvas'), ctx = cv.getContext('2d');
    cv.width = SHEET.W; cv.height = 4000;
    var H = Math.max(1920, Math.ceil(sheetLayout(ctx, c, portrait, false)));
    cv.height = H; sheetLayout(ctx, c, portrait, true);
    return new Promise(function (res) { cv.toBlob(function (b) { res({ blob: b, url: cv.toDataURL('image/png') }); }, 'image/png'); });
  });
}
function showSheetPreview(url, name) {
  var ov = el('<div class="sheet-ov" role="dialog" aria-modal="true" aria-label="' + esc(name) + '"><div class="sheet-box"><p class="small">' +
    B('sheet.saving-files-isn-t-available-here') +
    '</p><img alt="' + esc(name) + '"><p><button type="button" class="btn ghost" data-sheet-close>' + B('ui.close') + '</button></p></div></div>');
  ov.querySelector('img').src = url;
  document.body.appendChild(ov);
  ov.addEventListener('click', function (e) { if (e.target === ov || e.target.closest('[data-sheet-close]')) ov.remove(); });
}
document.addEventListener('click', function (e) {
  var b = e.target.closest('[data-sheet]'); if (!b) return;
  var slug = b.getAttribute('data-sheet'), msg = b.parentNode.querySelector('.sheet-msg'), c = CHARS[slug];
  b.disabled = true; msg.textContent = tr('sheet.drawing-the-sheet');
  var fname = slug + (lang === 'pt' ? '-ficha-de-bolso.png' : '-pocket-sheet.png');
  makeSheet(slug).then(function (out) {
    var dl = window.claude && typeof window.claude.use === 'function' ? window.claude.use('downloads') : Promise.resolve(null);
    return dl.then(function (d) {
      if (!d) { msg.textContent = ''; showSheetPreview(out.url, c.name); return; }
      msg.textContent = tr('sheet.confirm-the-download-in-the-prompt');
      return d.save({ filename: fname, data: out.blob }).then(function () {
        msg.textContent = tr('sheet.saved');
      }, function (err) {
        var code = err && err.code;
        if (code === 'declined') msg.textContent = tr('sheet.download-canceled');
        else if (code === 'rate_limited') msg.textContent = tr('sheet.a-download-prompt-is-already-open');
        else { msg.textContent = ''; showSheetPreview(out.url, c.name); }
      });
    });
  }).catch(function () { msg.textContent = tr('sheet.couldn-t-draw-the-sheet-try'); })
    .then(function () { b.disabled = false; });
});
