//Create a function that takes in an array of numbers. Multiply each number together and alert the product.
function arrProduct(arr) {
  const res = arr.reduce((c, i) => c * i);
  alert(res);
}
