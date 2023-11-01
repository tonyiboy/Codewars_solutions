// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

var findAverage = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }