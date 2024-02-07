// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let result = str.toLowerCase().split("")
    let x = 0
    let o = 0
    let count = 0
    while(count < result.length){  
      if(result[count] === "x"){
         x += 1
      }else if(result[count] === "o") {
         o += 1
      }
      count++
      }
  
  return x === o ? true : false
  }