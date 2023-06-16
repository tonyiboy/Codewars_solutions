// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
    let result = 0;
    for (let i = 0; i < bin.length; i++) {
      if (bin[bin.length-i-1] == 1) {
      result+=Math.pow(2,i);
      }
    }
    return result;
  }