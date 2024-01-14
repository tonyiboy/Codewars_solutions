// Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []

function odds(values){
  
    let arr = []
  
    for(let i = 0; i < values.length; i++){
      if(values[i] % 2 !== 0){
        arr.push(values[i])
      }
    }
    return arr
  }