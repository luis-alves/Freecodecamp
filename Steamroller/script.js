/**
  * FreeCodeCamp Algorithm exercise
  * SteamRoller
  */

var newArray = [];
function steamrollArray(arr) {
  // debugger;
  // I'm a steamroller, baby
  for (var i = 0; i < arr.length; i++) {
    // Base case
    if (!Array.isArray(arr[i])) {
      newArray.push(arr[i]);
    } else {
      // Recursion case
      steamrollArray(arr[i]);
    }

  }
  return newArray;
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

console.log('My answer is: [' + steamrollArray([1, [2], [3, [[4]]]]) + ']');
console.log('Correct answer is: [1, 2, 3, 4]');
steamrollArray([1, [2], [3, [[4]]]]).equals([1, 2, 3, 4]) ? console.log('Passed') : console.log('Failed');
console.log('---------------------------');
newArray = [];
console.log('My answer is: [' + steamrollArray([[["a"]], [["b"]]]) + ']');
console.log('Correct answer is: ["a", "b"]');
steamrollArray([[["a"]], [["b"]]]).equals(["a", "b"]) ? console.log('Passed') : console.log('Failed');
console.log('---------------------------');
newArray = [];
console.log('My answer is: [' + steamrollArray([1, [], [3, [[4]]]]) + ']');
console.log('Correct answer is: [1, 3, 4]');
steamrollArray([1, [], [3, [[4]]]]).equals([1, 3, 4]) ? console.log('Passed') : console.log('Failed');
console.log('---------------------------');
newArray = [];
console.log('My answer is: [' + steamrollArray([1, {}, [3, [[4]]]]) + ']');
console.log('Correct answer is: [1, {}, 3, 4]');
steamrollArray([1, {}, [3, [[4]]]]).equals([1, {}, 3, 4]) ? console.log('Passed') : console.log('Failed');
console.log('---------------------------');
