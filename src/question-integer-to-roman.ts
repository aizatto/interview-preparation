/*
 * https://projecteuler.net/about=roman_numerals
 * https://www.interviewbit.com/problems/integer-to-roman/
 * https://www.byte-by-byte.com/inttoroman/
 * https://www.geeksforgeeks.org/converting-decimal-number-lying-between-1-to-3999-to-roman-numerals/
 */

export function integerToRoman(originalValue: number): string {
  let value = originalValue;
  let quotient = 0;
  let roman = '';

  while (value !== 0) {
    if (value >= 1000) {
      quotient = Math.floor(value / 1000);
      value %= 1000;
      roman += 'M'.repeat(quotient);

    } else if (value >= 500) {
      if (value >= 900) {
        roman += 'IM';
        value -= 500;
      } else {
        roman += 'D';
        value %= 500;
      }
    } else if (value >= 100) {
      quotient = Math.floor(value / 100);
      value %= 100;

      roman += 'C'.repeat(quotient);
    } else if (value >= 50) {
      if (value >= 90) {
        roman += 'IC';
        value -= 90;
      } else {
        roman += 'L';
        value %= 50;
      }
    } else if (value >= 10) {
      quotient = Math.floor(value / 10);
      value %= 10;

      if (quotient === 4) {
        roman += 'XL';
      } else {
        roman += 'X'.repeat(quotient);
      }
    } else if (value >= 5) {
      if (value >= 9) {
        roman += 'IX';
        value -= 9;
      } else {
        roman += 'V';
        value %= 5;
      }
    } else {
      if (value === 4) {
        roman += 'IV';
      } else {
        roman += 'I'.repeat(value);
      }
      value = 0;
    }
  }

  return roman;
}
