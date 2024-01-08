// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item){
    let result
    let count = 0
    
    for(let el of arr){
      if(el === item) result = el
    }
      
        return result === item ? true : false
  }