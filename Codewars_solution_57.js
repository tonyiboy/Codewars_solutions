// Task
// Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.
// To judge the number n. If n is one of the above five constants, return one of these string:
// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"
// Other values should return "Input number is xxx". xxx means this number.

whatNumberIsIt = n => {
    let str = n;
    if (n === Infinity) str = 'Number.POSITIVE_INFINITY';
    if (n === -Infinity) str = 'Number.NEGATIVE_INFINITY';
    if (n === Number.MAX_VALUE) str = 'Number.MAX_VALUE';
    if (n === Number.MIN_VALUE) str = 'Number.MIN_VALUE';
    if (isNaN(n)) str = 'Number.NaN';
    return `Input number is ${str}`;
  }