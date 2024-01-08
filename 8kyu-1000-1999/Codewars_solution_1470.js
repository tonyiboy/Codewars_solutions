// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item){
  
    let result = false
    
    arr.forEach((element) => {
               if(element === item) result = true 
                })
    
    return result 
  }