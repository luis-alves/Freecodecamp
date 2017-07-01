# Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be
evenly divided by both, as well as by all sequential numbers in the range
between these parameters.

The range will be an array of two numbers that will not necessarily be in
numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is
evenly divisible by all numbers between 1 and 3.

## First considerations

Get the multiple of each number of one given array, and find the lowest
number that all have.
like:
*number 1:* 1, 2, 3, 4, 5
               ^-------------- lowest common for 1
*number 2:* 2, 4, 6, 8, 10
            ^----------------- lowest common for 2
In this case the smallest common multiple is 2.

## My way of doing it

1. Check if the value in index 0 of array is lowest or highest than the index 1 value
1.1. Decompose the given array into a new array with the natural
     numbers from the lowest to the highest or vice-versa of the previous array.
2. Loop until its false, incrementing an iterator number by one.
3. Loop thru each number in the array.
3.1. Check if the modulus od the iterator by the array number is equal to zero.
3.1.1. If it is increase count variable by one.
4. if the value of count is equal to the quantity of integers in the decomposed
   array.
4.1. return the iterator number (the answer is given).
4.2. Increment the iterator number and continue the while loop.


## Methods used
[See Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

#### Syntax
`arr.push([element1[, ...[, elementN]]])`

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
