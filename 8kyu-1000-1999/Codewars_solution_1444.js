// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){


    let word = name.toUpperCase().split(" ")
    let wordOne = word[0].split("")[0]
    let wordTwo = word[1].split("")[0]
    
   let result = wordOne + "." + wordTwo
   return result
     
  }