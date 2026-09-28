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
return p==5 || p==13 || p==563
}

