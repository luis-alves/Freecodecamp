# Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two
divisors, one and itself. For example, 2 is a prime number because it's only
divisible by one and two.

The provided number may not be a prime.

Here are some helpful links:
 * For Loops
 * Array.prototype.push()

## First considerations

I must check if the numbers between 1 and number given are prime. If they
are they add up to each other.

## My way of doing it

1. Create an array that will accommodate all prime numbers.
2. Write a function named `sumPrimes` that loops through all natural values
   between 1 and the number given, calling in each one `isPrime()`.
3. In the `isPrime` function it is checked if the number received:
3.1. Is one. If so returns `false` (it is not a prime).
3.2. Has remainder of zero when used each number in the prime number array as
     modulus
3.3. If it's prime it is added to the prime number array (point 1) using the
     method `push`, and return `true`.


## Methods used
[See Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

#### Syntax
```arr.push([element1[, ...[, elementN]]])```

This method is used in array, as a way to insert an new element at the end
of the array. The opposing method is the `pop()`.

#### Example
```
const arr = [];
const a = 'one';
const a = 'two';

const newArr.push(a);
console.log(newArr);

newArr.push(b);
console.log(newArr);


```
output 1: ['a']
output 2: ['a', 'b']
                 ^-------- the char is placed at the end of array
