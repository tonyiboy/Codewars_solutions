// Task
// The function giveMeFive accepts 1 parameter, obj, which is an object.
// Create an array (which you will eventually return). Then, traverse obj, 
// checking each key and value. If the length of the key is equal to 5, then 
// push the key to your array. Separately, if the length of the value is equal to 5, 
// then push the value to your array.At the end, return your array.

const giveMeFive=obj=>/*for (q in obj)*/Object.keys(obj).map(a=>[a.length==5 ? a : null, obj[a].length==5 ? obj[a] : null]).reduce((a,b)=>a.concat(b.filter(a=>a!=null)),[]);