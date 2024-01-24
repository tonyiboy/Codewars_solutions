// Switch/Case - Bug Fixing #6
// Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, 
// can you fix timmy's function?

// function evalObject(value){
//     var result = 0;
//     switch(value.operation){
//       case'+': result = value.a + value.b;
//       case'-': result = value.a - value.b;
//       case'/': result = value.a / value.b;
//       case'*': result = value.a * value.b;
//       case'%': result = value.a % value.b;
//       case'^': result = Math.pow(value.a, value.b);
//     }
//     return result;
//   }

function evalObject(value){
    var result = 0;
    switch(value.operation){
      case'+': result = value.a + value.b;
      break;
      case'-': result = value.a - value.b;
      break;
      case'/': result = value.a / value.b;
      break;
      case'*': result = value.a * value.b;
      break;
      case'%': result = value.a % value.b;
      break;
      default: result = value.a ** value.b;
      break;
    }
    return result;
  }