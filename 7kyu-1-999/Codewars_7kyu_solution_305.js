// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
  
    switch(true){
        case url.includes('#'):
        return url.split('#')[0];
        break;
        default:
        return url;
        break;
    }
  }