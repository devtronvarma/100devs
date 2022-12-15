//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const nums = [1, 2, 3, 4, 5];
let sum = nums.reduce((a, c) => a + c);
console.log(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const arrSquared = (arr) => {
  return arr.slice().map((i) => i ** 2);
};

//Create a function that takes string
//Print the reverse of that string to the console
const reverseString = (str) => {
  const strArr = str.split("");
  console.log(strArr.reverse().join(""));
};

//Create a function that takes in a string
//Alert if the string is a palindrome or not
const isPalindrome = (s) => {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }

  return true;
};
