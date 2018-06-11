/**
  * FreeCodeCamp Algorithm exercise
  * Validate US Telephone Numbers
  */

function telephoneCheck(str) {
  // debugger;
  if (str.length < 10 || str.length > 16 || (str[0] === '(' && str[str.length-1] === ')')) {
    return false;
  }
  var regexp = [ /1\s\d{3}-?\s?\d{3}-?\s?\d{4}/, /^1\s\d{3}\s\d{3}\s\d{4}/, /^1\s?\(\d{3}\)\s?\d{3}-\d{4}/, /^5{10}/, /^\d{3}-\d{3}-\d{4}/, /^\(\d{3}\)\d{3}-\d{4}/ ];
  for (var i = 0; i < regexp.length; i++) {
    if (regexp[i].test(str)) {
      return true;
    }
  }
  return false;
}

//Testing

console.log('Tests');
console.log('');
// 1
console.log('Ex. 1');
console.log('My answer is: ' + telephoneCheck("555-555-5555"));
console.log('The correct answer is true');
telephoneCheck("555-555-5555") === true ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 2');
console.log('My answer is: ' + telephoneCheck("1 555-555-5555"));
console.log('The correct answer is true');
telephoneCheck("1 555-555-5555") === true ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 3');
console.log('My answer is: ' + telephoneCheck("1 (555) 555-5555"));
console.log('The correct answer is true');
telephoneCheck("1 (555) 555-5555") === true ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 4');
console.log('My answer is: ' + telephoneCheck("5555555555"));
console.log('The correct answer is true');
telephoneCheck("5555555555") === true ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 5');
console.log('My answer is: ' + telephoneCheck("555-555-5555"));
console.log('The correct answer is true');
telephoneCheck("555-555-5555") === true ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 6');
console.log('My answer is: ' + telephoneCheck("(555)555-5555"));
console.log('The correct answer is true');
telephoneCheck("(555)555-5555") === true ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 7');
console.log('My answer is: ' + telephoneCheck("1(555)555-5555"));
console.log('The correct answer is true');
telephoneCheck("1(555)555-5555") === true ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 8');
console.log('My answer is: ' + telephoneCheck("555-5555"));
console.log('The correct answer is false');
telephoneCheck("555-5555") === false ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 9');
console.log('My answer is: ' + telephoneCheck("5555555"));
console.log('The correct answer is false');
telephoneCheck("5555555") === false ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 10');
console.log('My answer is: ' + telephoneCheck("1 555)555-5555"));
console.log('The correct answer is false');
telephoneCheck("1 555)555-5555") === false ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 11');
console.log('My answer is: ' + telephoneCheck("1 555 555 5555"));
console.log('The correct answer is true');
telephoneCheck("1 555 555 5555") === true ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 12');
console.log('My answer is: ' + telephoneCheck("1 456 789 4444"));
console.log('The correct answer is true');
telephoneCheck("1 456 789 4444") === true ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 13');
console.log('My answer is: ' + telephoneCheck("123**&!!asdf#"));
console.log('The correct answer is false');
telephoneCheck("123**&!!asdf#") === false ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 14');
console.log('My answer is: ' + telephoneCheck("55555555"));
console.log('The correct answer is false');
telephoneCheck("55555555") === false ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 15');
console.log('My answer is: ' + telephoneCheck("(6505552368)"));
console.log('The correct answer is false');
telephoneCheck("(6505552368)") === false ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 16');
console.log('My answer is: ' + telephoneCheck("2 (757) 622-7382"));
console.log('The correct answer is false');
telephoneCheck("2 (757) 622-7382") === false ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 17');
console.log('My answer is: ' + telephoneCheck("0 (757) 622-7382"));
console.log('The correct answer is false');
telephoneCheck("0 (757) 622-7382") === false ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 18');
console.log('My answer is: ' + telephoneCheck("-1 (757) 622-7382"));
console.log('The correct answer is false');
telephoneCheck("-1 (757) 622-7382") === false ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 19');
console.log('My answer is: ' + telephoneCheck("2 757 622-7382"));
console.log('The correct answer is false');
telephoneCheck("2 757 622-7382") === false ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 20');
console.log('My answer is: ' + telephoneCheck("10 (757) 622-7382"));
console.log('The correct answer is false');
telephoneCheck("10 (757) 622-7382") === false ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 21');
console.log('My answer is: ' + telephoneCheck("27576227382"));
console.log('The correct answer is false');
telephoneCheck("27576227382") === false ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 22');
console.log('My answer is: ' + telephoneCheck("(275)76227382"));
console.log('The correct answer is false');
telephoneCheck("(275)76227382") === false ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 23');
console.log('My answer is: ' + telephoneCheck("2(757)6227382"));
console.log('The correct answer is false');
telephoneCheck("2(757)6227382") === false ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 24');
console.log('My answer is: ' + telephoneCheck("2(757)622-7382"));
console.log('The correct answer is false');
telephoneCheck("2(757)622-7382") === false ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 25');
console.log('My answer is: ' + telephoneCheck("555)-555-5555"));
console.log('The correct answer is false');
telephoneCheck("555)-555-5555") === false ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 26');
console.log('My answer is: ' + telephoneCheck("(555-555-5555"));
console.log('The correct answer is false');
telephoneCheck("(555-555-5555") === false ? console.log('Passed') : console.log('Failed');
console.log('----------------------------------');
console.log('Ex. 27');
console.log('My answer is: ' + telephoneCheck("(555)5(55?)-5555"));
console.log('The correct answer is false');
telephoneCheck("(555)5(55?)-5555") === false ? console.log('Passed') : console.log('Failed');
