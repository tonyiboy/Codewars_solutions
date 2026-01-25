// Complete the function that accepts a string parameter, and reverses each word in the string. 
// All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
   let result = ""
    let word = "";

  for (let i of str) {
    if (i === " ") {
      result += word.split("").reverse().join("");
      word = "";
      result += " ";
    } else {
      word += i;
    }
  }

  result += word.split("").reverse().join("");

    return result
}
