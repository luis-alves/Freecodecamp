/**
  * FreeCodeCamp Algorithm exercise
  * Record Collection
  */

  // Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

  if (!(prop in collection[id])) {
    if (prop === 'tracks') {
      collectionCopy[id][prop] = [];
      collectionCopy[id][prop].push(value)
    } else {
      collectionCopy[id][prop] = value;
    }
  } else {
    if (value === '' ) {
      delete collectionCopy[id][prop]
    }

    if (prop === 'tracks' && value !== '') {
      collectionCopy[id][prop].push(value);
    }
  }

  return collectionCopy;
}

// Alter values below to test your code

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

console.log('Tests');
console.log('');
console.log('1:');
updateRecords(5439, "artist", "ABBA")[5439]['artist'] === 'ABBA' ? console.log('Passed') : console.log('Failed');
console.log('2:');
updateRecords(5439, "tracks", "Take a Chance on Me")[5439]['tracks'].equals(['Take a Chance on Me']) ? console.log('Passed') : console.log('Failed');
console.log('3:');
updateRecords(2548, "artist", "")[2548]['artist'] === undefined ? console.log('Passed') : console.log('Failed');
console.log('4:');
updateRecords(1245, "tracks", "Addicted to Love")[1245]['tracks'].equals(['Addicted to Love']) ? console.log('Passed') : console.log('Failed');
console.log('5:');
updateRecords(2468, "tracks", "Free")[2468]['tracks'].equals(['1999', 'Little Red Corvette', 'Free']) ? console.log('Passed') : console.log('Failed');
console.log('6:');
updateRecords(2548, "tracks", "")[2548]['tracks'] === undefined ? console.log('Passed') : console.log('Failed');
