// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

let getSize = (width, height, depth) => [(width * height + width * depth + height * depth) * 2, width * height * depth]