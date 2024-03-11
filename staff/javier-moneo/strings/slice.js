function slice(str, indexStart, indexEnd) {
  if (indexStart >= str.length) {
    return '';
  }

  var indexStartCalculated = indexStart;
  if (indexStart < 0) {
    indexStartCalculated = Math.max(indexStart + str.length, 0);
  }

  if (indexStart === undefined || Number(indexStart) === NaN) {
    indexStartCalculated = 0;
  }

  var indexEndCalculated = indexEnd;
  if (
    indexEnd === undefined ||
    Number(indexEnd) === NaN ||
    indexEnd >= str.length
  ) {
    indexEndCalculated = str.length - 1;
  } else if (indexEnd < 0) {
    indexEndCalculated = Math.max(indexEnd + str.length, 0);
  }

  if (indexEndCalculated < indexStartCalculated) {
    return '';
  }

  var result = '';
  for (var i = indexStartCalculated; i < indexEndCalculated; i++) {
    result += str[i];
  }
  return result;
}

console.log('--------------SLICE--------------');

console.log('Case 1 block: ');
const str = 'The quick brown fox jumps over the lazy dog.';

console.log({ str: slice(str, 31) });
// Expected output: "the lazy dog."

console.log({ str: slice(str, 4, 19) });
// Expected output: "quick brown fox"

console.log({ str: slice(str, -4) });
// Expected output: "dog."

console.log({ str: slice(str, -9, -5) });
// Expected output: "lazy"

console.log('----------------------');
console.log('Case 2 block: ');

const str1 = 'The morning is upon us.'; // The length of str1 is 23.
const str2 = slice(str1, 1, 8);
const str3 = slice(str1, 4, -2);
const str4 = slice(str1, 12);
const str5 = slice(str1, 30);
console.log({ str2 }); // he morn
console.log({ str3 }); // morning is upon u
console.log({ str4 }); // is upon us.
console.log({ str5 }); // ""

console.log('----------------------');
console.log('Case 3 block: ');

const strBlock3 = 'The morning is upon us.';
console.log({ output1: slice(strBlock3, -3) }); // 'us.'
console.log({ output2: slice(strBlock3, -3, -1) }); // 'us'
console.log({ output3: slice(strBlock3, 0, -1) }); // 'The morning is upon us'
console.log({ output4: slice(strBlock3, 4, -1) }); // 'morning is upon us'
console.log({ output5: slice(strBlock3, -11, 16) }); // "is u"
console.log({ output6: slice(strBlock3, 11, -7) }); // " is u"
console.log({ output7: slice(strBlock3, -5, -1) }); // "n us"
