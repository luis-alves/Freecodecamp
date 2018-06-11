# Drop it

Drop the elements of an array (first argument), starting from the front, until
the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements
of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.

Here are some helpful links:

* Arguments object
* Array.prototype.shift()
* Array.prototype.slice()

## First considerations

Check every value given in 1st arg if returns true in 2nd arg. If so,
return a new array from that point until the end.

## My way of doing it

1. Loop through the array of 1st argument.
1.1. Check if the value returns true in 2nd arg function.
1.1.1. If its true, return new array from that index to the end.
2. After the loop ended, return empty array.


## Methods used
### slice()
[See Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

#### Syntax
`arr.slice(begin, end)`

The slice() method returns a shallow copy of a portion of an array into a new
array object selected from begin to end (end not included). The original array
will not be modified.

#### Example
```
const arr = ['hello', 'to', 'we'];

const newArr = arr.slice(1, 2);
console.log(newArr);

```
output 1: ['to', 'we']
