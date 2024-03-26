// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

function angle(n) {
    let result = 0
    let count = 3
    
    do{
      result += 180
      count++
          }while(count <= n)
    return result
  }