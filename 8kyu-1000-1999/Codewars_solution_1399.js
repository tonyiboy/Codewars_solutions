// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
// If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
// If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
    let result = ""
    let count = 0
    let counting = 0
    
    while(counting< x.length){
      if(x[counting] === "good"){
        count += 1
      }
      counting++
    }
    
    if(count > 2){
      result = "I smell a series!"
    }else if (count > 0){
      result = "Publish!"
    }else return "Fail!"
    
  
    return result;
    
  }