/**
<<<<<<< HEAD
  * FreeCodeCamp Algorithm exercise
  * No Repeats Please
  *
  * Return the number of total permutations of the provided string that don't
  * have repeated consecutive letters. Assume that all characters in the
  * provided string are each unique.
  *
  * For example, aab should return 2 because it has 6 total permutations
  * (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba)
  * don't have the same letter (in this case a) repeating.
  *
  * */


  function removeItemFromArray(item, arrayWithItems) {
    console.log('____remove Items______');
    var removedItem = arrayWithItems.splice(item, 1);
    return arrayWithItems;
  }
=======
 * FreeCodeCamp Algorithm exercise
 * No Repeats Please
 */

>>>>>>> ddc5068cb7668635117a9e2021efcc7cd4c14e83

function NumberOfPermutationWithoutRepeatingLetters(str) {

  var arrayStr = [];

<<<<<<< HEAD
  for (var a = 0; a < str.length; a++) {
    arrayStr.push(str[a]);
  }
  console.log(arrayStr)
  // var arrayString = str.split('');
  var finalArray = [];
  var result = 0;
  var count = 0;
  var resultArray = []

  if (arrayStr.length === 1) {
    return 1;
  }

  for (var i = 0; i < arrayStr.length; i++) {
    var movingChar = arrayStr[i]
    var copyArray = arrayStr.slice();
    var remainingArray = removeItemFromArray(i, copyArray);
    for (var j = 0; j < remainingArray.length; j++) {
      var middleArray = []
      middleArray.push(movingChar[0])
      for (var k = j; k < remainingArray.length + j; k++) {
        middleArray.push(remainingArray[k%(remainingArray.length)])
      }
      console.log(j + ' ' + middleArray)
    finalArray.push(middleArray);
    }
    console.log(i + ' final ' + finalArray)
    console.log('_________________')
  }
=======
  let convertedStrToArray = [];
  let finalArray = [];

  for (let i = 0; i < str.length; i++) {
    convertedStrToArray.push(str[i]);
  }

  let copiedOriginalArray = convertedStrToArray.slice();

  for (let i = 0; i < convertedStrToArray.length-2; i++) {
    copiedOriginalArray.splice(convertedStrToArray.length-2, 2);
    copiedOriginalArray.push(convertedStrToArray[convertedStrToArray.length-1]);
    copiedOriginalArray.push(convertedStrToArray[convertedStrToArray.length-2]);
    finalArray.push(copiedOriginalArray);
    let tempArray = copiedOriginalArray.slice();
>>>>>>> ddc5068cb7668635117a9e2021efcc7cd4c14e83

    console.log(tempArray);
  }



  return finalArray;

}



<<<<<<< HEAD
console.log(NumberOfPermutationWithoutRepeatingLetters('abc'));
=======







console.log(permAlone('abcd'));
>>>>>>> ddc5068cb7668635117a9e2021efcc7cd4c14e83
