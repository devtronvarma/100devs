// *Variables*
// Create a variable and console log the value
let zebra = 1;
// Create a variable, add 10 to it, and alert the value
let hippo = 19;
hippo += 10;

alert(hippo);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractsFourNums(num1, num2, num3, num4) {
    alert(num1 - num2 - num3 - num4);
}
// Create a function that divides one number by another and returns the remainder
function findRemainder(num1, num2) {
    return (num1 % num2);
}


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(num1, num2) {
    const sum = num1 + num2;
    if (sum > 50) {
        alert('Jumanji')
    }
}


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebraAlert(num1, num2, num3) {
    const product = num1 * num2 * num3;
    if (product % 3 === 0) {
        alert('ZEBRA');
    }
}
