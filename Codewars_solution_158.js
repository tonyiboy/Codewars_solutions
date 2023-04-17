// Task
// Coding in function threeInOne. function accept 1 parameters arr, 
// it's a 1D number array. Your task is to merge each of the 3 elements 
// into 1 elements (sum value) and return the result.
// Note1: You should not modify the original array.
// Note2: Because this is a beginner Kata, and due to the author's mercy ;-),
// so you do not have to verify the validity of the parameter, and do not worry
// about the number of elements of the array is not a multiple of 3.
// Example:
// threeInOne( [1,2,3]) should return [6]
// threeInOne( [1,2,3,4,5,6]) should return [6,15]
// threeInOne( [1,2,3,4,5,6,7,8,9]) should return [6,15,24]
// threeInOne( [1,3,5,2,4,6,7,7,7]) should return [9,12,21]

function threeInOne(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 3) {
      result.push(arr.slice(i, i + 3).reduce((a, b) => a + b, 0));
    }
    return result;
  }