/**
  * FreeCodeCamp Algorithm exercise
  * Arguments Optional
  */

function addTogether() {
  var firstNumber = arguments[0];

  if (arguments.length > 1) {
    if (isNaN(firstNumber) || typeof arguments[1] === 'string') {
      return undefined;
    }
    return firstNumber + arguments[1];
  }

  if (isNaN(firstNumber)) {
    return undefined;
  }

  return function (x) {
    if (Array.isArray(arguments[0])) {
      return undefined;
    }
    return x + firstNumber;
  }
}


// Testing

console.log('Tests');
console.log('');
console.log('My answer is: ' + addTogether(2,3));
console.log('The correct answer is: 5');
addTogether(2,3) === 5 ? console.log('Passed') : console.log('Failed');
console.log('------------------------------');
console.log('My answer is: ' + addTogether(2)(3));
console.log('The correct answer is: 5');
addTogether(2)(3) === 5 ? console.log('Passed') : console.log('Failed');
console.log('------------------------------');
console.log('My answer is: ' + addTogether("http://bit.ly/IqT6zt"));
console.log('The correct answer is: undefined');
addTogether("http://bit.ly/IqT6zt") === undefined ? console.log('Passed') : console.log('Failed');
console.log('------------------------------');
console.log('My answer is: ' + addTogether(2, "3"));
console.log('The correct answer is: undefined');
addTogether(2, "3") === undefined ? console.log('Passed') : console.log('Failed');
console.log('------------------------------');
console.log('My answer is: ' + addTogether(2)([3]));
console.log('The correct answer is: undefined');
addTogether(2)([3]) === undefined ? console.log('Passed') : console.log('Failed');
console.log('------------------------------');
