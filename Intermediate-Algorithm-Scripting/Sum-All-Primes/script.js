/**
  * FreeCodeCamp Algorithm exercise
  * Sum All Primes
  */

// variable that will contain all prime numbers to test other numbers
var primes = [];

function isPrime(number) {
  // debugger;
  // Number 1 by definition is not prime
  if (number === 1) {
    return false;
  }
  // Tests if the number has remainder of zero when used with a modulus of a
  // prime number
  for (var i = 0; i < primes.length; i++) {
    if (number % primes[i] === 0) {
      return false;
    }
  }
  // Being a prime number it is added to the array of prime numbers for later
  // use
  primes.push(number);
  return true;
}

function sumPrimes(num) {
  var total = 0;
  for (var i = 1; i <= num; i++) {
    if (isPrime(i)) {
      total += i;
    }
  }
  // Empties the array so that the testing is started from scratch
  primes = [];
  return total;
}


// Testing


console.log('My answer: ' + sumPrimes(10));
console.log('The right answer is: a number is returned' );
!isNaN(sumPrimes(10)) ? console.log('Passed') : console.log('Failed');
console.log('---------------------------------------------');
console.log('My answer: ' + sumPrimes(10));
console.log('The right answer is: 17' );
sumPrimes(10) === 17 ? console.log('Passed') : console.log('Failed');
console.log('---------------------------------------------');
console.log('My answer: ' + sumPrimes(977));
console.log('The right answer is: 73156' );
sumPrimes(977) === 73156 ? console.log('Passed') : console.log('Failed');
console.log('---------------------------------------------');
