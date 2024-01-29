// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
    let arr = []
    let volume = width * height * depth
    let area = 2 * (width * height + width * depth + height * depth)
    arr.push(area,volume)
    return arr
  }