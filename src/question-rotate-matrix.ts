/*
 * https://www.interviewbit.com/problems/rotate-matrix/
 * https://www.geeksforgeeks.org/rotate-matrix-elements/
 */

export function rotateMatrix(
  matrix: number[][],
): number[][] {
  let height = matrix.length;
  let width = matrix[0].length;

  let row = 0;
  let col = 0;

  while (row < height && col < width) {
    if (row + 1 === height ||
      col + 1 === width) {
      break;
    }

    let prev = matrix[row + 1][col];

    for (let i = col; i < width; i++) {
      const curr = matrix[row][i];
      matrix[row][i] = prev;
      prev = curr;
    }
    row += 1;

    for (let i = row; i < height; i++) {
      const curr = matrix[i][width - 1];
      matrix[i][width - 1] = prev;
      prev = curr;
    }
    width -= 1;

    if (row < height) {
      for (let i = width - 1; i >= col; i--) {
        const curr = matrix[height - 1][i]
        matrix[height - 1][i] = prev;
        prev = curr;
      }
    }
    height -= 1;

    if (col < width) {
      for (let i = height - 1; i >= row; i--) {
        const curr = matrix[i][col]
        matrix[i][col] = prev;
        prev = curr;
      }
    }
    col += 1;
  }

  return matrix;
}
