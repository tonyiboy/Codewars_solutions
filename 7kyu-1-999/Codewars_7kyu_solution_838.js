// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.


function findLongest(array){
  
let num = array[0] 
let i = 1
  
  while (i < array.length) {

    if (String(num).length < String(array[i]).length ) num = array[i]
    i++
  }

 return num
  
}
