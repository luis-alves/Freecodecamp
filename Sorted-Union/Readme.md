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

1. Return the result of the `typeof()` method.

## Methods used
### typeof()

[See Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

#### Syntax
```typeof operand```

This method returns a string indicating the type of the `operand`.

#### Example
```
const x = typeof true;
const y = typeof 'hello';
const z = typeof undefined;

console.log(x);
console.log(y);
console.log(z);
```
output 1: *boolean*
output 2: *string*
output 3: *undefined*
