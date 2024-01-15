// Functional closures can get overly attached. Set them straight!

// Why doesn't greetAbe() actually greet Abe?

// let name = 'Abe'

// const greetAbe = () => 'Hello, ' + name + '!'

// name = 'Ben'

// const greetBen = () => 'Hello, ' + name + '!'

let name
function greetAbe() {
  name = 'Abe'
  return `Hello, ${name}!`
}


function greetBen() {
  name = 'Ben' 
  return `Hello, ${name}!`
}