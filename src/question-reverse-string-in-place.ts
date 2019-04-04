/**
 * JavaScript can't do in place because strings are immutable.
 *
 * This is a close representation using substrings.
 *
 * https://www.slideshare.net/slavimarinov/a-googler-the-google-interview-process-uncovered/8
 */

export function reverseStringInPlace(originalStr: string): string {
  let str = originalStr;
  const {length} = str;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    const j = length - i - 1;


    // Strings in JavaScript are immutable
    // Can't do index replacement because of TypeScript limitations:
    // Index signature in type 'String' only permits reading.
    // const tmp = str[i];
    // str[i] = str[j];
    // str[j] = tmp;

    const start = str.substring(0, i);
    const mid = str.substring(i + 1, j);
    const end = str.substring(j + 1, length);
    console.log({str, start, 'str[i]': str[i], mid, 'str[j]': str[j], end, i, j, 'j-i': j - i});
    str = start + str[j] + mid + str[i] + end;
  }

  return str;
}

