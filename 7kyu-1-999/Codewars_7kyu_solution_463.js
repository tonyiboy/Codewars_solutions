// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s){
    
    let lower = 0
    let upper = 0
    let count = 0
    
    do{
      switch(true){
          case s[count] === s[count].toLowerCase():
          lower += 1;
          break;
          default:
          upper += 1;
          break;
      }
      count++
    }while(count < s.length)
    
    switch(true){
        case lower < upper:
        return s.toUpperCase();
        break;
        case lower > upper:
        return s.toLowerCase();
        break;
        default:
        return s.toLowerCase();
        break;
    }     
}