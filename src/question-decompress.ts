/**
 * https://techdevguide.withgoogle.com/resources/compress-decompression/
 */

const ZERO_ASCII = '0'.charCodeAt(0);

export function decompressLoop(str: string) {
  //  console.log(`to decompress: ${str}`);
  let result = '';

  // stack
  const stackMultiplier = [];
  const stackString = [];

  let currentString = '';
  let currentMultiplier = 0;

  for (let pos = 0; pos < str.length; pos += 1) {
    const char = str[pos];
    if (char === '[') {
      stackMultiplier.push(currentMultiplier);
      stackString.push(currentString);
      currentMultiplier = 0;
      currentString = '';
      continue;
    } else if (char === ']') {
      const poppedString = stackString.pop();
      const append = currentString.repeat(stackMultiplier.pop());

      if (stackString.length === 0) {
        result += append;
        currentString = '';
      } else {
        currentString = poppedString + append;
      }
      continue;
    }

    const charCode = char.charCodeAt(0) - ZERO_ASCII;
    if (charCode >= 0 && charCode <= 9) {
      currentMultiplier = currentMultiplier * 10 + (char.charCodeAt(0) - ZERO_ASCII);
    } else {
      currentString += char;
    }
  }

  return result + currentString;
}

export function decompressRecursion(
  str: string,
  startPos: number = 0,
): { str: string, endPos: number } {
  // console.log(`to decompress: ${str}, startPos: ${startPos}`);

  const result = '';
  let pos = startPos;
  let currentString = '';
  let currentMultiplier = 0;
  
  for (; pos < str.length; pos += 1) {
    const char = str[pos];
    if (char === '[') {
      const tmp = decompressRecursion(str, pos + 1); 
      currentString += tmp.str.repeat(currentMultiplier);
      currentMultiplier = 0;
      pos = tmp.endPos;
      continue;
    } else if (char === ']') {
      break;
    }

    const charCode = char.charCodeAt(0) - ZERO_ASCII;
    if (charCode >= 0 && charCode <= 9) {
      currentMultiplier = currentMultiplier * 10 + (char.charCodeAt(0) - ZERO_ASCII);
    } else {
      currentString += char;
    }
  }

  return {
    str: result + currentString,
    endPos: pos
  };
}
