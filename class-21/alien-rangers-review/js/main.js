//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let shows = [
  "How I Met Your Mother",
  "Friends",
  "The Tom Green Show",
  "Love is Blind",
];

shows.forEach((i) => console.log(i));

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [0, 4, 5, 6, 9];
let evenNums = nums.filter((i) => i % 2 === 0);
console.log(evenNums);

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumLowestHighest(arr) {
  let sorted = arr.sort((a, b) => a - b);
  return sorted[0] + sorted[sorted.length - 1];
}
