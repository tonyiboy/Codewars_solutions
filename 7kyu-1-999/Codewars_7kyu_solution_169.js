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

  for (let i = 0; i < pin.length; i++){
    switch(true){
      case pin[i] > '9' || pin[i] < '0':
      return false;
      break;
  }}
    
  		
  return true
}