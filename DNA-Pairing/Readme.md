#DNA Pairing

The DNA strand is missing the pairing element. Take each character,
get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the
provided character.

Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are
grouped into one encapsulating array.


##First considerations

I'm given an array with characters (char) that represent a DNA strand. For each
char it is missing another char, that forms a pair. The possible pairs are:
  * AT;
  * CG.
So if I read an `A` I should add a `T` and vice-versa. But if I get a `C` I
should add a `G` and vice-versa.
I also have to mantain the char that I find as the index 0 of the array that
contains that pair.

##My way of doing it
1. Declare array to store final array;
2. Loop the string
2.1. Create an empty array to accomodate wich pair (empties at each loop);
2.2. Push each char of the string to the empty array;
2.3. Detect wich pair char is missing, and push it to the end of the array;
2.4. Push this pair array to a wrapper array;

##Methods used
###split()

[See Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

####Syntax
```str.split([separator[, limit]])```

This String method splits the string the by the `separator` until the `limit` of
splits is reached.
#### Example
```
const str = "Hello";

const newStr = str.split("");
console.log(newStr);

```
output: *['H', 'e', 'l', 'l', 'o']*


```
const str = "Hello";

const newStr = str.split();
console.log(newStr);
```
output: *['Hello']*


```
const str = "Hello, all, tonight!";

const newStr = str.split(",", 2);
console.log(newStr);
```
output: *['Hello', ' all']*
                    ^------------ it also copies the space


###push()

[See Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

####Syntax
```arr.push([element1[, ...[, elementN]]])```

This method is used in array, as a way to insert an new element at the end
of the array. The opposing method is the `pop()`.

####Example
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
