// It's pretty straightforward. Your goal is to create a function that removes the 
// first and last characters of a string. You're given one parameter, the original string. 
// You don't have to worry with strings with less than two characters.

function removeChar(str){
    //You got this!
     let input_str = str;
     let output_str = '';
     
     for (let i = 1; i < input_str.length-1; i++) {
       output_str += input_str[i];
     }
   
     return output_str;
   };