// Bob needs a fast way to calculate the volume of a cuboid with three values: 
// the length, width and height of the cuboid. Write a function to help Bob with this calculation.

let Kata;

Kata = (function() {
  function Kata() {}

  Kata.getVolumeOfCuboid = function(length, width, height){return length * width * height};

  return Kata;

})();