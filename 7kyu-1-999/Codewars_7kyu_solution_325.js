// Instructions
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, 
// and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

function capitals(word) {
	
	return word.split('').reduce(function(a, b, c) {
    if(b === b.toUpperCase()){
      return a.concat(c)
    } else return a
  }, []);
}