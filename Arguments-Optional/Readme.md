# Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Here are some helpful links:

* Closures
* Arguments object

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
