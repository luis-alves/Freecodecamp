/**
  * FreeCodeCamp Algorithm exercise
  * Sum All Odd Fibonacci Numbers
  */

function sumFibs(num) {

  // Opted for the use of a recursive function
  function fibonacci(num) {
    // Base case
    if(num == 0)
      return 0;
    // Base case
    if(num === 1)
      return 1;
    // Recursive case
    else
      return fibonacci(num-1) + fibonacci(num-2);
  }

  var indexNum = 0;
  var total = 0;
  // Loop while value is under our equal to num provided
  while (fibonacci(indexNum) <= num) {
    // Check if the value is odd and add it
    if (fibonacci(indexNum)%2 !== 0) {
      total += fibonacci(indexNum);
    }
    indexNum++;
  }
  return total;
}


// Testing
console.log('-------------------------------');
console.log('My answer is: ' + sumFibs(1));
console.log('Corrected answer is: ' + 2);
sumFibs(1) === 2 ? console.log('Passed') : console.log('Failed');
console.log('-------------------------------');
console.log('My answer is: ' + sumFibs(1000));
console.log('Corrected answer is: ' + 1785);
sumFibs(1000) === 1785 ? console.log('Passed') : console.log('Failed');
console.log('-------------------------------');
console.log('My answer is: ' + sumFibs(4000000));
console.log('Corrected answer is: ' + 4613732);
sumFibs(4000000) === 4613732 ? console.log('Passed') : console.log('Failed');
console.log('-------------------------------');
console.log('My answer is: ' + sumFibs(4));
console.log('Corrected answer is: ' + 5);
sumFibs(4) === 5 ? console.log('Passed') : console.log('Failed');
console.log('-------------------------------');
console.log('My answer is: ' + sumFibs(75024));
console.log('Corrected answer is: ' + 60696);
sumFibs(75024) === 60696 ? console.log('Passed') : console.log('Failed');
console.log('-------------------------------');
console.log('My answer is: ' + sumFibs(75025));
console.log('Corrected answer is: ' + 135721);
sumFibs(75025) === 135721 ? console.log('Passed') : console.log('Failed');
