// You will be given a list of strings. You must sort it alphabetically 
// (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.

function twoSort(s) {
    let last = s.sort()[0];
    let a = last[0];
    for(let i = 1; i < last.length; i++) {
      a += "***" + last[i];
    }
    return a;
  }