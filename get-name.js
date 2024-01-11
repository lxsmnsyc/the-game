const VOWELS = 'aeiouy';
const CONSONANTS = 'bcdfghjklmnpqrstvwxz';

const ALPHABET = VOWELS + CONSONANTS;

const startingChars = {
  a: 'bcdefghijklmnopqrstuvwxyz',
  b: 'aehijloruwy',
  c: 'aehiloruxyz',
  d: 'aehijloruwyz',
  e: 'abcdfghijklmnopqrstuvwxyz',
  f: 'aehiloruwy',
  g: 'aehilnoruwy',
  h: 'aeiouwy',
  i: 'abcdefghjklmnopqrstuvwxyz',
  j: 'aehiouwy',
  k: 'aehilnoruwy',
  l: 'aehilouwy',
  m: 'aehijlnouwy',
  n: 'aehiouwy',
  o: 'abcdefghijklmnpqrstuvwxyz',
  p: 'aehilnorsuwy',
  q: 'aehiloruwy',
  r: 'aehiouwy',
  s: 'abcdefghiklmnoqrstuwyz',
  t: 'aehilorsuwyz',
  u: 'abcdefghijklmnopqrstvwxyz',
  v: 'aehiloruwy',
  w: 'aehiloruy',
  x: 'aehiouy',
  y: 'abcdefghijklmnopqrstuvwxz',
  z: 'aehiouy'
};

const followedByVowel = {
  a: CONSONANTS,
  b: VOWELS + 'bhstz',
  c: VOWELS + 'chkstz',
  d: VOWELS + 'dhlstz',
  e: CONSONANTS,
  f: VOWELS + 'fhstz',
  g: VOWELS + 'ghmnrsz',
  h: VOWELS + 'bcdfgjklmnpqrstwxz',
  i: CONSONANTS,
  j: VOWELS + 'stz',
  k: VOWELS + 'hkstz',
  l: VOWELS + CONSONANTS,
  m: VOWELS + 'bcdghkmnpstz',
  n: VOWELS + 'cdghkpqstxz',
  o: CONSONANTS,
  p: VOWELS + 'hpstz',
  q: VOWELS,
  r: VOWELS + 'bcdfghjklmnprstvxz',
  s: VOWELS + CONSONANTS,
  t: VOWELS + 'hlstz',
  u: CONSONANTS,
  v: VOWELS + 'hstz',
  w: VOWELS + CONSONANTS,
  x: VOWELS + 'hltxz',
  y: CONSONANTS + 'aeiou',
  z: VOWELS + 'hstz'
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
  console.log(getName(5 + ((5 * Math.random()) | 0)))
}