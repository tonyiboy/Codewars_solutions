// DESCRIPTION:
// Make a function that will return a greeting statement that uses an input; 
// your program should return, "Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]

const greet = function(name){
    const arr = ['Hello,', name,'how', 'are', 'you', 'doing', 'today?']
    return arr.join(' ')
  }