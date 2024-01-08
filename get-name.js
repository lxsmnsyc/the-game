const VOWELS = 'aeiouy';
const CONSONANTS = 'bcdfghjklmnpqrstvwxz';

const ALPHABET = VOWELS + CONSONANTS;

const startingChars = {
  a: 'bcdefghijklmnopqrstuvwxyz',
  b: 'aehijloruwy',
  c: 'aehiloruwyz',
  d: 'aehijloruwyz',
  e: 'abcdfghijklmnopqrstuvwxyz',
  f: 'aehijloruwy',
  g: 'aehijlnoruwy',
  h: 'aeiouwy',
  i: 'abcdefghjklmnopqrstuvwxyz',
  j: 'aehiouwy',
  k: 'aehijlnoruwy',
  l: 'aehilouwy',
  m: 'aehijlnoruwy',
  n: 'aehijouwy',
  o: 'abcdefghijklmnpqrstuvwxyz',
  p: 'aehijlnorsuwy',
  q: 'aehiloruwy',
  r: 'aehiouwy',
  s: 'abcdefghiklmnoqrstuwyz',
  t: 'aehijlorsuwyz',
  u: 'abcdefghijklmnopqrstvwxyz',
  v: 'aehijloruwy',
  w: 'aehijloruy',
  x: 'aehiouy',
  y: 'abcdefghijklmnopqrstuvwxz',
  z: 'aehiouy'
};

const followedByVowel = {
  a: CONSONANTS,
  b: VOWELS + 'bhlrstz',
  c: VOWELS + 'chklrstz',
  d: VOWELS + 'dhlrstz',
  e: CONSONANTS,
  f: VOWELS + 'fhlrstz',
  g: VOWELS + 'ghlmnrsz',
  h: VOWELS + 'bcdfgjklmnpqrstwxz',
  i: CONSONANTS,
  j: VOWELS + 'rstz',
  k: VOWELS + 'hklrstz',
  l: VOWELS + CONSONANTS,
  m: VOWELS + 'bcdghkmlnprstz',
  n: VOWELS + 'cdghklpqrstxz',
  o: CONSONANTS,
  p: VOWELS + 'hpstz',
  q: VOWELS,
  r: VOWELS + CONSONANTS,
  s: VOWELS + CONSONANTS,
  t: VOWELS + 'hlrstz',
  u: CONSONANTS,
  v: VOWELS + 'hlrstz',
  w: VOWELS + CONSONANTS,
  x: VOWELS + 'hlrstxz',
  y: CONSONANTS + 'aeiou',
  z: VOWELS + 'hlrstz'
};

const followedByConsonant = {
  a: CONSONANTS + 'eiouy',
  b: VOWELS,
  c: VOWELS,
  d: VOWELS,
  e: CONSONANTS + 'aeiouy',
  f: VOWELS,
  g: VOWELS,
  h: VOWELS,
  i: CONSONANTS + 'aeou',
  j: VOWELS,
  k: VOWELS,
  l: VOWELS,
  m: VOWELS,
  n: VOWELS,
  o: CONSONANTS + 'aeiouy',
  p: VOWELS,
  q: VOWELS,
  r: VOWELS,
  s: VOWELS,
  t: VOWELS,
  u: CONSONANTS + 'aeioy',
  v: VOWELS,
  w: VOWELS,
  x: VOWELS,
  y: CONSONANTS + 'aeiou',
  z: VOWELS
};

function getName(steps) {
  let result = ALPHABET[(Math.random() * ALPHABET.length) | 0];
  let isFollowedByVowel = VOWELS.includes(result);
  for (let i = 0, picked; i < steps - 1; i++) {
    if (i === 0) {
      const chars = startingChars[result];
      picked = chars[(Math.random() * chars.length) | 0];
    } else {
      const prev = picked;
      const chars = isFollowedByVowel
        ? followedByVowel[picked]
        : followedByConsonant[picked];
      picked = chars[(Math.random() * chars.length) | 0];
      isFollowedByVowel = VOWELS.includes(prev);
    }
    result += picked;
  }
  return result;
}

for (let i = 0; i < 10; i++) {
  console.log(getName(12))
}