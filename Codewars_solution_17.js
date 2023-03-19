// Task
// The function pickIt accepts 1 parameter, arr, which is an array of numbers. 
// We need to traverse arr by using a for loop. If an element is an odd number,
// push it to the odd array, and if it's an even number, push it to the evenarray.
// I've defined two arrays odd and even in the function, and also wrote the return statement.
// Your work is to write a for loop.

function pickIt(arr){
    var odd=[],even=[]
    //coding here
    for (var i=0;i<arr.length;i++){
      if (arr[i]%2==1) odd.push(arr[i]);
      else            even.push(arr[i]);
    }
    return [odd,even];
  }