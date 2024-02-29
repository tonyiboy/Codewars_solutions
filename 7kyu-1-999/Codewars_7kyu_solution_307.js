// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    let string = ""
    let count = 0
    
    while(count < url.length){
      if(url[count] === "#") { 
        break 
      }else string += url[count]
      count++
    }
    return string 
  }