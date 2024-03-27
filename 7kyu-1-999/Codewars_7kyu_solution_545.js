// Your task is to write function factorial.

function factorial(n){
    let result = 1
    for (let i = 2; i <= n; i++) {
      result *= i
    }
    return result
  }