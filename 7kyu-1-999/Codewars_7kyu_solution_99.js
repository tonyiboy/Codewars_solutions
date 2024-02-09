// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(str) {
	str = str.split('')
  let result = []
  let count = 0
  do{
    result.push(str[count].toUpperCase() + Array(count + 1).join(str[count].toLowerCase()))
    count++
  }while(count < str.length) 
  return result.join('-')
}