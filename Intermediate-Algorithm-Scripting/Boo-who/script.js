/* FreeCodeCamp Algorithm exercise
   Boo Who */

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return typeof bool === 'boolean'
}

// booWho(null);


// Testing

console.log(booWho(true) ? 'passed' : 'failed');
// expected output: true
console.log(booWho(false) ? 'passed' : 'failed' );
// expected output: true
console.log(booWho([1, 2, 3]) ? 'failed' : 'passed');
// expected output: false
console.log(booWho([].slice) ? 'failed' : 'passed');
// expected output: false
console.log(booWho({ "a": 1 }) ? 'failed' : 'passed');
// expected output: false
console.log(booWho(1) ? 'failed' : 'passed');
// expected output: false
console.log(booWho(NaN) ? 'failed' : 'passed');
// expected output: false
console.log(booWho("a") ? 'failed' : 'passed');
// expected output: false
console.log(booWho("true") ? 'failed' : 'passed');
// expected output: false
console.log(booWho("false") ? 'failed' : 'passed');
// expected output: false
