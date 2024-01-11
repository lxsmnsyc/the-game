const NUCLEUS = [
  'a',
  'e',
  'i',
  'o',
  'u',
  'ae',
  'ai',
  'au',
  'ea',
  'ei',
  'ee',
  'eo',
  'eu',
  'ia',
  'ie',
  'io',
  'iu',
  'oa',
  'oe',
  'oi',
  'oo',
  'ou',
  'ua',
  'ue',
  'ui',
  'uo',
];
const ONSET = [
  'b',
  'bl',
  'br',
  'c',
  'ch',
  'chr',
  'cl',
  'cr',
  'cz',
  'd',
  'dh',
  'dr',
  'f',
  'fl',
  'fr',
  'g',
  'gh',
  'gl',
  'gr',
  'h',
  'j',
  'jh',
  'k',
  'kh',
  'khr',
  'kl',
  'kr',
  'l',
  'lh',
  'm',
  'n',
  'p',
  'ph',
  'phl',
  'phr',
  'pl',
  'pr',
  'ps',
  'q',
  'r',
  's',
  'sh',
  'shr',
  't',
  'tr',
  'th',
  'thr',
  'v',
  'vh',
  'vl',
  'vr',
  'w',
  'wr',
  'wh',
  'x',
  'y',
  'z',
  'zh',
];
const CODA = [
  'b',
  'bs',
  'c',
  'ch',
  'ck',
  'cs',
  'ct',
  'd',
  'ds',
  'f',
  'ff',
  'ft',
  'fs',
  'g',
  'gh',
  'gs',
  'gn',
  'h',
  'hs',
  'j',
  'k',
  'ks',
  'l',
  'lb',
  'lc',
  'lch',
  'ld',
  'lf',
  'lg',
  'lj',
  'lk',
  'lm',
  'ln',
  'lp',
  'ls',
  'lt',
  'm',
  'ms',
  'n',
  'ns',
  'p',
  'ph',
  'pp',
  'ps',
  'r',
  'rb',
  'rc',
  'rch',
  'rd',
  'rf',
  'rg',
  'rk',
  'rl',
  'rm',
  'rn',
  'rp',
  'rs',
  'rsh',
  'rt',
  'rth',
  's',
  'sh',
  'sk',
  'sm',
  'sp',
  'ss',
  'st',
  't',
  'tch',
  'th',
  'tt',
  'ts',
  'v',
  'vs',
  'w',
  'ws',
  'x',
  'y',
  'z',
];

function getNucleus() {
  return NUCLEUS[((NUCLEUS.length - 1) * Math.random()) | 0];
}

function getCoda() {
  return CODA[((CODA.length - 1) * Math.random()) | 0];
}

function getOnset() {
  return ONSET[((ONSET.length - 1) * Math.random()) | 0];
}

function getSyllable() {
  switch ((Math.random() * 2) | 0) {
    case 0:
      return getOnset() + getNucleus() + getCoda();
    case 1:
      // return getNucleus();
      return getOnset() + getNucleus();
    case 2:
      return getNucleus() + getCoda();
    case 3:
      return getOnset() + getNucleus();
  }
}

function getName(syllables) {
  let result = [];
  while (result.length < syllables) {
    result.push(getSyllable());
  }
  console.log(result, result.join(''));
  return result.join('');
}

for (let i = 0; i < 10; i++) {
  getName(2);
}