// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {

    let countX = 0
    let countO = 0
    let i = 0

    while (i < str.length) {

        if (str[i] === "x" || str[i] === "X") {
            countX++
        } else if (str[i] === "o" || str[i] === "O") {
            countO++
        }
        i++
    }

    if (countX === countO) {
        return true
    } else return false

}

console.log(XO("xo"));

