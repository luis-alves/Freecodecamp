/**
  * FreeCodeCamp Algorithm exercise
  * Arguments Optional
  */

function addTogether() {
  if (arguments.length > 1) {
    return arguments[0] + arguments[1];
  }
}

console.log(addTogether(2,3));
