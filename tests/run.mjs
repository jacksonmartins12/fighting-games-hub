// Test suite: formulas, data integrity and the main features, run in a real browser against the built site.
//   npm install            (once; installs Playwright)
//   npx playwright install chromium
//   python3 build.py && node tests/run.mjs
// Starts its own static server on a free port. Exits with 1 if any test fails.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.webmanifest': 'application/manifest+json' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  const f = path.join(ROOT, p);
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const BASE = 'http://127.0.0.1:' + server.address().port + '/';
const site = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/site.json'), 'utf8'));

const browser = await chromium.launch();
const results = [];
const pageErrors = [];
async function newPage(width = 1280) {
  const p = await browser.newPage({ viewport: { width, height: 900 } });
  // Fonts come from Google Fonts; block them so the tests don't depend on the network.
  await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  p.on('pageerror', e => pageErrors.push(e.message));
  p.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) pageErrors.push(m.text()); });
  return p;
}
async function test(name, fn) {
  const page = await newPage();
  try { await fn(page); results.push([name, true]); console.log('ok   ', name); }
  catch (e) { results.push([name, false, e.message]); console.log('FAIL ', name, '\n      ', e.message); }
  finally { await page.close(); }
}
function eq(a, b, what) { if (JSON.stringify(a) !== JSON.stringify(b)) throw new Error(what + ': expected ' + JSON.stringify(b) + ', got ' + JSON.stringify(a)); }
function ok(v, what) { if (!v) throw new Error(what); }
async function open(page, hash = '') { await page.goto(BASE + hash); await page.waitForFunction(() => typeof setLang === 'function'); }

