// Your task is to write function factorial.

function factorial(n){
    if (n){
      return n * factorial(n - 1)
    }else return 1
  }