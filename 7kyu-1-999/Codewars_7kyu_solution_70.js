// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str) {
    str = str.toLowerCase()
    let count= 0
    while (count < str.length) {
      if (str.indexOf(str.charAt(count), count + 1) >= 0) {
        return false
      }
    count++
    }
    
    return true
  }