/**
 * https://www.interviewbit.com/problems/justified-text/
 */

 // param A : array of strings
 // param B : integer
 // return a array of strings

function justifyArray(
  line: string[],
  lineLength: number,
  LENGTH: number,
): string {
  if (line.length === 0) {
    return "";
  }
  const spacesToAdd = LENGTH - lineLength;
  const averageSpaces = spacesToAdd / (line.length - 1);
  let modSpaces = spacesToAdd % (line.length - 1);

  const row = [line[0]];
  for (let j = 1; j < line.length; j++) {
    row.push(" ".repeat(averageSpaces));
    if (modSpaces > 0) {
      row.push(" ");
      modSpaces -= 1;
    }
    row.push(line[j]);
  }

  return row.join("").padEnd(LENGTH, ' ');
}

export function fullJustify(A: string[], B: number){
  if (A.length === 0) {
    return [''];
  }
  const words = A;
  const LENGTH = B;

  const lines = [];
  let line = [];
  let lineLength = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (line.length === 0) {
      lineLength = word.length;
      line.push(word);
      continue;
    }

    const newChars = line.length + word.length;
    if (lineLength + newChars <= LENGTH) {
      lineLength += word.length;
      line.push(word);
    } else {
      lines.push(justifyArray(line, lineLength, LENGTH));

      line = [word];
      lineLength = word.length;
    }
  }

  lines.push(line.join(' ').padEnd(LENGTH, ' '));

  return lines;
}
