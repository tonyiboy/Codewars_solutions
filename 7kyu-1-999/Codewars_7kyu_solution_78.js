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
    let xx = 0
    let o = 0
    
    result.filter(x =>{
      if(x === "x"){
         xx += 1
      }else if(x === "o") {
         o += 1}
    })
  
  return xx === o ? true : false
  }