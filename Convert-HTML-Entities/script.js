/**
  * FreeCodeCamp Algorithm exercise
  * Convert HTML Entities
  */

  function convertHTML(str) {
    // &colon;&rpar;
    var entities = {
      '&':'&amp;',
      '<':'&lt;',
      '>':'&gt;',
      '"':'&quot;',
      "'":'&apos;',
    }

    // const replacer = (match, offset, string) => {
    //   return entities[match];
    // };

    function replacer(match, offset, string) {
      return entities[match];
    }

    var result = str.replace(/[&<>"']/g, replacer);

    return result;
  }

  // Testing

  console.log('Tests:');
  console.log('----------------------');
  console.log('My answer is: ' + convertHTML("Dolce & Gabbana"));
  console.log('the correct answer is: Dolce &amp; Gabbana');
  convertHTML("Dolce & Gabbana").localeCompare('Dolce &amp; Gabbana') === 0 ? console.log('passed') : console.log('failed');
  console.log('----------------------');
  console.log('My answer is: ' + convertHTML("Hamburgers < Pizza < Tacos"));
  console.log('the correct answer is: Hamburgers &​lt; Pizza &​lt; Tacos');
  convertHTML("Hamburgers < Pizza < Tacos").localeCompare('Hamburgers &​lt; Pizza &​lt; Tacos') === 0 ? console.log('passed') : console.log('failed');
  console.log('----------------------');
  console.log('My answer is: ' + convertHTML("Sixty > twelve"));
  console.log('the correct answer is: Sixty &​gt; twelve');
  convertHTML("Sixty > twelve").localeCompare('Sixty &​gt; twelve') === 0 ? console.log('passed') : console.log('failed');
  console.log('----------------------');
  console.log('My answer is: ' + convertHTML('Stuff in "quotation marks"'));
  console.log('the correct answer is: Stuff in &​quot;quotation marks&​quot;');
  convertHTML('Stuff in "quotation marks"').localeCompare('Stuff in &​quot;quotation marks&​quot;') === 0 ? console.log('passed') : console.log('failed');
  console.log('----------------------');
  console.log('My answer is: ' + convertHTML("Shindler's List"));
  console.log('the correct answer is: Shindler&​apos;s List');
  convertHTML("Shindler's List").localeCompare('Shindler&​apos;s List') === 0 ? console.log('passed') : console.log('failed');
  console.log('----------------------');
  console.log('My answer is: ' + convertHTML("<>"));
  console.log('the correct answer is: &​lt;&​gt;');
  convertHTML("<>").localeCompare('&​lt;&​gt;') === 0 ? console.log('passed') : console.log('failed');
  console.log('----------------------');
  console.log('My answer is: ' + convertHTML("abc"));
  console.log('the correct answer is: abc');
  convertHTML("abc").localeCompare('abc') === 0 ? console.log('passed') : console.log('failed');
