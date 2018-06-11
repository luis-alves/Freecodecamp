/**
  * FreeCodeCamp Algorithm exercise
  * Everything Be True
  */

function truthCheck(collection, pre) {
  for (var i = 0; i < collection.length; i++) {
    if (collection[i][pre] === undefined || collection[i][pre] === null ||
       collection[i][pre] === 0 || collection[i][pre] === '' ||
       (isNaN(collection[i][pre]) && typeof collection[i][pre] !== 'string')) {
      return false;
    }
  }
  return true;
}


// Testing

console.log('Tests:');
console.log('');
console.log('My answer is: ' + truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
console.log('The corrected answer is: "true"');
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") === true ? console.log('Passed') : console.log('Failed');
console.log('-------------------------------');
console.log('My answer is: ' + truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
console.log('The corrected answer is: "false"');
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") === false ? console.log('Passed') : console.log('Failed');
console.log('-------------------------------');
console.log('My answer is: ' + truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));
console.log('The corrected answer is: "false"');
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0},
{"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5},
{"user": "Po", "sex": "female", "age": 4}], "age") === false ? console.log('Passed') : console.log('Failed');
console.log('-------------------------------');
console.log('My answer is: ' + truthCheck([{"name": "Pete", "onBoat": true},
{"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"));
console.log('The corrected answer is: "false"');
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true},
{"name": "FastFoward", "onBoat": null}], "onBoat") === false ? console.log('Passed') : console.log('Failed');
console.log('-------------------------------');
console.log('My answer is: ' + truthCheck([{"name": "Pete", "onBoat": true},
{"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"));
console.log('The corrected answer is: "true"');
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"},
{"name": "FastFoward", "onBoat": true}], "onBoat") === true ? console.log('Passed') : console.log('Failed');
console.log('-------------------------------');
console.log('My answer is: ' + truthCheck([{"single": "yes"}], "single"));
console.log('The corrected answer is: "true"');
truthCheck([{"single": "yes"}], "single") === true ? console.log('Passed') : console.log('Failed');
console.log('-------------------------------');
console.log('My answer is: ' + truthCheck([{"single": ""}, {"single": "double"}], "single"));
console.log('The corrected answer is: "false"');
truthCheck([{"single": ""}, {"single": "double"}], "single") === false ? console.log('Passed') : console.log('Failed');
console.log('-------------------------------');
console.log('My answer is: ' + truthCheck([{"single": "double"}, {"single": undefined}], "single"));
console.log('The corrected answer is: "false"');
truthCheck([{"single": "double"}, {"single": undefined}], "single") === false ? console.log('Passed') : console.log('Failed');
console.log('-------------------------------');
console.log('My answer is: ' + truthCheck([{"single": "double"}, {"single": NaN}], "single"));
console.log('The corrected answer is: "false"');
truthCheck([{"single": "double"}, {"single": NaN}], "single") === false ? console.log('Passed') : console.log('Failed');
console.log('-------------------------------');
