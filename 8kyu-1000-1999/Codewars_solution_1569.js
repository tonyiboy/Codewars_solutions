// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string){
    let word = string.split("")
    let count = 0
    while(count < word.length){
      if(word[count] === "5"){
        word[count] = "S"
      }else if(word[count] === "0"){
        word[count] = "O"
      }else if(word[count] === "1"){
        word[count] = "I"
      }else word[count] = word[count]
      count++
    }
    return word.join("")
  }