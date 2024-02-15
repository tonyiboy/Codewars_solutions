// TM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


function validatePIN (pin) {
 
	let result = pin.length
  switch(true){
      case result != 4 && result != 6:
      return false;
      break;
  }
  let count = 0
  while(count < pin.length){
    switch(true){
      case pin[count] > '9' || pin[count] < '0':
      return false;
      break;
  }count++
  }
  return true
}