# Binary Agents

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Here are some helpful links:

* String.prototype.charCodeAt()
* String.fromCharCode()

## First considerations

Convert each binary number in string into its correspondent ascii character.

## My way of doing it

1. Split sting into an array.
2. Create a function that will convert each binary number into a decimal one.
3. Call the above function.
4. Find each character by calling String.fromCharCode().
5. Create a new string with the characters from previous array.


## Methods used
### String.fromCharCode()

[See Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)

#### Syntax
`String.fromCharCode(num1[, ...[, numN]])`

This method  returns a string created by using the specified sequence of Unicode values.

#### Example
```
const str = String.fromCharCode(65);

console.log(str);

```
output: *"A"*

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
