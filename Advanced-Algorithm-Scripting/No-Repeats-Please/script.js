/**
 * FreeCodeCamp Algorithm exercise
 * No Repeats Please
 */



function permAlone(str) {

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










console.log(permAlone('abcd'));
