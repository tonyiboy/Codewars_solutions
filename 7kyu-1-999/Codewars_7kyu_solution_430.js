// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray){
    
    let arr = []
    let count = 0
    
    do{
      if(numbersArray[count] % 2 === 0){
        arr.push(numbersArray[count])
      } 
      count++
    }while(count < numbersArray.length)
    return arr
    }