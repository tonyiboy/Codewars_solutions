// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let word = str.split(" ")
    let arr =[]
    let count = 0
    do{
      arr.push(word[count].split("").reverse("").join(""))
      count++
    }while(count < word.length)
      
    return arr.join(" ")
  }