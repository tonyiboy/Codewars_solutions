// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all words that have five or more letters 
// reversed (just like the name of this kata). Strings passed in will consist of only letters and spaces.
//  Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

function spinWords(string){
  
  let result = ""

  let myArrayWords = string.split(" ")

  myArrayWords.forEach(word => {

    if (word.length >= 5) {

      let temp = ""

      for (let i = 0; i < word.length; i++) {
        temp = word[i] +temp
      }

      result += " " + temp
    } else result +=  " " + word 
  })
  

  return result.trim()
}

console.log(spinWords('This is a test')) 
