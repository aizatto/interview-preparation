/*
 * https://www.interviewbit.com/problems/implement-strstr/
 * https://leetcode.com/problems/implement-strstr/
 * https://www.techiedelight.com/implement-strstr-function-java/
 */

export function strstr(haystack: string, needle: string): number {
  if (haystack.length === 0 ||
      needle.length === 0) {
    return -1;
  }

  for (let haystackPos = 0; haystackPos < (haystack.length - needle.length + 1); haystackPos += 1) {
    const haystackChar = haystack[haystackPos];

    if (haystackChar !== needle[0]) {
      continue;
    }

    let needlePos = 0;
    for (; needlePos < needle.length; needlePos +=1) {
      if (needle[needlePos] !== haystack[haystackPos + needlePos]) {
        break;
      }
    }

    if (needlePos === needle.length) {
      return haystackPos;
    }
  }
  return -1;
}
