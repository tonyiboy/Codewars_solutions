// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(str) {
    let arr = []
    let count = 0
    do{
      arr.push(str.charAt(count).toUpperCase() + str.charAt(count).toLowerCase().repeat(count))
      count++
    }while(count < str.length)
    return arr.join("-")
  }