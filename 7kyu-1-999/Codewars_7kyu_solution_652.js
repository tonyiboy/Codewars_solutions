// Your task is to make a function that can take any non-negative integer as an argument and 
// return it with its digits in descending order. Essentially, rearrange the digits to create 
// the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
  
    let Newn = String(n).split("")   

   for (let i = 0; i < Newn.length; i++) {
    for (let j = i + 1; j < Newn.length; j++) {
      if (Newn[i] < Newn[j]) {
      
        let temp = Newn[i]
        Newn[i] = Newn[j]
        Newn[j] = temp
      }
    }
  }

  return Newn

}

console.log(descendingOrder(42145));
