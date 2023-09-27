// Return the type of the sum of the two arguments

function typeOfSum(a, b) {
    if (typeof a === 'string' || a instanceof String){return 'string'}
    if (typeof b === 'string' || b instanceof String){return 'string'}
    return 'number'
  }