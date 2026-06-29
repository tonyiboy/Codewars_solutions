// You have to create a function which receives 3 number arguments: 2 operands a and b, and the result of an unknown operation performed on them.

// Based on those 3 values you have to return a string, that describes which operation was used to get the given result.

// The possible return strings are: "addition", "subtraction", "multiplication", "division".

// Examples:
// (a = 1, b = 2, result = 3)   --> 1 ? 2 = 3   --> "addition"
// (a = 5, b = 2, result = 2.5) --> 5 ? 2 = 2.5 --> "division"
// Notes
// The / operator performs a plain division without rounding.
// You can assume that there will always be a unique valid answer 
// (no ambiguous cases like e.g. 1 ? 0 = 0 which could be either - or +, or 3 ? 1 = 3 
// which could be either * or /).
// You can assume that there will be no division by 0

const calcType = (a, b, res) => a + b === res ? "addition" : a - b === res ? "subtraction" : a * b === res ?
      "multiplication" : "division"




