// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

function angle(n) {
    let result = 0
    for(let i = 3; i <= n; i++) {
            result += 180
          }
    return result
  }