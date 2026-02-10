// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, 
// and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.


function capitalize(s){
  let evenResult = []
  let oddResult = []
  
  for (let i = 0; i < s.length; i++) {  
      if (i % 2 === 0) {
          evenResult.push(s[i].toUpperCase())
        } else {
            evenResult.push(s[i].toLowerCase())
    }

    if (i % 2 !== 0) {
        oddResult.push(s[i].toUpperCase())
    } else {
        oddResult.push(s[i].toLowerCase())
    }    
}   

  return [evenResult.join(""), oddResult.join("")]
}

console.log(capitalize("abcdef"));
