// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
  
    let arrOne = ""
    let arrTwo = ""
    let i = 0
    let count = 0
    
    do{
      if(i % 2 === 0 || i === 0){
        arrOne += s[i].toUpperCase()
      }else arrOne += s[i].toLowerCase()     
      i++
    }while(i < s.length)
  
    do{
     if(count % 2 === 0 || count === 0){
        arrTwo += s[count].toLowerCase()
      }else arrTwo += s[count].toUpperCase()
      count++
    }while(count < s.length)
  
    return [arrOne,arrTwo]
     
  };