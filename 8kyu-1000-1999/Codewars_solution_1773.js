"use strict"

// You are an up and coming commentator in the brutal world of pro wrestling.     
// However, you suck at telling who reversed the reversal.

// You will be provided with a string in the format of : "X hit a reversal to Y hit a reversal to X...... 
// hit a reversal to (X/Y)"

// Rules:

// •The string starts and ends with the respective names of the wrestlers 
// (Not necessary that the starting and ending names be the same).

// •Input will always be validated.

// •X and Y will either be letters or single words.

// Determine and return the victor of the match.

// Be careful. Your job is on the line!

function whowon(s) {
  
    let num = 0

  for (let i = s.length - 1; i > 0; i-- ) {
    if(s[i] !== " ") {
      num++
    } else {
      break
    }
  }

  let numResult = s.length - 1 - num - 19
 
  let result = ""

  for (let i = numResult; i >= 0; i--) {
    if (s[i] !== " ") {
      result = s[i] + result
    } else {
      break
    }
  }
  
  return result
}