// ---------- formulas ----------
await test('meaty: when to press and which active frame hits (okiMeaty)', async page => {
  await open(page);
  const r = await page.evaluate(() => ({
    akuma: okiMeaty(28, 19, 8, 3),        // forward throw KD +28, dash 19, Crouch MK 8f/3 active: no wait, 3rd active frame
    ryu: okiMeaty(40, 19, 8, 3),          // Crouch HK KD +40, dash, Crouch MK: wait 12, hits on 3rd active frame
    late: okiMeaty(20, 19, 8, 3),         // too little advantage left after the dash: impossible
    stand: okiMeaty(40, 0, 4, 3),         // Stand LP with no movement: press on frame 36 (active 39-41), 3rd active frame meets frame 41
  }));
  eq(r.akuma, { delay: 0, k: 3 }, 'Akuma throw > dash > 2MK');
  eq(r.ryu, { delay: 12, k: 3 }, 'Ryu 2HK > dash > 2MK');
  eq(r.late, null, 'impossible meaty');
  eq(r.stand, { delay: 35, k: 3 }, 'Stand LP from KD +40');
});
await test('safe meaty: stuck + 2 <= reversal startup, dood.gg frame reported as doubt (safeMeaty)', async page => {
  await open(page);
  const r = await page.evaluate(() => [safeMeaty(7, 10), safeMeaty(7, 9), safeMeaty(7, 8), safeMeaty(7, 6), safeMeaty(4, 6), safeMeaty(5, 6)]);
  eq(r, ['safe', 'safe', 'doubt', 'unsafe', 'safe', 'doubt'], 'safe meaty states');
});
await test('safe jump: knockdown needed = pre-jump + air + 5 - reversal startup (safeJumpNeed)', async page => {
  await open(page);
  const r = await page.evaluate(() => [safeJumpNeed('4+38+3'), safeJumpNeed('4+38+3', 6), safeJumpNeed('5+38+3'), safeJumpNeed('5+39+3'), safeJumpNeed('4+40+3'), safeJumpNeed('4+42+3'), safeJumpNeed('4+68+3'), safeJumpNeed('4+38+3 / 6+40+3'), safeJumpNeed('')]);
  // standard jump: +42 vs 5f (tested), +41 vs 6f (tested); Zangief +43, Lily +44, A.K.I. +44, Chun-Li +46, Dhalsim +72
  eq(r, ['+42', '+41', '+43', '+44', '+44', '+46', '+72', '+42', null], 'safe jump knockdowns');
});
await test('punish: startup must fit the window; OD goes to the meter column (bestPunishes)', async page => {
  await open(page);
  const r = await page.evaluate(() => {
    const mine = [
      { name: 'Jab', num: '5LP', type: 'n', su: 4, dmg: 300, xx: 'ch sp' },
      { name: 'Slow normal', num: '5HP', type: 'n', su: 8, dmg: 800, xx: 'sp' },
      { name: 'Uncancelable', num: '5HK', type: 'n', su: 5, dmg: 900, xx: '' },
      { name: 'Light DP', num: '623LP', type: 's', su: 5, dmg: 1000, xx: '' },
      { name: 'OD DP', num: '623PP', type: 's', su: 6, dmg: 1400, xx: '' },
      { name: 'Super', num: '236236P', type: 'u', su: 7, dmg: 2500, xx: '' }];
    const n = (b) => { const x = bestPunishes(mine, b); return [x.normal && x.normal.name, x.special && x.special.name, x.meter && x.meter.name]; };
    return { m6: n(-6), m4: n(-4), m7: n(-7), m3: n(-3) };
  });
  eq(r.m6, ['Jab', 'Light DP', 'OD DP'], '-6');            // cancelable normals are preferred; 8f normal and 7f super don't fit
  eq(r.m4, ['Jab', null, null], '-4');
  eq(r.m7, ['Jab', 'Light DP', 'Super'], '-7');             // most damaging meter option that fits
  eq(r.m3, [null, null, null], '-3');
});
await test('frame data parsing (suEff, safestBlock, dmgVal, firstInt)', async page => {
  await open(page);
  const r = await page.evaluate(() => [suEff('8+15'), suEff('5(9~10)'), suEff(7), suEff('20 (62~96)') /* hits at 62~96: the slow end, so it never counts as a fast punisher */, safestBlock('-12(-8)'), safestBlock(-4), dmgVal('300x3'), dmgVal('1000(1200)'), firstInt('KD +40')]);
  eq(r, [23, 10, 7, 96, -8, -4, 900, 1000, 40], 'parsers');
});
await test('pressure: gap groups against the fastest normal (gapGroup)', async page => {
  await open(page);
  const r = await page.evaluate(() => [gapGroup(0, 4), gapGroup(-2, 4), gapGroup(1, 4), gapGroup(3, 4), gapGroup(4, 4), gapGroup(5, 4), gapGroup(2, null)]);
  eq(r, ['true', 'true', 'trap', 'trap', 'trade', 'hole', 'trap'], 'gap groups');
});
await test('decisions: breakeven = loss / (gain + loss) (breakeven)', async page => {
  await open(page);
  const r = await page.evaluate(() => { const a = breakeven(2000, 1000, 0.5), b = breakeven(1600, 3000, 0.65); return [Math.round(a.need * 1000) / 10, a.ev, Math.round(b.need * 1000) / 10, Math.round(b.ev)]; });
  eq(r, [33.3, 500, 65.2, -10], 'breakeven');
});
await test('matchup: the side with the edge (muBetter)', async page => {
  await open(page);
  const r = await page.evaluate(() => [muBetter('11000', '10000', 1), muBetter('22', '19', -1), muBetter('19', '19', -1), muBetter('OD x', 'y', 1), muBetter('+43', '+46', -1)]);
  eq(r, ['a', 'b', '', '', 'a'], 'edges');
});
await test('damage scaling table matches the documented base sequence in both languages', async page => {
  await open(page, '#mechanics');
  const r = await page.evaluate(() => [...document.querySelectorAll('#damage-scaling, #damage-scaling-pt')].map(h => {
    let e = h.nextElementSibling, t = null;
    while (e && !t) { t = e.matches('table') ? e : e.querySelector('table'); e = e.nextElementSibling; }
    return t ? [...t.querySelectorAll('tr')].pop().innerText.match(/\d+%/g) : null; }));
  ok(r.length === 2, 'scaling section in both languages');
  for (const row of r) eq(row, ['100%', '100%', '80%', '70%', '60%', '50%', '40%', '30%', '20%', '10%'], 'scaling row');
});

