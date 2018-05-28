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

/*
* This function was retieved from [stackoverflow](https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript) as a way to check arrays equality.
*/
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

// Testing
console.log(pairElement("GCG").equals(Array(["G", "C"], ["C","G"], ["G", "C"])) ? 'passed' : 'failed');
// Expected output: [["G", "C"], ["C","G"],["G", "C"]]
console.log(pairElement("ATCGA").equals([["A","T"], ["T","A"], ["C","G"], ["G","C"], ["A","T"]]) ? 'passed' : 'failed');
// Expected output: [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log(pairElement("TTGAG").equals([["T","A"], ["T","A"], ["G","C"], ["A","T"], ["G","C"]]) ? 'passed' : 'failed');
// Expected output: [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
console.log(pairElement("CTCTA").equals([["C","G"], ["T","A"], ["C","G"], ["T","A"], ["A","T"]]) ? 'passed' : 'failed');
// Expected output: [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
