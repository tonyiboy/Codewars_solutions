"use strict"

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
  
    let lower = str.toLowerCase()

    for (let i = 0; i < lower.length; i++) {
        let tempOut = str[i]

        for (let j = i + 1; j < lower.length; j++) {
            let tempIn = str[j]

            if (tempOut === tempIn) {
                return false
            }
        }

    }

    return true


}

console.log(isIsogram("moOse"));

