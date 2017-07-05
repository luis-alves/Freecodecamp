/**
  * FreeCodeCamp Algorithm exercise
  * Everything Be True
  */

  function truthCheck(collection, pre) {
    

  return pre;
}








// Testing

console.log('Tests:');
console.log('');
console.log('My answer is: ' + truthCheck([{"user": "Tinky-Winky", "sex": "male"}, \
{"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, \
{"user": "Po", "sex": "female"}], "sex"));
console.log('The corrected answer is: "true"');
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, \
{"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") === true ? console.log('Passed') : console.log('Failed');
