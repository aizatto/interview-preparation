/**
 * https://www.youtube.com/watch?v=10WnvBk9sZc
 */

const NOT_FOUND = -1;

export function longestCommonSubsequence(s1, s2) {
  const s1length = s1.length;
  const s2length = s2.length;

  let longest = '';

  for (let s1pos = 0; s1pos < s1length && s1pos < s2length; s1pos++) {
    let s1char = s1[s1pos];
    let s2pos = s2.indexOf(s1char);
    if (s2pos === NOT_FOUND) {
      continue;
    }

    let tmp = s1char;

    for (let currentpos = s1pos + 1; currentpos < s1length && currentpos < s2length; currentpos++) {
      s1char = s1[currentpos];
      const s2posTMP = s2.indexOf(s1char, s2pos + 1);
      if (s2posTMP !== NOT_FOUND) {
        s2pos = s2posTMP;
        tmp += s1char;
      }
    }

    if (tmp.length > longest.length) {
      longest = tmp;
    }
  }

  return longest;
}
