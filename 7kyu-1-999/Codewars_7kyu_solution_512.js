// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x){
    let result = 0
    let i = 0
    
    do{
       typeof x[i] === 'number' ? result += x[i] : result -= x[i]
      i++
    }while(i < x.length)
    return result
  }