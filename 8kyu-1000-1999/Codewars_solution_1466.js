// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item){
    let result
    let count = 0
    while(count < arr.length){
      if(arr[count] === item){
        result = arr[count]
        }
      count++
      }
      return result === item ? true : false
  }