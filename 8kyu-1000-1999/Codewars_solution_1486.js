// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

var replaceDots = function (str) {
  
    let count = 0
    
    do{
      if (str[count] === ".") {
        str = str.split('.').join('-') 
      }
      count++
    }while(count < str.length)
    return str;
  }