await test('regression: multi-hit damage totals (dmgVal) on the real data rows', async page => {
  await open(page);
  const r = await page.evaluate(async () => {
    const pick = async (slug, name) => { await needChar(slug); const m = FRAMES[slug].m.find(x => x[0] === name); return m ? dmgVal(m[9]) : 'missing'; };
    return [await pick('ken', 'HP Shoryuken'), await pick('jamie', 'Stand HP'), await pick('sagat', 'Tiger Monolith'), await pick('yasmine', 'HK Lipad ng Agila'),
      await pick('sagat', 'HP Tiger Uppercut (hold)'), await pick('arjun', 'OD Divine Pillar'),
      dmgVal('1400 (800*300x2)'), dmgVal('810 (90x2*630)'), dmgVal('200*600'), dmgVal('1300 (800*60*30x3*350)'), dmgVal('300x3'), dmgVal('2500\n(300*200x6*1000)'), dmgVal(null)];
  });
  // Ken 1400 = 800+300x2, Jamie 810 = 90x2+630, Sagat 800 = 200+600, Yasmine 1300; Tiger Uppercut held 1800+1000; OD Divine Pillar 800+800
  eq(r, [1400, 810, 800, 1300, 2800, 1600, 1400, 810, 800, 1300, 900, 2500, 0], 'damage totals');
});
await test('regression: Ed Stand HP 10(4~8) counts as 10 frames for punishes (suEff)', async page => {
  await open(page);
  const r = await page.evaluate(async () => { await needChar('ed'); const m = FRAMES.ed.m.find(x => x[0] === 'Stand HP'); const p = punishers('ed').find(x => x.name === 'Stand HP');
    return [m[4], suEff(m[4]), p ? p.su : 'not a punisher', suEff('10(4~8)'), suEff('5(9~10)')]; });
  eq(r, ['10(4~8)', 10, 10, 10, 10], 'Ed Stand HP startup');
});
await test('regression: Ryu counterplay quotes the Shoryuken block values of the table (EN and PT)', async page => {
  await open(page);
  const r = await page.evaluate(async () => {
    await needChar('ryu'); const tab = n => String(FRAMES.ryu.m.find(x => x[0] === n)[8]);
    const want = ['LP Shoryuken', 'MP Shoryuken', 'HP Shoryuken', 'OD Shoryuken'].map(tab).join(' ');
    const g = CHARS.ryu.counterplay, got = l => { const m = g[l].match(/-(\d+)\/-(\d+)\/-(\d+)[^-]*-(\d+)/); return m ? m.slice(1).map(x => '-' + x).join(' ') : null; };
    return { want, en: got('en'), pt: got('pt'), sa3: [/-52 \(-54/.test(g.en), /-52 \(-54/.test(g.pt), tab('Shin Shoryuken')] };
  });
  eq(r.en, r.want, 'EN'); eq(r.pt, r.want, 'PT'); eq(r.want, '-23 -32 -36 -40', 'table');   // HP Shoryuken -36 per Capcom's official page
  eq(r.sa3, [true, true, '-52(-54)'], 'Shin Shoryuken quoted as in the table (Capcom -52)');
});
await test('regression: data notes of Akuma, Dhalsim, JP, Mai, Yasmine, Lily and Arjun match their tables', async page => {
  await open(page);
  const r = await page.evaluate(async () => {
    const named = { akuma: ['Ashura Senku'], dhalsim: ['Yoga Blast', 'Yoga Teleport'], jp: ['Departure', 'Torbalan', 'Embrace'], mai: ['Kachousen', 'Ryuuenbu', 'Shinobi Bachi'], yasmine: ['Lipad ng Agila', 'Pangil sa Likuran', 'Mukha ng Langit'], lily: ['Stand LK'] };
    const bad = [];
    for (const slug of Object.keys(named)) {
      await needChar(slug); const note = CHARS[slug].data_note;
      named[slug].forEach(n => { if (!FRAMES[slug].m.some(m => m[0].includes(n))) bad.push(slug + ': table lacks ' + n); });
      ['en', 'pt'].forEach(l => {
        if (/left out|no numbers are given|is not given|left blank|ficou de fora|não há números para eles|não aparece aqui|fica em branco/i.test(note[l])) bad.push(slug + ' ' + l + ': note still says data is missing');
        if (!/a8101eb/.test(note[l])) bad.push(slug + ' ' + l + ': note does not name the table source');
      });
    }
    const lk = CHARS.lily.key_normals.find(k => k.move === '5LK'), row = FRAMES.lily.m.find(m => m[0] === 'Stand LK');
    if (lk.on_hit !== row[7]) bad.push('lily 5LK on hit: guide ' + lk.on_hit + ', table ' + row[7]);
    const F = HUB_DATA.sources.flags;
    if ((F.lily['Stand LK'] || {}).status !== 'official' || row[7] !== 5) bad.push('lily 5LK: not marked as confirmed by Capcom at +5');
    if ((F.arjun['(best reversal)'] || {}).status !== 'official') bad.push('arjun best reversal: not marked as confirmed by Capcom');
    ['en', 'pt'].forEach(l => { if (/so check it in training mode|então confira no training mode/i.test(CHARS.lily.data_note[l])) bad.push('lily ' + l + ': note still asks to test 5LK'); });
    await needChar('arjun');   // checked against Capcom on 2026-11-11: the guide must not say FAT is its only source
    ['en', 'pt'].forEach(l => { if (/All frame data and combos come from FAT|Toda a frame data e os combos vêm/i.test(CHARS.arjun.data_note[l]) || !/Capcom/.test(CHARS.arjun.data_note[l])) bad.push('arjun ' + l + ': note still says FAT is the only source'); });
    if (/uses FAT data only|usa só os dados do FAT/.test(document.body.innerHTML)) bad.push('roster: Arjun still described as FAT only');
    const AN = { '5LP': 'Stand LP', '5MP': 'Stand MP', '2HP': 'Crouch HP', '2HK': 'Crouch HK' };
    CHARS.arjun.key_normals.forEach(k => { const m = FRAMES.arjun.m.find(x => x[0] === AN[k.move]); if (!m || m[4] !== k.startup || m[8] !== k.on_block) bad.push('arjun ' + k.move + ': guide and table differ'); });
    return bad;
  });
  eq(r, [], 'data note contradictions');
});

// ---------- data ----------
await test('data: all 32 fighters load with 16-field moves, stats and source flags that exist', async page => {
  await open(page);
  const r = await page.evaluate(async () => {
    const out = { n: 0, bad: [] };
    for (const slug of Object.keys(ROSTER)) {
      await needChar(slug); out.n++;
      const f = FRAMES[slug];
      if (!f || !f.m.length) { out.bad.push(slug + ': no moves'); continue; }
      f.m.forEach((m, i) => { if (m.length !== 16) out.bad.push(slug + ' row ' + i + ': ' + m.length + ' fields'); if (!'nsutd'.includes(m[3])) out.bad.push(slug + ' ' + m[0] + ': type ' + m[3]); });
      ['fastestNormal', 'bestReversal', 'fDash', 'bDash', 'health', 'jump'].forEach(k => { if (!(f.s || {})[k]) out.bad.push(slug + ': no ' + k); });
      const fl = (HUB_DATA.sources.flags || {})[slug] || {};
      Object.keys(fl).forEach(name => { if (name[0] !== '(' && !f.m.some(m => m[0] === name)) out.bad.push(slug + ': flag for missing move ' + name); });
    }
    return out;
  });
  eq(r.n, 32, 'fighters');
  eq(r.bad, [], 'data problems');
});
await test('data: frame table shows range, scaling and Capcom-confirmed marks on Ryu', async page => {
  await open(page, '#roster');
  await page.evaluate(() => document.querySelector('[data-char="ryu"]').click());
  await page.waitForFunction(() => document.querySelector('.ft-table tbody tr'));
  const r = await page.evaluate(() => ({ heads: document.querySelectorAll('.ft-table th').length, flagged: document.querySelectorAll('.ft-table tr.ft-flagged').length, official: document.querySelectorAll('.ft-table .ft-flag-official:not(.ft-capcom-row)').length,
    capcom: document.querySelectorAll('.ft-table .ft-capcom-row').length, want: HUB_DATA.sources.capcomRows.ryu.length }));
  eq(r.capcom, r.want, 'rows taken from Capcom are tagged'); delete r.capcom; delete r.want;
  eq(r, { heads: 11, flagged: 0, official: 9 }, 'frame table');
});

await test('data: moves only Capcom lists are in the hub, tagged, and states never count as punishers', async page => {
  await open(page);
  const r = await page.evaluate(async () => {
    const S = HUB_DATA.sources.capcomRows, out = { total: 0, missing: [], dupes: [], statePunisher: [] };
    for (const slug of Object.keys(S)) {
      await needChar(slug);
      const m = FRAMES[slug].m, names = m.map(x => x[0]);
      S[slug].forEach(n => { out.total++; if (!names.includes(n)) out.missing.push(slug + ': ' + n); });
      names.forEach((n, i) => { if (names.indexOf(n) !== i) out.dupes.push(slug + ': ' + n); });
      const cond = {}; m.forEach(x => { cond[x[0]] = x[11]; }); punishers(slug).forEach(p => { if (cond[p.name]) out.statePunisher.push(slug + ': ' + p.name); });
    }
    const ryu = FRAMES.ryu.m.find(x => x[0] === 'Hadoken (Denjin Charge)'), gief = FRAMES.zangief.m.find(x => x[0] === 'Crouch LP (rapid cancel version)');
    out.ryu = ryu && [ryu[11], S.ryu.includes(ryu[0])]; out.gief = gief && gief[11];
    return out;
  });
  eq(r.missing, [], 'every listed row exists'); eq(r.dupes, [], 'no duplicate names');
  eq(r.statePunisher, [], 'no state-only move offered as a punisher');
  eq(r.ryu, ['state', true], 'Ryu Denjin Hadoken'); eq(r.gief, 'state', 'Zangief rapid-cancel 2LP');
  if (r.total < 300) throw new Error('only ' + r.total + ' Capcom rows');
});

await test('regression: values that differed from Capcom follow Capcom and are logged', async page => {
  await open(page);
  const r = await page.evaluate(async () => {
    const v = async (slug, name, i) => { await needChar(slug); return FRAMES[slug].m.find(m => m[0] === name)[i]; };
    const log = (HUB_DATA.patches || []).length;
    return [await v('ryu', 'HP Shoryuken', 8), await v('akuma', 'OD Gou Shoryuken', 8), await v('juri', 'Kaisen Dankai Raku', 8), await v('rashid', 'OD Spinning Mixer', 8),
      await v('chun-li', 'Soaring Eagle Punches', 4), await v('alex', 'Sweep Combination 1', 6), await v('zangief', 'Tundra Storm', 4), log,
      await v('ryu', 'Shin Shoryuken', 8), await v('juri', 'Kaisen Dankai Raku (Critical Art)', 8), await v('yasmine', 'Pamumukadkad ng Sampaguita (Critical Art)', 8), await v('luke', 'Avenger > Impaler', 5)];
  });
  // two logged updates: the first comparison pass, then moves named differently and cells that list versions
  eq(r, [-36, -39, -31, -42, 6, 43, 5, 2, '-52(-54)', -31, -45, 1], 'Capcom values');
});

// ---------- features ----------
await test('language: PT/EN switch changes text, html lang and is remembered', async page => {
  await open(page, '#fundamentals');
  await page.evaluate(() => setLang('pt', true));   // what the PT button does
  const pt = await page.evaluate(() => ({ lang: document.documentElement.lang, saved: localStorage.getItem('fgc-lang'), visible: getComputedStyle(document.querySelector('#fundamentals .l-pt')).display !== 'none' && getComputedStyle(document.querySelector('#fundamentals .l-en')).display === 'none' }));
  eq(pt, { lang: 'pt-BR', saved: '"pt"', visible: true }, 'portuguese');
  await page.reload(); await page.waitForFunction(() => typeof setLang === 'function');
  eq(await page.evaluate(() => document.documentElement.lang), 'pt-BR', 'remembered after reload');
  await page.evaluate(() => setLang('en'));
  eq(await page.evaluate(() => document.documentElement.lang), 'en', 'back to english');
});
await test('search: finds chapters and moves, and opens the result', async page => {
  await open(page);
  await page.evaluate(() => openSearch());
  await page.fill('#site-q', 'shoryuken');
  await page.waitForFunction(() => document.querySelectorAll('.search-res').length > 3, null, { timeout: 8000 });
  const n = await page.evaluate(() => document.querySelectorAll('.search-res').length);
  ok(n > 3, 'results for shoryuken: ' + n);
  await page.keyboard.press('Enter');
  await page.waitForFunction(() => !document.querySelector('.search-ov:not([hidden])') || location.hash.length > 1);
  ok(await page.evaluate(() => location.hash.length > 1), 'navigated to a result');
});
await test('matchup: link opens the pair, stats have 8 rows, swap swaps', async page => {
  await open(page, '#matchup/zangief/chun-li');
  await page.waitForFunction(() => document.querySelector('.mu-stats'));
  eq(await page.evaluate(() => document.querySelectorAll('.mu-stats tbody tr').length), 8, 'stat rows');
  eq(await page.evaluate(() => [...document.querySelectorAll('.mu-stats tbody tr')][6].innerText.match(/\+\d+/g)), ['+43', '+46'], 'safe jump row');
  await page.click('[data-mu-swap]');
  await page.waitForFunction(() => location.hash === '#matchup/chun-li/zangief');
});
await test('punish finder: every row shows the window and every punisher its math', async page => {
  await open(page, '#punish');
  await page.waitForFunction(() => document.querySelector('.pf-table tbody tr'));
  const r = await page.evaluate(() => [...document.querySelectorAll('.pf-table tbody tr')].map(tr => [tr.children[1].innerText.includes('≤'), [...tr.querySelectorAll('td b')].length]));
  ok(r.length > 10, 'rows: ' + r.length);
  ok(r.every(x => x[0]), 'every row shows the window');
});
await test('navigation: every chapter opens, pagers and internal links point at real targets', async page => {
  await open(page);
  const ids = site.chapters.map(c => c.id);
  for (const id of ids) {
    await page.evaluate(i => { location.hash = '#' + i; }, id);
    await page.waitForFunction(i => document.getElementById(i) && document.getElementById(i).classList.contains('active'), id, { timeout: 4000 });
  }
  const broken = await page.evaluate(() => [...document.querySelectorAll('a[href^="#"]')].map(a => a.getAttribute('href').slice(1)).filter(h => h && !h.includes('/') && !document.getElementById(h) && typeof resolveTarget === 'function' && !resolveTarget(h)));
  eq(broken, [], 'broken internal links');
});
await test('layout: no horizontal overflow on phone, tablet and desktop', async () => {
  const bad = [];
  for (const w of [390, 768, 1280]) {
    const page = await newPage(w);
    for (const h of ['', '#fundamentals', '#punish', '#matchup', '#adv-oki', '#adv-pressure', '#roster', '#glossary']) {
      await page.goto(BASE + h); await page.waitForTimeout(300);
      const sw = await page.evaluate(() => document.documentElement.scrollWidth);
      if (sw > w) bad.push(w + h + ': ' + sw);
    }
    await page.close();
  }
  eq(bad, [], 'overflow');
});

await browser.close(); server.close();
if (pageErrors.length) { results.push(['no JavaScript errors', false, pageErrors.slice(0, 5).join(' | ')]); console.log('FAIL  no JavaScript errors\n      ', pageErrors.slice(0, 5).join('\n       ')); }
else { results.push(['no JavaScript errors', true]); console.log('ok    no JavaScript errors'); }
const failed = results.filter(r => !r[1]);
console.log('\n' + (results.length - failed.length) + ' passed, ' + failed.length + ' failed');
process.exit(failed.length ? 1 : 0);
