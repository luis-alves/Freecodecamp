# Steamroller

Flatten a nested array. You must account for varying levels of nesting.

## First considerations

Pluck each value of an array, if there is a nested array as one of the elements
I must go inside and pluck only the values.

## My way of doing it

1. Create an empty array outside the recursive call so that it does not resets
   to empty.
2. Create another empty array that will receive the final answer.
3. Create a function the will be recursive, and get into the nested arrays.
4. Call the recursive function.
5. Output the recursive function returned object.


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

### push()

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
