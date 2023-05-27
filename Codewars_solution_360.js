// Make a simple function called greet that returns the most-famous "hello world!".
// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create 
// the most creative "hello world" you can think of? What is a "hello world"
// solution you would want to show your friends?

function greet() {
    famousWord = ""
    array = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"]
    for (let i = 0; i < array.length; i++) {
      famousWord += array[i]
    }
    return famousWord
  }