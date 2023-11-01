// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function findAverage(array) {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i];
    }
    let result = total / array.length;
      if(array.length === 0){
        return 0
      }else{
      return result
    }
      }