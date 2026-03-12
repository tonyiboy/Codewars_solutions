// I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

// Example:

// stringOne = 'bubble gum';
// stringTwo = 'turtle ham';

// Result:
// bubble gum
// tubble gum
// turble gum
// turtle gum
// turtle hum
// turtle ham

function mutateMyStrings(stringOne, stringTwo){
   let result = '';
  let current = stringOne.split('');
  let i = 0;
  
  result += current.join('') + '\n';
  
  do {
    if (current[i] !== stringTwo[i]) {
      current[i] = stringTwo[i];
      result += current.join('') + '\n';
    }
    i++
  } while (i < current.length)
  
  return result;
}