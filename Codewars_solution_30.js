// Task
// The function giveMeFive accepts 1 parameter, obj, which is an object.
// Create an array (which you will eventually return). Then, traverse obj, 
// checking each key and value. If the length of the key is equal to 5, then 
// push the key to your array. Separately, if the length of the value is equal to 5, 
// then push the value to your array.At the end, return your array.

giveMeFive = obj => 
  Object              // converting instead for ( in )
    .entries(obj)
    .join(',')
    .split(',')         
    .filter(i => i.length == 5);