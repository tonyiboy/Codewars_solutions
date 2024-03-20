// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
  
    let arrOne = ""
    let arrTwo = ""
    let i = 0
    let count = 0
    
    while(i < s.length){
       switch(true){
          case i % 2 === 0 || i === 0:
          arrOne += s[i].toUpperCase();
          break;
          default:
          arrOne += s[i].toLowerCase();
          break;
        }
      i++
    }
  
    while(count < s.length){
      switch(true){
          case count % 2 === 0 || count === 0:
          arrTwo += s[count].toLowerCase();
          break;
          default:
          arrTwo += s[count].toUpperCase();
          break;
      }
      count++
    }
  
    return [arrOne,arrTwo]
     
  };