// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut(string){
    let vowels = 'aeiou';
    
    let result = [];
    
      for( let i = 0; i < string.length; i++){
      if(!vowels.includes(string[i])){
        result.push(string[i]);
      }
    }
      return result.join('');
    };