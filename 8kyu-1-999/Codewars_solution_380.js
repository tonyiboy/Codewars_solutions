// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son 
// (or in how many years he will be twice as old). The answer is always 
// greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(d, s) {
    var ss = s * 2;
      if ((d - ss) < 0){
        return (d-ss) * -1;
      }
      else{
        return d-ss;
      }
}