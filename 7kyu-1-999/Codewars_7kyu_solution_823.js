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
  
  result += current.join('') + '\n';
  
  for (let i in current) {
    if (current[i] !== stringTwo[i]) {
      current[i] = stringTwo[i];
      result += current.join('') + '\n';
    }
  }
  
  return result;
}