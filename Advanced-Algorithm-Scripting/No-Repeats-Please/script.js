/**
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

function numberOfPermutationWithoutRepeatingLetters (str) {

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

    console.log(tempArray);
  }



  return finalArray;

}



console.log(numberOfPermutationWithoutRepeatingLetters('abc'));
