
/**
  * FreeCodeCamp Algorithm exercise
  * Binary Agents
  */


function binaryAgent(str) {

  function binaryToDecimal(element) {
    var binaryConverter = [128,64,32,16,8,4,2,1];
    var returnArray = [];
    for (var i = 0; i < element.length; i++) {
      var total = 0;
      for (var j = 0; j < element[i].length; j++) {
        total += element[i][j] * binaryConverter[j];
      }
      returnArray.push(total);
    }
    return returnArray;
  }

  var phraseArray = str.split(' ');
  var phraseUTF = binaryToDecimal(phraseArray);

  var joinedArray = [];
  phraseUTF.map(function (number, index) {
    joinedArray.push(String.fromCharCode(number))
  })

  var phrase = '';
  for (var i = 0; i < joinedArray.length; i++) {
    phrase += joinedArray[i]

  }

  return phrase;
}


// Testing

console.log('Tests:');
console.log('');
console.log('My answer is: ' + binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 \
01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 \
00100000 01100110 01110101 01101110 00100001 00111111"));
console.log('The correct answer is: "Aren\'t bonfires fun!?"');
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 \
01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 \
00100000 01100110 01110101 01101110 00100001 00111111") === "Aren't bonfires fun!?" ? console.log('Passed') : console.log('Failed');
console.log('-----------------------------------');
console.log('My answer is: ' + binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 \
01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 \
00100001"));
console.log('The correct answer is: "I love FreeCodeCamp!"');
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 \
01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") === "I love FreeCodeCamp!" ? console.log('Passed') : console.log('Failed');
console.log('-----------------------------------');
