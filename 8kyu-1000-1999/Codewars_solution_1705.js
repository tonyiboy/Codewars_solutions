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
 

function remove (string) {
    let newString = string.split("")
    let result = []

    newString.forEach(item => {
        if (item !== "!") result.push(item)
    })



    return result.join("") + "!"
} 




