// This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.

// const solve = (x, y) => x // y

let solve = (x,y) => y === 0 ? Infinity : x/y
