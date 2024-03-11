// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.
// Tested years are in range 1600 ≤ year ≤ 4000


function isLeapYear(year) {
  
    switch(true){
        case 0 == year % 400:
        return true;
        break;
        case  0 == year % 100:
        return false;
        break;
        case 0 == year % 4:
        return true;
        break;
        default:
        return false;
        break;
        }
    }