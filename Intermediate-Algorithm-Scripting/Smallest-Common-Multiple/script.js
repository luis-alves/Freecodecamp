/**
  * FreeCodeCamp Algorithm exercise
  * Smallest Common Multiple
  */

function smallestCommons(arr) {
  arg0 = arr[0];
  arg1 = arr[1];

  var list = [];
  if (arg0 < arg1) {
    for (var i = arg0; i <= arg1; i++) {
      list.push(i);
    }
  } else {
    for (var i = arg1; i <= arg0; i++) {
      list.push(i);
    }
  }

  var indexNumber = 1;
  var breakPoint = 1;

  while (breakPoint === 1) {
    var count = 0;
    for (var i = 0; i < list.length; i++) {
      if (indexNumber%list[i] === 0) {
        count++;
      }
    }
    if (count === list.length) {
      return indexNumber;
    }
    indexNumber++;
  }

  /* Will leave this to show my thinking before I went with the modulus option */

  /* Recursive possibility */
  // var arg0 = arr[0];
  // var arg1 = arr[1];
  // bui++;
  // console.log(bui);
  // debugger;
  //
  // // Base case
  // if (arg1 < arg0) {
  //   return list[0];
  // } else if (arg0 === 1) {
  //     for (var i = 1; i < 1000000; i++) {
  //       list.push(i);
  //     }
  // } else {
  //     for (var j = 1; j < 1000000; j++) {
  //       if (list.indexOf(j*arg0) !== -1) {
  //         list2.push(list[list.indexOf(j*arg0)]);
  //
  //       }
  //     }
  //     list = list2;
  //     list2 = [];
  // }
  //
  // //Recursive case
  // return smallestCommons([arg0 + 1, arg1]);


  /* Loop option */
  // var list = [];
  // for (var i = 1 ; i < 100; i++) {
  //   if (list.indexOf(i*1) === -1) {
  //     list.push(i);
  //   }
  // }
  //
  // var list2 = []
  // for (var j = 0; j < 100; j++) {
  //   if (list.indexOf(j*2) !== -1) {
  //     list2.push(list[list.indexOf(j*2)]);
  //   }
  // }
  //
  // list = [];
  // for (var k = 0; k < 100; k++) {
  //   if (list2.indexOf(k*3) !== -1) {
  //     list.push(list2[list2.indexOf(k*3)]);
  //   }
  // }
  //
  // list2 = [];
  // for (var l = 0; l < 100; l++) {
  //   if (list.indexOf(l*4) !== -1) {
  //     list2.push(list[list.indexOf(l*4)]);
  //   }
  // }
  //
  // list = [];
  //   for (var m = 0; m < 100; m++) {
  //   if (list2.indexOf(m*5) !== -1) {
  //     list.push(list2[list2.indexOf(m*5)]);
  //   }
  // }



  // console.log(list);
  // console.log(i*2);
  // console.log(list.indexOf(i*2));

  // return list;
}



// Testing
console.log('Tests:');
console.log('');
console.log('My answer is: ' + smallestCommons([1, 5]));
console.log('The right answer is: 60');
smallestCommons([1, 5]) === 60 ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------------------');
console.log('My answer is: ' + smallestCommons([1, 13]));
console.log('The right answer is: 60');
smallestCommons([1, 13]) === 360360 ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------------------');
console.log('My answer is: ' + smallestCommons([13, 1]));
console.log('The right answer is: 60');
smallestCommons([13, 1]) === 360360 ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------------------');
console.log('My answer is: ' + smallestCommons([18, 23]));
console.log('The right answer is: 60');
smallestCommons([18, 23]) === 6056820 ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------------------');
