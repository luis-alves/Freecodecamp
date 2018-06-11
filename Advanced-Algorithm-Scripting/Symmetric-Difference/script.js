/**
  * FreeCodeCamp Algorithm exercise
  * Symmetric Difference
  */

function sym(args)
{
  var bucket = [];

  function reduceEach(arrays)
  {
    var result = arrays.reduce(function (acc, curr, ind, arr) {
      if (!acc.includes(curr)) {
        acc.push(curr);
      } else {
        acc.splice(acc.indexOf(curr), 1);
      }

      return acc;
    }, bucket);

    return result;
  }

  // This separates the duplicate numbers in each array
  var simplifiedArray = [];
  for (var i = 0; i < arguments.length; i++) {
    var tempArray = [];
    for (var j = 0; j < arguments[i].length; j++) {
      if (!tempArray.includes(arguments[i][j])) {
        tempArray.push(arguments[i][j]);
      }
    }
    simplifiedArray.push(tempArray);
  }

  for (var i = 0; i < simplifiedArray.length; i++) {
    var finalResult = reduceEach(simplifiedArray[i]);
  }

  return finalResult.sort();
  }


// Testing

// /*
// * This function was retieved from [stackoverflow](https://stackoverflow.com/
//questions/7837456/how-to-compare-arrays-in-javascript) as a way to check arrays equality.
// */
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: \
    New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
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



console.log('Tests:');
console.log('');
console.log('1.');
console.log('My answer is: [' + sym([1, 2, 3], [5, 2, 1, 4]) + ']');
console.log('The correct answer is: [3, 4, 5]');
sym([1, 2, 3], [5, 2, 1, 4]).equals([3, 4, 5]) ? console.log('Passed') : console.log('Failed');
console.log('----------------------------');
console.log('2.');
console.log('My answer is: [' + sym([1, 2, 3], [5, 2, 1, 4]) + ']');
console.log('The correct answer is: 3');
sym([1, 2, 3], [5, 2, 1, 4]).length === 3 ? console.log('Passed') : console.log('Failed');
console.log('----------------------------');
console.log('3.');
console.log('My answer is: [' + sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) + ']');
console.log('The correct answer is: [1, 4, 5]');
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).equals([1, 4, 5]) ? console.log('Passed') : console.log('Failed');
console.log('----------------------------');
console.log('4.');
console.log('My answer is: [' + sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) + ']');
console.log('The correct answer is: 3');
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length === 3 ? console.log('Passed') : console.log('Failed');
console.log('----------------------------');
console.log('5.');
console.log('My answer is: [' + sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) + ']');
console.log('The correct answer is: [1, 4, 5]');
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).equals([1, 4, 5]) ? console.log('Passed') : console.log('Failed');
console.log('----------------------------');
console.log('6.');
console.log('My answer is: [' + sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) + ']');
console.log('The correct answer is: 3');
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length === 3 ? console.log('Passed') : console.log('Failed');
console.log('----------------------------');
console.log('7.');
console.log('My answer is: [' + sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) + ']');
console.log('The correct answer is: [2, 3, 4, 6, 7]');
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).equals([2, 3, 4, 6, 7]) ? console.log('Passed') : console.log('Failed');
console.log('----------------------------');
console.log('8.');
console.log('My answer is: [' + sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) + ']');
console.log('The correct answer is: 5');
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length === 5 ? console.log('Passed') : console.log('Failed');
console.log('----------------------------');
console.log('9.');
console.log('My answer is: [' + sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) + ']');
console.log('The correct answer is: [1, 2, 4, 5, 6, 7, 8, 9]');
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]).equals([1, 2, 4, 5, 6, 7, 8, 9]) ? console.log('Passed') : console.log('Failed');
console.log('----------------------------');
console.log('10.');
console.log('My answer is: [' + sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) + ']');
console.log('The correct answer is: 8');
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]).length === 8 ? console.log('Passed') : console.log('Failed');
