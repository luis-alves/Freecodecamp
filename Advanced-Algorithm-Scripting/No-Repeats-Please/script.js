/**
  * FreeCodeCamp Algorithm exercise
  * No Repeats Please
  */



function permAlone(str) {

  var arrayString = str.split('');
  var finalArray = [];

  for (var i = 0; i < arrayString.length; i++) {
    debugger;
    var tempArray = JSON.parse(JSON.stringify(arrayString));
    var charToMove = tempArray.splice(i, 1);
    var fixedArray = JSON.parse(JSON.stringify(tempArray));
    for (var j = 0; j < arrayString.length - 1; j++) {
      tempArray.splice((i+j+1) % arrayString.length, 0, charToMove[0]);
      var temp = JSON.parse(JSON.stringify(tempArray));
      tempArray = JSON.parse(JSON.stringify(fixedArray));
      finalArray.push(temp);
      // console.log(finalArray);
    }
  }




//   for (var i = 0; i < arrayString.length; i++) {
//     // debugger;
//     var newTemp = JSON.parse(JSON.stringify(temp));
//     var charToMove = str.split('').splice(i, 1);
//     copyArray.splice(0, 1);
//     for (var j = 0; j < arrayString.length - 1; j++) {
//       copyArray.splice(j+1, 0, charToMove[0]);
//       var t = JSON.parse(JSON.stringify(copyArray));
//       if (copyArray.equals(arrayString)) {
//         break;
//       }
//       finalArray.push(t);
// debugger;
//       newTemp.splice(0, 1);
//       copyArray = newTemp;
//
//     }
//     var temp = JSON.parse(JSON.stringify(finalArray[finalArray.length - 1]));
//     copyArray = temp;
//   }





  return finalArray;

}










console.log(permAlone('abc'));
