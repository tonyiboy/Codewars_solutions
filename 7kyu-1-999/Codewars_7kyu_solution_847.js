// Task
// Given a list of digits, return the smallest number that could be formed from these digits, 
// using the digits only once (ignore duplicates). Only positive integers in the range of 1 to 9 will be passed to the function.

// Examples
// [1, 3, 1] ==> 13
// [5, 7, 5, 9, 7] ==> 579
// [1, 9, 3, 1, 7, 4, 6, 6, 7]  ==> 134679

function minValue(values){
let unique = [];
  let i = 0

  // remove duplicates
  do {
    if (!unique.includes(values[i])) {
      unique.push(values[i]);
    }
    i++
  }while (i < values.length) 

  // sort numbers
  unique.sort(function(a, b) {
    return a - b;
  });

  // build number
  let result = "";
  for (let i = 0; i < unique.length; i++) {
    result += unique[i];
  }

  return Number(result);
}