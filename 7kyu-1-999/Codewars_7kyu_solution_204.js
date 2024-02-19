// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let word = ""
    let count = str.length - 1
    do{
      word += str[count]
      count--
    }while(count >= 0) 
    return word.split(" ").reverse().join(" ")
  }