// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
	s = s.split(' ');
	let small = s[0];
  let count = 0
	do{
		if(s[count].length < small.length){
			small = s[count];
		}
    count++
	}while(count < s.length)  
	return small.length
}