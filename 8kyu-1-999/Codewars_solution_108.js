// Task
// Implement a function which accepts 2 arguments: string and separator.
// The expected algorithm: split the string into words by spaces, split 
// each word into separate characters and join them back with the specified 
// separator, join all the resulting "words" back into a sentence with spaces.
// For example:
// splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
// splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
// splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
// splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"

function splitAndMerge(string, separator) {
    if (separator === " ") return string.split(" ").join("").split("").join(separator)
    let new_str = string.split(" ");
    for (let i = 0; i < new_str.length; i++) {
      new_str[i] = new_str[i].split("").join(separator);
    }
    return new_str.join(" ");
  }