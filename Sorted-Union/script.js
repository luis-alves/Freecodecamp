/* FreeCodeCamp Algorithm exercise
   Sorted Union */

function uniteUnique(arr) {





  return [1, 3, 2];
}





// Testing

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) == [1, 3, 2, 5, 4] ? 'passed' : 'failed');

console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) == [1, 3, 2, [5], [4]] ? 'passed' : 'failed');

console.log(uniteUnique([1, 2, 3], [5, 2, 1]) == [1, 2, 3, 5] ? 'passed' : 'failed');

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) == [1, 2, 3, 5, 4, 6, 7, 8] ? 'passed' : 'failed');
