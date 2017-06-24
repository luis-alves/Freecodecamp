/* FreeCodeCamp Algorithm exercise
   ADN Pairing */

function pairElement(str) {
  // Declare variable to acomodate the final array
  var DNAStrand = [];

  // loop through all the char in string and add it to a new array
  for (var i = 0; i < str.length; i++) {
    var tempArray = [];
    tempArray.push(str[i]);
    // check the pair that is to push to the new array
    if (str[i] === 'A') {
      tempArray.push('T');
    } else if (str[i] === 'T') {
      tempArray.push('A');
    } else if (str[i] === 'C') {
      tempArray.push('G');
    } else {
      tempArray.push('C');
    }
    // Push each new array with one pair to the final array
    DNAStrand.push(tempArray);
  }

  return DNAStrand;
}

//pairElement("GCG");

/* Testing */

console.log(pairElement("GCG"));
// Expected output: [["G", "C"], ["C","G"],["G", "C"]]
console.log(pairElement("ATCGA"));
// Expected output: [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log(pairElement("TTGAG"));
// Expected output: [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
console.log(pairElement("CTCTA"));
// Expected output: [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
