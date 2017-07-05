# Everything Be True

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.

## First considerations



## My way of doing it

1. 


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
