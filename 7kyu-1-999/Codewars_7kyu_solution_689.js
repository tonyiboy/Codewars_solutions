// Complete the solution so that it returns true if the first argument(string) 
// passed in ends with the 2nd argument (also a string).

// Examples:

// Inputs: "abc", "bc"
// Output: true

// Inputs: "abc", "d"
// Output: false

function solution(str, ending){
  
    let result = ""
    let count = 0

    for (let i = str.length - 1; i >= 0; i--) {

        if (count !== ending.length) {
            result = str[i] + result
        } else {
            break
        }
        
        count++
    }


    if (result === ending) {
        return true
    } else {
        return false
    }
}
