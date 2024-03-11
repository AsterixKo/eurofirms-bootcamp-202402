function split(str, separator, limit) {
  if (limit === 0) {
    return [];
  }
  var limitCalculated = str.length;
  if (limit !== undefined && Number(limit) !== NaN && limit > 0) {
    limitCalculated = limit;
  }

  var result = [];
  var j = 0;
  for (var i = 0; i < limitCalculated; i++) {
    if (str[i] !== separator && separator === '') {
      result[j] = str[i];
      j++;
    } else if (str[i] !== separator && result[j] === undefined) {
      result[j] = '' + str[i];
    } else if (str[i] !== separator) {
      result[j] += str[i];
    } else if (result[j].length > 0) {
      j++;
    }
  }
  return result;
}

console.log('------------------SPLITE----------------');

const str = 'The quick brown fox jumps over the lazy dog.';

const words = split(str, ' ');
// console.log({ words: words });
console.log({ words3: words[3] });
// Expected output: "fox"

const wordsCase2 = split(str, ' ', 5);
// console.log({ wordsCase2: wordsCase2 });
console.log({ wordsCase2: wordsCase2[1] });
// Expected output: "q"

const chars = split(str, '');
// console.log({ chars: chars });
console.log({ chars8: chars[8] });
// Expected output: "k"

const strCopy = split(str);
console.log({ strCopy: strCopy });
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
