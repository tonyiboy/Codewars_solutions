// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x){
    let result = 0
     
    for(let i in x){
       typeof x[i] === 'number' ? result += x[i] : result -= x[i]  
    }
    return result
  }