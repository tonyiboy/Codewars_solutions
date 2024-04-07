// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x){
    let result = ""
    let i = 0
    
    do{
       if (x[i] === 'a') {
          result += 'b'
        } else if (x[i] === 'b') {
          result += 'a'
        } else {
          result += x[i]
        }
      i++
    }while(i < x.length)
  return result
  }