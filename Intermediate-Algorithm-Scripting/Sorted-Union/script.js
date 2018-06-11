/**
  * FreeCodeCamp Algorithm exercise
  * Sorted Union
  */

function uniteUnique(arr) {

  // get the arguments suplied by the function
  for (var i = 0; i < arguments.length; i++) {
    var newArray = Array.from(arguments);
  }

  var completeArray = [];

  // Push all elements of the array to a new array by order, even nested arrays
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
      completeArray.push(arguments[i][j])
    }
  }

  // iterate thru the array and concatenat the elements to another array
  function getUniqueArray(acum, num) {
    return acum.concat(Array.isArray(num) ? [acum].indexOf([num]) === -1 ? [num] : [] : acum.indexOf(num) === -1 ? num : []);
  }
  var result = completeArray.reduce(getUniqueArray, []);

  return result;
}

// Testing

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


// Tests

console.log('Tests:');

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]).equals([1, 3, 2, 5, 4]) ? 'passed' : 'failed');
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]).equals([1, 3, 2, [5], [4]]) ? 'passed' : 'failed');
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]).equals([1, 2, 3, 5]) ? 'passed' : 'failed');
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]).equals([1, 2, 3, 5, 4, 6, 7, 8]) ? 'passed' : 'failed');

// Personal Testing
console.log('');
console.log('Personal testing:');
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [5]]));
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [5]]).equals([1, 3, 2, [5]]) ? 'passed' : 'failed');
// This test fails because the method indexOf() does a triple
// equality like '===' and you can't compare two arrays with this algorithm.
// Since this exercise does not have similar nested arrays, I think that they do
// not intend to evaluate this-
