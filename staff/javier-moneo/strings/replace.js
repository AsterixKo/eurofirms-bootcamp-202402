function replace(string, pattern, replacement) {
  var result = '';
  if (typeof pattern === 'string') {
    if (pattern === '') {
      // Put replacement at the start of paragraph
      result = replacement;
      for (var i = 0; i < string.length; i++) {
        result += string[i];
      }
    } else {
      // case: replace first ocurrence of pattern
      var analized = '';
      var patternFound = false;
      var indexPatternFoundEnd = 0;
      var j = 0;
      for (var i = 0; i < string.length && !patternFound; i++) {
        analized += string[i];
        if (analized.length === pattern.length) {
          if (analized === pattern) {
            // Pattern found at position i
            console.log('pattern found at i: ' + i + ':' + analized);
            patternFound = true;
            indexPatternFoundEnd = i;
          } else {
            analized = '';
            j++;
            i = j;
          }
        }
      }

      // Replacing
      var replaced = false;
      for (var k = 0; k < string.length; k++) {
        if (
          k < indexPatternFoundEnd - pattern.length + 1 ||
          k > indexPatternFoundEnd
        ) {
          result += string[k];
        } else if (!replaced) {
          result += replacement;
          replaced = true;
        }
      }
    }
  } else {
    //TODO: analizar con regex
  }
  return result;
}

console.log('---------------REPLACE----------------');

console.log(
  'Case 1: replace "Ruth\'s" for "my" on the phrase "I think Ruth\'s dog is cuter than your dog!"'
);

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log({ result: replace(paragraph, "Ruth's", 'my') });
// Expected output: "I think my dog is cuter than your dog!"

console.log(
  'Case 2: replace "" for "my" on the phrase "I think Ruth\'s dog is cuter than your dog!"'
);

const paragraph2 = "I think Ruth's dog is cuter than your dog!";

console.log({ result: replace(paragraph2, '', 'my') });
// Expected output: "myI think Ruth's dog is cuter than your dog!"

const paragraph3 = "I think Ruth's dog is cuter than your dog!";

console.log({ result: replace(paragraph2, 'I', 'You') });
// Expected output: "You think Ruth's dog is cuter than your dog!"

const paragraph4 = "I think Ruth's dog is cuter than your dog!";

console.log({ result: replace(paragraph2, 'dog!', 'duck') });
// Expected output: "You think Ruth's dog is cuter than your duck"