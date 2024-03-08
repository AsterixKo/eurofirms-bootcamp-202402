function trim(string) {
  var resultB = '';
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ' || resultB) {
      resultB += string[i];
    }
  }
  console.log({ dentroResultB: resultB });

  var result = '';
  for (var i = resultB.length - 1; i >= 0; i--) {
    if (resultB[i] !== ' ' || result) {
      result += resultB[i];
    }
  }

  console.log({ dentroResult: result });

  return result;
}

console.log('FUNCTION TRIM');

console.log(
  'CASE1: delete empty spaces from begining and end of "   Hello Worlds  " '
);

var helloWorld = '   Hello World  ';

var result = trim(helloWorld);

console.log({ result });

console.log('-----------------------');

console.log('CASE1: delete empty spaces from begining and end of "     " ');

var helloWorld = '     ';

var result = trim(helloWorld);

console.log({ result });
