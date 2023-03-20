// Task
// The function pickIt accepts 1 parameter, arr, which is an array of numbers. 
// We need to traverse arr by using a for loop. If an element is an odd number,
// push it to the odd array, and if it's an even number, push it to the evenarray.
// I've defined two arrays odd and even in the function, and also wrote the return statement.
// Your work is to write a for loop.

function pickIt(arr) {
    const oddEven = [[],[]];
    for (const e of arr)
      oddEven[~e&1].push(e);
    return oddEven; 
  }