# Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that
are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional
number in the sequence is the sum of the two previous numbers. The first
six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers
less than 10 are 1, 1, 3, and 5..

Here are some helpful links:
 * Remainder

## First considerations

I must check for each fibonacci number in a sequence so that it does no exceeds
the number provided in the argument of the function. Also have to check if it
is odd, and if it is I need to add to a total variable.

## My way of doing it

1. Write a function that will output the fibonacci sequence.
2. Write a loop that will increment by 1
2.1. Check if the fibonacci number as reached the given argument number.
2.1.1. If true end Loop
2.1.2. If false check if the value is odd and increment it to a variable.

## Methods used
No methods used
