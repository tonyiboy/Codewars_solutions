// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

let findShort = s => s.split(' ').sort((a, b) => b.length - a.length).pop().length