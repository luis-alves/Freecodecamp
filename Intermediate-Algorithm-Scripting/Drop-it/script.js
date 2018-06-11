/**
  * FreeCodeCamp Algorithm exercise
  * Drop it
  */

function dropElements(arr, func) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr.slice(i, arr.length);
    }
  }
  return [];
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

console.log('Tests');
console.log('');
console.log('My answer is: [' + dropElements([1, 2, 3, 4], function(n) {return n >= 3; }) + ']');
console.log('The correct answer is: [3, 4]');
dropElements([1, 2, 3, 4], function(n) {return n >= 3; }).equals([ 3, 4]) ? console.log('Passed') : console.log('Failed');
console.log('------------------------------');
console.log('My answer is: [' + dropElements([0, 1, 0, 1], function(n) {return n === 1;}) + ']');
console.log('The correct answer is: [1, 0, 1]');
dropElements([0, 1, 0, 1], function(n) {return n === 1;}).equals([1, 1]) ? console.log('Passed') : console.log('Failed');
console.log('------------------------------');
console.log('My answer is: [' + dropElements([1, 2, 3], function(n) {return n > 0;}) + ']');
console.log('The correct answer is: [1, 2, 3]');
dropElements([1, 2, 3], function(n) {return n > 0;}).equals([1, 2, 3]) ? console.log('Passed') : console.log('Failed');
console.log('------------------------------');
console.log('My answer is: [' + dropElements([1, 2, 3, 4], function(n) {return n > 5;}) + ']');
console.log('The correct answer is: []');
dropElements([1, 2, 3, 4], function(n) {return n > 5;}).equals([]) ? console.log('Passed') : console.log('Failed');
console.log('------------------------------');
console.log('My answer is: [' + dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) + ']');
console.log('The correct answer is: [7, 4]');
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}).equals([7, 4]) ? console.log('Passed') : console.log('Failed');
console.log('------------------------------');
console.log('My answer is: [' + dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) + ']');
console.log('The correct answer is: [3, 9, 2]');
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}).equals([3, 9, 2]) ? console.log('Passed') : console.log('Failed');
console.log('------------------------------');
