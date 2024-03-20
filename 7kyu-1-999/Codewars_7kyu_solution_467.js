// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
  
    let arrOne = ""
    let arrTwo = ""
    
    for(let i = 0; i < s.length; i++){
      switch(true){
          case i % 2 === 0 || i === 0:
          arrOne += s[i].toUpperCase();
          break;
          default:
          arrOne += s[i].toLowerCase();
          break;
    }}
  
    for(let i = 0; i < s.length; i++){
      switch(true){
          case i % 2 === 0 || i === 0:
          arrTwo += s[i].toLowerCase();
          break;
          default:
          arrTwo += s[i].toUpperCase();
          break;
      }}
  
    return [arrOne,arrTwo] 
  }