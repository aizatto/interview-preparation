/*
 * Assume:
 * - Everything is properly formatted
 *
 * https://projecteuler.net/about=roman_numerals
 * https://www.interviewbit.com/problems/roman-to-integer/
 * https://www.geeksforgeeks.org/converting-roman-numerals-decimal-lying-1-3999/
 */

const map = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
]);

export function romanToInteger(roman: string): number {
  let value = 0;
  for (let pos = 0; pos < roman.length; pos++) {

    const value1 = map.get(roman[pos]);

    if (pos + 1 < roman.length) {
      const value2 = map.get(roman[pos + 1]);

      if (value1 >= value2) {
        value += value1;
      } else {
        value = value + value2 - value1;
        pos += 1;
      }
    } else {
      value += value1;
    }
  }

  return value;
}
