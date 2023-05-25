// DESCRIPTION:
// Write a function that checks if a given string (case insensitive) is a palindrome.
//  A palindrome is a word, number, phrase, or other sequence of symbols that reads the 
//  same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, 
//  and the sentence: "A man, a plan, a canal – Panama".

function isPalindrome(x) {
    x = x.toLowerCase()
    let a = 0
    let b = x.length
    while (a < b) {
      if (x[a] != x[b-1])
        return false
      a++
      b--
    }
    return true
  }