// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

function hasUniqueChars(str){
  
    let i = 0
    while (i < str.length) {
      if (str.lastIndexOf(str[i]) !== i){
        return false
      } 
      i++
    } 
         return true
  }