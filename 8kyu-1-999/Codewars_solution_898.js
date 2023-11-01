// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

function maps(x){

    let newArr = [];
    
    x.map(function(y){
      newArr.push(y*2);
  });
  
  return newArr;
  
  
  
  }