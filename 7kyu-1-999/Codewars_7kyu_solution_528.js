// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

function angle(n) {
    let result = 0
    let count = 3
    
    while(count <= n) {
      result += 180
      count++
          }
    return result
  }