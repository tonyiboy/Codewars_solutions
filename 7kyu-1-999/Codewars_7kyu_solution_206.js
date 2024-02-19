// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let word = str.split(" ")
    let arr =[]
    let count = 0
    while (count < word.length){
      arr.push(word[count].split("").reverse("").join(""))
      count++
    } 
      
    return arr.join(" ")
  }