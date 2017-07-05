/**
  * FreeCodeCamp Algorithm exercise
  * Finders Keepers
  */

function findElement(arr, func) {

  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
}




// Testing

console.log('Tests');
console.log('');
console.log('my answer is: ' + findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));
console.log('The correct answer is: 2');
findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }) === 2 ? console.log('Passed') : console.log('Failed');
console.log('--------------------------------------');
console.log('my answer is: ' + findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));
console.log('The correct answer is: 2');
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) === undefined ? console.log('Passed') : console.log('Failed');
