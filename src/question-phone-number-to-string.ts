/*
 * Tricks:
 * - Recursion
 *
 * Notes:
 * - Node.js does not have a native Array.flat until Node.js v11 
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 */
const map = new Map([
  ['1', new Set([''])],
  ['2', new Set(['A', 'B', 'C'])],
  ['3', new Set(['D', 'E', 'F'])],
  ['4', new Set(['G', 'H', 'I'])],
  ['5', new Set(['J', 'K', 'L'])],
  ['6', new Set(['M', 'N', 'O'])],
  ['7', new Set(['Q', 'R', 'S'])],
  ['8', new Set(['T', 'U', 'V'])],
  ['9', new Set(['W', 'X', 'Y', 'Z'])],
  ['0', new Set([''])],
]);

export function phoneNumberToString(str: string): string[] {
  if (str.length === 0) {
    return [];
  }

  const chars = map.get(str[0]);
  if (str.length === 1) {
    return Array.from(chars);
  }

  const results = [];
  Array.from(chars).forEach(char => {
    const strs = phoneNumberToString(str.substr(1));

    strs.forEach(substr => {
      results.push(`${char}${substr}`);
    });
  })

  return results;
}
