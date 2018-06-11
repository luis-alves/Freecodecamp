/**
  * FreeCodeCamp Algorithm exercise
  * Spinal Tap Case
  */

  function spinalCase(str) {

    function replacer(match, offset, string) {
        return match = '-';
      }

    function replacerCapitals(match, offset, string) {
      var alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
      var alphabetCapitals = alphabetLower.toUpperCase();

      if (alphabetLower.indexOf(string[offset-1]) !== -1) {
        match = ' ' + match.toLowerCase();
      } else {
        match = match.toLowerCase();
      }

      return match;
    }

    // var strLowerCase = str.toLowerCase();
    var result = str.replace(/[A-Z]/g, replacerCapitals);
    result = result.replace(/[\s_]/g, replacer);

    return result;
  }

  // Testing

  console.log('Tests:');
  console.log('----------------------');
  console.log('My answer is: ' + spinalCase("This Is Spinal Tap"));
  console.log('the correct answer is: this-is-spinal-tap');
  spinalCase("This Is Spinal Tap").localeCompare('this-is-spinal-tap') === 0 ? console.log('passed') : console.log('failed');
  console.log('----------------------');
  console.log('My answer is: ' + spinalCase("thisIsSpinalTap"));
  console.log('the correct answer is: this-is-spinal-tap');
  spinalCase("thisIsSpinalTap").localeCompare('this-is-spinal-tap') === 0 ? console.log('passed') : console.log('failed');
  console.log('----------------------');
  console.log('My answer is: ' + spinalCase("The_Andy_Griffith_Show"));
  console.log('the correct answer is: the-andy-griffith-show');
  spinalCase("The_Andy_Griffith_Show").localeCompare('the-andy-griffith-show') === 0 ? console.log('passed') : console.log('failed');
  console.log('----------------------');
  console.log('My answer is: ' + spinalCase('Teletubbies say Eh-oh'));
  console.log('the correct answer is: teletubbies-say-eh-oh');
  spinalCase('Teletubbies say Eh-oh').localeCompare('teletubbies-say-eh-oh') === 0 ? console.log('passed') : console.log('failed');
  console.log('----------------------');
  console.log('My answer is: ' + spinalCase("AllThe-small Things"));
  console.log('the correct answer is: all-the-small-things');
  spinalCase("AllThe-small Things").localeCompare('all-the-small-things') === 0 ? console.log('passed') : console.log('failed');
