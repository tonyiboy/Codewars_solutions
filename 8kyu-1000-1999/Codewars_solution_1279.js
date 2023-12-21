// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. 
// Also, the final outcome must be sorted and not have any duplicate.

function mergeArrays(a, b) {
    let arr = a.concat(b).sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        arr.splice(i, 1);
      }
    }
    return arr;
  }