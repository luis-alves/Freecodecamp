# Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe),
in a string to their corresponding HTML entities.
Remember to use Read-Search-Ask if you get stuck. Try to pair program.
Write your own code.

Here are some helpful links:
 * RegExp
 * HTML Entities
 * String.prototype.replace()

## First considerations

Create a new array with the same string except for the above chars. Replace
them with their corresponding html code.

## My way of doing it

1. Create a dictionary with pairs of key/value for each char we are to replace.
2. use the `replace` methods in global mode to search to every char that we are looking for.
3. Return the value for the key we inputed, and had it into the sting.

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
y.replace(/\w+/, 'hi');

console.log(y);
```
output 1: *'hi there!'*
