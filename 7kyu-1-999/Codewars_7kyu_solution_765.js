// Write a function which takes a number as input and returns the sum of the absolute 
// value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
  
  
    let newString = String(number)
    let newArray = []

    for (let i in newString) {

        if (newString[i] === "-") {
            continue
        } else {
            newArray.push(Number(newString[i]))
        }
    }

    return newArray.reduce((acc, cur) => acc + cur)
}