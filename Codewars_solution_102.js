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

function splitAndMerge(str,sp){
    var words = str.split(" ");
    var arr =[];
    var res = []
    for(i=0;i<words.length;i++){
     arr.push(words[i].split("").join(sp));
    }
    res = arr.join(" ");
    return res;
    
  }