// In this kata, your job is to return the two distinct highest values in a list. 
// If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

function twoHighest(arr) {
  let result = []

  arr.sort((a,b) => b - a)
  
  for (let i = 0; i < arr.length; i++) {

    for(let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
        j--
      }
    }

  }
  

  return arr.slice(0,2)


}

console.log(twoHighest([15, 20, 20, 17]));
