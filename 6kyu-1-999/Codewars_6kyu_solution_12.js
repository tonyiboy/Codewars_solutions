// The main idea is to count all the occurring characters in a string. 
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  
  let lower = string.toUpperCase()
  let result = {}

  for (let i of string) {

    if (result[i]) {
      result[i] = result[i] + 1
    } else {
      result[i] = 1
    }

  }

  return result
}
