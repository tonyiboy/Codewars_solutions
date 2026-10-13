// Create a function drop that accepts a list, and a non-negative integer n, and returns a copy of the list that skips the first n elements.

// If you need help, here's a reference:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

function drop(list, n) {   
    let result = [];

    for (let i = n; i < list.length; i++) {
        result[i - n] = list[i];
    }

    return result;
}