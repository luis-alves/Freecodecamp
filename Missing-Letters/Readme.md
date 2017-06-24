#DNA Pairing

Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

##First considerations

Considering the alphabet letters I've to find the missing letters inside a string.


##My way of doing it

1. Start a variable to count number of iterations
2. Start a loop, to leap to each char
2.1. Check if the UTF code number of the posterior number is equal to the
     previous number plus one. This means that they are consecutive.
2.1.1. If they are equal output the letter by using the `fromCharCode()` method
2.1.2. If it's not, increment count by one
3. check if the count is equal to the length of the string minus one.
3.1. If it is equal output `undefined`

##Methods used
###charCodeAt()

[See Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)

####Syntax
```str.charCodeAt(index)```

This method return the UTF-16 code number of the char located at the `index`.

#### Example
```
const str = "Hello";

const codeNumber = str.charCodeAt(1);

console.log(codeNumber);
```
output: *101*


###fromCharCode()

[See Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)

####Syntax
```String.fromCharCode(num1[, ...[, numN]])```

This method return the char associated with the UTF-16 code `num`.

#### Example
```
const str = "Hello";

const codeNumber = str.charCodeAt(1);
console.log(codeNumber);

const letter = String.fromCharCode(101);
console.log(letter);
```
output 1: *101*
output 2: *'e'*
