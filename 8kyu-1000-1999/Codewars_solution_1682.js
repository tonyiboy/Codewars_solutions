// Given a number n, draw stairs using the letter "I", n tall and n wide, 
// with the tallest in the top left.

// For example n = 3 result in:

// "I\n I\n  I"
// or printed:

// I
//  I
//   I
// Another example, a 7-step stairs should be drawn like this:

// I
//  I
//   I
//    I
//     I
//      I
//       I

function drawStairs(n) {
  let result = ""
  let space = ""
  let i = 1

  while  (i <= n) {
    if (i !== n) {
      result += space + "I\n"
    } else {
      result += space + "I"
    }
    space += " "
    i++
  }

  return result
}
