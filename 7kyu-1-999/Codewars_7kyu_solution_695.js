// Complete the function that accepts a string parameter, and reverses each word in the string. 
// All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  
    let result = ""
    let word = "";
    let i = 0

    do {
    if (str[i] === " ") {
      result += word.split("").reverse().join("");
      word = "";
      result += " ";
    } else {
      word += str[i];
    }
    i++
  } while (i < str.length)

  result += word.split("").reverse().join("");

    return result

}
