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
  let current = stringOne.split('');
  
  return current.reduce((result, char, index) => {
    if (index === 0) {
      result += current.join('') + '\n';
    }
    
    if (char !== stringTwo[index]) {
      current[index] = stringTwo[index];
      result += current.join('') + '\n';
    }
    
    return result;
  }, '');
}