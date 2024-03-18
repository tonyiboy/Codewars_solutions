// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

function noOdds( values ){
  
    let result = []
    let count = 0
    
    while(count < values.length){
        if(values[count] % 2 === 0){
          result.push(values[count])
        }
      count++
    }
    
    return result
  }