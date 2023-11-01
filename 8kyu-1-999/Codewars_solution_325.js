// DESCRIPTION:
// Write a function that returns a string in which firstname is swapped with last name.
// Example(Input --> Output)
// "john McClane" --> "McClane john"

function nameShuffler(str){
    [firstName, lastName] = str.split(" ");
    return `${lastName} ${firstName}`;
  }