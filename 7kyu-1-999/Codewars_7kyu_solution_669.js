// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let newS = s.split(" ")
    let length = newS[0].length

    

    for (let i in newS) {
        
        

        if (length > newS[i].length) {
            length = newS[i].length
        }
    }


    return length
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps")) // 3
