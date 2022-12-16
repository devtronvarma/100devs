//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1, 5, 4, 10];
let numsSum = nums.reduce((a, c) => a + c);
console.log(numsSum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const squareNums = (arr) => {
  return arr.map((i) => Math.pow(i, 2));
};

//Create a function that takes string
//Print the reverse of that string to the console
const reverseString = (s) => {
  let arr = s.split("");
  console.log(arr.join(""));
};

//Create a function that takes in a string
//Alert if the string is a palindrome or not
const isPalindrome = (s) => {
  let arr = s.split("");
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }

  return true;
};
