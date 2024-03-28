// Your task is to write function factorial.

function factorial(n){
    switch(true){
        case n === 0:
        return 1;
        break;
        default:
        return n * factorial(n - 1);
        break;
  }}