// Task
// Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.
// To judge the number n. If n is one of the above five constants, return one of these string:
// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"
// Other values should return "Input number is xxx". xxx means this number.

function whatNumberIsIt(n){
    let msg = (n===1.7976931348623157e+308) ? "Input number is Number.MAX_VALUE" :
    (n===5e-324) ? "Input number is Number.MIN_VALUE" :
    (isNaN(n)) ? "Input number is Number.NaN" :
    (n===-Infinity) ? "Input number is Number.NEGATIVE_INFINITY" :
    (n===Infinity) ? "Input number is Number.POSITIVE_INFINITY" :
    "Input number is " + n;
     return msg
   }