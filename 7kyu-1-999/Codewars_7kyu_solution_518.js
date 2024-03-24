// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x){
    let result = 0
     
    for(let i of x){
       if(typeof i === 'number'){
          result += i
        }else{
          result -= i
        }      
    }
    return result
  }