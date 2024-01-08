// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item){
    let result
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === item){
        result = arr[i]
        }
      }
      return result === item ? true : false
  }