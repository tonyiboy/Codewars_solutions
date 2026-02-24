// Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. 
// For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!"
// "!Hi"     ---> "Hi!"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi!"

// function remove (string) {
//     let result = ""
//     let i = 0

//     do {
//         if (string[i] !== "!") {
//             result += string[i]
//         }
//       i++
//     } while (i < string.length)

//     return result + "!"
// } 


function remove (string) {
    let result = ""

    for (let i in string) {
        if (string[i] !== "!") {
            result += string[i]
        }
    }

    return result + "!"
} 



