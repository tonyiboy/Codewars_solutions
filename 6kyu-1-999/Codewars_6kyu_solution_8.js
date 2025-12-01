// Complete the solution so that the function will break up camel casing, 
// using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  let result = ""

  for (let i of string) {
    if (i === i.toUpperCase()) {
        result += " " + i 
    }else result += i
  }

  return result
}


