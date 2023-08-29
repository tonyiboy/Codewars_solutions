// This series of katas will introduce you to basics of doing geometry with computers.
// Point objects have attributes x and y.
// Write a function calculating distance between Point a and Point b.
// Tests compare expected result and actual answer with tolerance of 1e-6.

function distanceBetweenPoints(a, b) {
    const x = a.x - b.x;
    const y = a.y - b.y;
    return Math.sqrt(x ** 2 + y ** 2)
  }