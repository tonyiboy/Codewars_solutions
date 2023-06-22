// Write a function to split a string and convert it into an array of words.
// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", 

function stringToArray(string){
    let array = string.split(' ')
      for(let i = 0; i < array.length; i++){
        if (array[i] == ""){
          array[i] = [];
        }
      } return array
  }