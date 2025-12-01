// Complete the solution so that the function will break up camel casing, 
// using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  let result = ""

  for (let i in string) {
    if (string[i] === string[i].toUpperCase()) {
        result += " " + string[i] 
    }else result += string[i]
  }

  return result
}


