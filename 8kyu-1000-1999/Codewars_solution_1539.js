// Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []

function odds(values){
  
    let arr = []
  
    let count = 0
    while(count< values.length){
      if(values[count] % 2 !== 0){
        arr.push(values[count])
      }
      count++
    }
    return arr
  }