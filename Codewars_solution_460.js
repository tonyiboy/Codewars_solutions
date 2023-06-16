// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
    bin = bin.split('').reverse()
    let sum = 0;
    for (let digit in bin){
      sum += bin[digit] * 2 ** digit
    }
    return sum
}