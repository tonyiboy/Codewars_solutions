// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let word = ""
    let count = str.length - 1
    for (;count >= 0;count--){
      word += str[count]   
    }
    return word.split(" ").reverse().join(" ")
  }