/**
 * atoi: ascii to integer
 *
 * https://www.glassdoor.com/Interview/Convert-string-to-integer-like-atoi-in-C-QTN_172994.htm
 * https://www.interviewbit.com/problems/atoi/
 * https://www.slideshare.net/slavimarinov/a-googler-the-google-interview-process-uncovered/8
 */
const ZERO_ASCII = '0'.charCodeAt(0);

export function atoi(originalString: string): number {
  let str = originalString;

  let sign = 1;
  if (str[0] === '-') {
    str = str.substring(1);
    sign = -1;
  }

  let acc = 0;
  for (const char of str) {
    acc = acc * 10 + (char.charCodeAt(0) - ZERO_ASCII);
  }

  return sign * acc;
}
