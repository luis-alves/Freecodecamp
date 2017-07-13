/**
  * FreeCodeCamp Algorithm exercise
  * Inventory Update
  */

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var elementsInArray = [];
    for (var i = 0; i < arr1.length; i++) {
      elementsInArray.push(arr1[i][1]);
    }

    function compareStrings(str1, str2) {
        return str1.localeCompare(str2);
    }

    var notInValues = [];
    var notInArray = [];

    if (arr1.length > 0) {
      for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
          debugger;
          if (elementsInArray.indexOf(arr2[j][1]) === -1) {
            if (notInValues.indexOf(arr2[j][1]) === -1) {
              notInArray.push(arr2[j]);
              notInValues.push(arr2[j][1]);
            }
          }
        }
      }

      for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
          if (arr1[i][1] === arr2[j][1]) {
            arr1[i][0] += arr2[j][0];
          }
        }
      }

      var arr1Copy = arr1;


      for (var i = 0; i < notInArray.length; i++) {
        var count = 0;
        for (var j = 0; j < arr1.length; j++) {
          if (compareStrings(notInArray[i][1], arr1[j][1]) === -1) {
            arr1Copy.splice(arr1Copy.indexOf(arr1[j]), 0, notInArray[i]);
            count += 1;
            break;
          }
        }
        if (count === 0) {
          arr1Copy.push(notInArray[i]);
        }
      }
    } else {
      arr1Copy = arr2.sort(function (a, b) {
        return compareStrings(a[1],b[1]);
      });


    }


    return arr1Copy;
}





// Testing

/*
* This function was retieved from [stackoverflow](https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript) as a way to check arrays equality.
*/
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) ? console.log('Passed') : console.log('Failed');;


// Testing

console.log('Tests:');
console.log('');
console.log('1.:');
console.log('My answer is :' + updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length);
console.log('The correct answer is: 6');
console.log('---------------------------');
console.log('2.:');
console.log('My answer is :' + updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
console.log('The correct answer is: ' + [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].toString());
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).toString() === [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].toString() ? console.log('Passed') : console.log('Failed');
console.log('---------------------------');
console.log('3.:');
console.log('My answer is :' + updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
console.log('The correct answer is: ' + [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].toString());
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).toString() === [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].toString() ? console.log('Passed') : console.log('Failed');
console.log('---------------------------');
console.log('4.:');
console.log('My answer is :' + updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]));
console.log('The correct answer is: ' + [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].toString());
updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]).toString() === [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].toString() ? console.log('Passed') : console.log('Failed');
console.log('---------------------------');
