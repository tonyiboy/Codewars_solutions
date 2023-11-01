// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    let n = ''
    for(let i of str){
      n = i+n
    }
    return n
  }