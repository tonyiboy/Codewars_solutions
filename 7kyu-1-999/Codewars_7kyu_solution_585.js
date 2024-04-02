// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
    let num = '0'
    let i = 0
    
    while(i <array.length) {
      let string = array[i].toString()
      if(string.length > num.length) {
        num = string
      }
      i++
    }
    return parseInt(num);
  }