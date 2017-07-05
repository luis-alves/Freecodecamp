# Sorted Union

Write a function that takes two or more arrays and returns a new array of unique
values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their
original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array
should not be sorted in numerical order.

## First considerations

Create a new array from integers of other arrays so that if the integer is
already in the new array it is not integrated. The order is the same as they
appear in the arrays.

## My way of doing it

1. Retrieve all arguments from the function, using `arguments` key word.
2. Group all arguments values into a single array so that it is easier to iterate.
3. Concatenat all values into one single array.
3.1. Check if the value is an array or integer.
3.2. Check if there is an index, so that you can know if the value is present.
3.2.1. Copy only the values that the method `indexOf()` returns '-1'.

## Methods used
### reduce()

[See Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

#### Syntax
`arr.reduce(callback, [initialValue])`

This method reduces all the values into a single one, by applying a function to
all of them from left to right.

#### Example
```
var sum = [0, 1, 2, 3].reduce(function(acc, val) {
  return acc + val;
}, 0);

console.log(sum);
```
output 1: *6*

### concat()

[See Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)

#### Syntax
`str.concat(string2[, string3, ..., stringN])`

Glues strings together into another string.

#### Example
```
var hello = 'Hello, ';
hello.concat('Kevin', ' have a nice day.');

console.log(hello);
```
output 1: *Hello, Kevin have a nice day.*
