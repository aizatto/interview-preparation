/*
 * Tricks:
 * - O(n^3) solution: Binomial Coefficient
 *
 * https://www.interviewbit.com/problems/kth-row-of-pascals-triangle/
 */

export function pascalsTriangle(
  length: number,
): string {
  let row = "";
  for (let line = 1; line <= length; line++) {
    const numbers = [];
    let c = 1;

    for (let i = 1; i <= line; i++) {
      numbers.push(c);
      c = (c * (line - i)) / i;
    }
    row = numbers.join(' ');
  }
  return row;
}
