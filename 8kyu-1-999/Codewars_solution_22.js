// Task
// The function pickIt accepts 1 parameter, arr, which is an array of numbers. 
// We need to traverse arr by using a for loop. If an element is an odd number,
// push it to the odd array, and if it's an even number, push it to the evenarray.
// I've defined two arrays odd and even in the function, and also wrote the return statement.
// Your work is to write a for loop.

pickIt = arr => {
    let odd = [], even = [];
    for (let num of arr) num & 1 ? odd.push(num) : even.push(num);
    return [odd,even];
  }