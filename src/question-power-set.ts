export function powerSet(array: Array<string>) {

  const results = [[]];

  for (let i = 0; i < array.length; i++) {
    const len = results.length;
    for (let j = 0; j < len; j++) {
      const result = results[j].concat(array[i])
      results.push(result);
    }
  }

  return results;
}
