//  "use strict"

// Wilson primes satisfy the following condition. Let 
// P
// P represent a prime number.   

// Then,

// (
// P
// −
// 1
// )
// !
// +
// 1
// P
// ∗
// P
// P∗P
// (P−1)!+1
// ​
 
// should give a whole number, where 
// P
// !
// P! is the factorial of 
// P
// P.

// Your task is to create a function that returns true if the given number 
// is a Wilson prime and false otherwise.

function amIWilson(p) {
  
 if (p < 2) return false;

    const P = BigInt(p);
    let factorial = 1n;

    for (let i = 1n; i < P; i++) {
        factorial *= i;
    }

    return (factorial + 1n) % (P * P) === 0n;
  
}
