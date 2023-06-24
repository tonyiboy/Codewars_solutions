// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to 
// greet everyone as they come aboard. It is your job to fix the code and get the program working again!
// Example output:
// Hello, Mr. Spock

function sayHello(name) {
    if(typeof name == 'string'){
      switch(name){
          case 'Mr. Spock':
          return 'Hello, Mr. Spock'
          break;
          case 'Captain Kirk':
          return 'Hello, Captain Kirk'
          break;
          case 'Liutenant Uhura':
          return 'Hello, Liutenant Uhura'
          break;
          case 'Dr. McCoy':
          return 'Hello, Dr. McCoy'
          break;
          default:
          return 'Hello, ' + name
      }
    }else{
      return 'bukan string cook!';
    }
  }