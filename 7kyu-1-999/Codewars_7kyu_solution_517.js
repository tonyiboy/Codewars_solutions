// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x){
    let result = 0
     
    for(let i of x){
       typeof i === 'number' ? result += i : result -= i  
    }
    return result
  }