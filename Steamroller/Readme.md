# Steamroller

Flatten a nested array. You must account for varying levels of nesting.

## First considerations

Pluck each value of an array, if there is a nested array as one of the elements
it must be copied only the value.

## My way of doing it

1. Create an empty array.
2. Loop each element of the given array.
3.1. Check if it is not an array.
3.1.1. If it's not push the value to the new array.
3.1. Else recursively check for this array that is the element.


## Methods used
### Array.isArray()

[See Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

#### Syntax
`Array.isArray(obj)`

This method determines if the element is an Array object.

#### Example
```
const str = ["Hello", 'mom'];

const newStr = Array.isArray(str);
console.log(newStr);

```
output: *True*
