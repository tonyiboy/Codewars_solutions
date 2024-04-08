// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

function hasUniqueChars(str){
   
    let arr = str.split('').sort()
    let i = 0
    
    while(i < arr.length) {
       if(arr[i] === arr[i+1]) {
          return false
       }
      i++
   }
   return true
 }