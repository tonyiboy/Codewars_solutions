// Create a function drop that accepts a list, and a non-negative integer n, and returns a copy of the list that skips the first n elements.

// If you need help, here's a reference:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

function drop(arr, n) {
  let result = [];

    for (let i = n; i < arr.length; i++) {   
        result.push(arr[i]);
    }

    return result;
}