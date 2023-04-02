// Task
// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.
// The first mission: Traversing arr, find the shortest string length.
// The second mission: Traversing arr again, intercept all strings to the shortest 
// string length(Start from index0). you can use one of slice() substring() or substr() do it.
// return the result after finished the work.
// for example:
// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
// cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
// cutIt(["codewars","javascript","java"]) should return ["code","java","java"]

cutIt=(arr,l=0)=>arr.map(a=>a.substr(0,l==0?l=arr.reduce((t,a)=>t=(a.length<t?a.length:t),Infinity):l))