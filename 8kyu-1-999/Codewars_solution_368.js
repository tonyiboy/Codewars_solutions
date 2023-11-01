// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function findAverage(arr) {
    return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
}