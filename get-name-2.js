const NUCLEUS = [
  'a',
  'e',
  'i',
  'o',
  'u',
  'ae',
  'ai',
  'ao',
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
  'ya',
  'ye',
  'yi',
  'yo',
  'yu',
];
const ONSET = [
  'b',
  'bh',
  'bhl',
  'bhr',
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
  'fh',
  'fhr',
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
  'm',
  'n',
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
  'd',
  'ds',
  'f',
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
  'ls',
  'm',
  'ms',
  'n',
  'ns',
  'p',
  'ps',
  'q',
  'r',
  'rs',
  's',
  'ss',
  't',
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
  switch ((Math.random() * 3) | 0) {
    case 0:
      return getOnset() + getNucleus() + getCoda();
    case 1:
      return getNucleus();
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
  console.log(result);
  return result.join('');
}

for (let i = 0; i < 10; i++) {
  console.log(getName(2));
}