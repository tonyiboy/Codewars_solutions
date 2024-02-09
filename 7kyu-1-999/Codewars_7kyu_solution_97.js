// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(str) {
	str = str.split('')
  let result = []
  for (var i = 0; i < str.length; i++) {
    result.push(str[i].toUpperCase() + Array(i + 1).join(str[i].toLowerCase()))
  }
  return result.join('-')
}