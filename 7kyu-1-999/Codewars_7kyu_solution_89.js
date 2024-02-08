// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
	s = s.split(' ');
	let small = s[0];
	for (let i = 0; i < s.length; i++) {
		if(s[i].length < small.length){
			small = s[i];
		}
	}
	return small.length;
}