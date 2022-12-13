// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let faveFood = "coffee";
alert(faveFood);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let string = "DEV";
alert(string[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNums(n1, n2, n3) {
  const res = (n1 / n2) * n3;
  alert(res);
}

threeNums(3, 6, 9);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function oneNum(num) {
  const res = Math.cbrt(num).toFixed(4);

  console.log(res);
}

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function monthCheck(month) {
  const summer = ["june", "july", "august"];
  if (summer.includes(month.toLowerCase())) {
    alert("YAY");
  } else {
    alert("Booo");
  }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipFives(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 5 == 0) {
      continue;
    } else {
      console.log(i);
    }
  }
}
