/* FreeCodeCamp Algorithm Exercise
   Missing Letters */

function fearNotLetter(str) {
  // Iniciate a count variable
  var count = 0;

  // Loop each letter to check if the char value of the
  for (var i = 0; i < str.length-1; i++) {
    if (str.charCodeAt(i+1) === str.charCodeAt(i)+1) {
      count++;
    }else {
      str = String.fromCharCode(str.charCodeAt(i)+1);
    }
  }

  // Case there is no letter missing
  if (count === str.length-1) {
    str = undefined;
  }

  return str;
}

// fearNotLetter("abcef");

// Testing

console.log(fearNotLetter("abce"));
// Expected output: 'd'
console.log(fearNotLetter("abcdefghjklmno"));
// Expected output: 'i'
console.log(fearNotLetter("bcd"));
// Expected output: undefined
console.log(fearNotLetter("yz"));
// Expected output: undefined
