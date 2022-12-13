//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function evens(arr) {
  let res = [];

  for (let i of arr) {
    if (i % 2 === 0) {
      res.push(i);
    }
  }

  return res;
}
