// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
  
    function reverseLetter(str) {
    let result = ""

    for(let i = str.length-1; i >= 0; i--) {
        if (str[i].codePointAt(0) >= 97 && str[i].codePointAt(0) <= 122) {
            result += str[i]
        }
               
    }

    return result
  
  
}


  
  
}

console.log(reverseLetter("krishan?"));
