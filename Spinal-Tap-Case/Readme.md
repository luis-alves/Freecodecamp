# Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Here are some helpful links:
 * RegExp
 * String.prototype.replace()

## First considerations

Join words with dashes and convert uppercases words into lowercase.

## My way of doing it

1. Divide the replace in two phases.
1.1. Separate words and lowercase them if they are Uppercases.
1.1.1. Check if there are uppercase words.
1.1.2. insert a space and lowercase the char if the anterior char is a letter.
1.1.3. Lowercase the char if there is a space before the char.

1.2. Insert dashes between the words if it is a space or underscore.
1.2.1. Replace the char with dashes.

## Methods used
### replace()

[See Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

#### Syntax
```str.replace(regexp|substr, newSubstr|function)```

This method returns a new string with some or all matches of a pattern replaced by a replacement.

#### Example
```
// String mode
const x = 'hello there!';
x.replace('hello', 'hi');

console.log(x);
```
output 1: *'hi there!'*

```
// RegExp mode
const y = 'hello there!';
x.replace(/\w+/, 'hi');

console.log(y);
```
output 1: *'hi there!'*
