# Boo who

Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.

## First considerations

Just a simple `typeof()` method to show the boolean result. The result must
check that only `true` and `false` are boolean primites. Although other
statements can output true or false they are not primitives.

## My way of doing it

1. Return the result of the `typeof()` method.

## Methods used
### typeof()

[See Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

#### Syntax
`typeof operand`

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
output 1: *'boolean'*
output 2: *'string'*
output 3: *'undefined'*
