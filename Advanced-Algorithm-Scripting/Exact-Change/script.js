/**
  * FreeCodeCamp Algorithm exercise
  * Exact Change
  */

function checkCashRegister(price, cash, cid) {
  var dicCID = {};
  var totalCashInDrawer = 0;
  for (var i = 0; i < cid.length; i++) {
    dicCID[cid[i][0]] = cid[i][1];
    totalCashInDrawer += cid[i][1];
  }
  var finalArray = [];
  var value = '';
  var numberBillsWithSameValue = 0;

  var change = cash - price;
  if (change > totalCashInDrawer) {
    return 'Insufficient Funds';
  } else if (change === totalCashInDrawer) {
    return 'Closed';
  }

  if (change >= 100 && dicCID['ONE HUNDRED'] >= 100 && change % 100 !== change) {
    debugger;
    value = 'ONE HUNDRED';
    var bucket = [];

    numberBillsWithSameValue = Math.floor(change / 100) * 100;

    change = (change % 100).toFixed(2);
    bucket.push(value);
    if (numberBillsWithSameValue > dicCID['ONE HUNDRED']) {
      bucket.push(dicCID['ONE HUNDRED']);
    } else {
      bucket.push(numberBillsWithSameValue);
    }
    finalArray.push(bucket);
  }
  if (change >= 20 && dicCID['TWENTY'] >= 20 && change % 20 !== change) {
    value = 'TWENTY';
    bucket = [];

    numberBillsWithSameValue = Math.floor(change / 20) * 20;

    change = (change - dicCID['TWENTY']);
    bucket.push(value);
    if (numberBillsWithSameValue > dicCID['TWENTY']) {
      bucket.push(dicCID['TWENTY']);
    } else {
      bucket.push(numberBillsWithSameValue);
    }
    finalArray.push(bucket);
  }
  if (change >= 10 && dicCID['TEN'] >= 10 && change % 10 !== change) {
    value = 'TEN';
    bucket = [];

    numberBillsWithSameValue = Math.floor(change / 10) * 10;

    change = change - dicCID['TEN'];
    bucket.push(value);
    if (numberBillsWithSameValue > dicCID['TEN']) {
      bucket.push(dicCID['TEN']);
    } else {
      bucket.push(numberBillsWithSameValue);
    }
    finalArray.push(bucket);
  }
  if (change >= 5 && dicCID['FIVE'] >= 5 && change % 5 !== change) {
    value = 'FIVE';
    bucket = [];

    numberBillsWithSameValue = Math.floor(change / 5) * 5;

    change = (change % 5).toFixed(2);
    bucket.push(value);
    if (numberBillsWithSameValue > dicCID['FIVE']) {
      bucket.push(dicCID['FIVE']);
    } else {
      bucket.push(numberBillsWithSameValue);
    }
    finalArray.push(bucket);
  }
  debugger;
  if (change >= 1 && dicCID['ONE'] >= 1 && change % 1 !== change) {
    value = 'ONE';
    bucket = [];

    numberBillsWithSameValue = Math.floor(change / 1) * 1;

    change = (change % 1).toFixed(2);
    bucket.push(value);
    if (numberBillsWithSameValue > dicCID['ONE']) {
      bucket.push(dicCID['ONE']);
    } else {
      bucket.push(numberBillsWithSameValue);
    }
    finalArray.push(bucket);
  }
  if (change >= 0.25 && dicCID['QUARTER'] >= 0.25 && change % 0.25 !== change) {
    value = 'QUARTER';
    bucket = [];

    numberBillsWithSameValue = Math.floor(change / 0.25) * 0.25;

    change = (change % 0.25).toFixed(2);
    bucket.push(value);
    if (numberBillsWithSameValue > dicCID['QUARTER']) {
      bucket.push(dicCID['QUARTER']);
    } else {
      bucket.push(numberBillsWithSameValue);
    }
    finalArray.push(bucket);
  }
  if (change >= 0.10 && dicCID['DIME'] >= 0.10 && change % 0.10 !== change) {
    value = 'DIME';
    bucket = [];

    numberBillsWithSameValue = Math.floor(change / 0.10) * 0.10;

    change = (change % 0.10).toFixed(2);
    bucket.push(value);
    if (numberBillsWithSameValue > dicCID['DIME']) {
      bucket.push(dicCID['DIME']);
    } else {
      bucket.push(numberBillsWithSameValue);
    }
    finalArray.push(bucket);
  }
  if (change >= 0.05 && dicCID['NICKEL'] >= 0.05 && change % 0.05 !== change) {
    value = 'NICKEL';
    bucket = [];

    numberBillsWithSameValue = Math.floor(change / 0.05) * 0.05;

    change = (change % 0.05).toFixed(2);
    bucket.push(value);
    if (numberBillsWithSameValue > dicCID['NICKEL']) {
      bucket.push(dicCID['NICKEL']);
    } else {
      bucket.push(numberBillsWithSameValue);
    }
    finalArray.push(bucket);
  }
  if (change >= 0.01 && dicCID['PENNY'] >= 0.01 && change % 0.01 !== change) {
    value = 'PENNY';
    bucket = [];

    numberBillsWithSameValue = Math.floor(change / 0.01) * 0.01;

    change = (change % 0.01).toFixed(2);
    bucket.push(value);
    if (numberBillsWithSameValue > dicCID['PENNY']) {
      bucket.push(dicCID['PENNY']);
    } else {
      bucket.push(numberBillsWithSameValue);
    }
    finalArray.push(bucket);
  }

if (change > 0) {
    return 'Insufficient Funds';
  }
  // Here is your change, ma'am.
  return finalArray;
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

console.log('Tests:');
console.log('');
console.log('1.:');
console.log('My answer is: ' + checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
console.log('The correct answer is: should return an array');
Array.isArray(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]))? console.log('Passed') : console.log('Failed');
console.log('-------------------------');
console.log('2.:');
console.log('My answer is: ' + checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log('The correct answer is: should return a string');
typeof checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) === 'string' ? console.log('Passed') : console.log('Failed');
console.log('-------------------------');
console.log('3.:');
console.log('My answer is: ' + checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log('The correct answer is: should return a string');
typeof checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) === 'string' ? console.log('Passed') : console.log('Failed');
console.log('-------------------------');
console.log('4.:');
console.log('My answer is: ' + checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
console.log('The correct answer is: [["QUARTER", 0.50]]');
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]).equals([["QUARTER", 0.50]]) ? console.log('Passed') : console.log('Failed');
console.log('-------------------------');
console.log('5.:');
console.log('My answer is: ' + checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
console.log('The correct answer is: [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]');
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]).equals([["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]) ? console.log('Passed') : console.log('Failed');
console.log('-------------------------');
console.log('6.:');
console.log('My answer is: ' + checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log('The correct answer is: "Insufficient Funds"');
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) === 'Insufficient Funds' ? console.log('Passed') : console.log('Failed');
console.log('-------------------------');
console.log('7.:');
console.log('My answer is: ' + checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log('The correct answer is: "Insufficient Funds"');
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) === 'Insufficient Funds' ? console.log('Passed') : console.log('Failed');
console.log('-------------------------');
console.log('8.:');
console.log('My answer is: ' + checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log('The correct answer is: "Closed"');
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) === 'Closed' ? console.log('Passed') : console.log('Failed');
console.log('-------------------------');
