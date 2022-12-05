// *Variables*
// Create a variable and console log the value
let num = 20;
console.log(num);
// Create a variable, add 10 to it, and alert the value
let otherNum = 25;
otherNum += 10;
alert(otherNum);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFour(num1, num2, num3, num4) {
    const result = num1 - num2 - num3 - num4;
    alert(result);
}
// Create a function that divides one number by another and returns the remainder
function divide(numA, numB) {
    return numA % numB;
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(numA, numB) {
    const result = numA + numB;
    if (result > 50) {
        alert(`Jumanji`);
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThree(numA, numB, numC) {
    const product = numA * numB * numC;
    if (product % 3 === 0) {
        alert(`ZEBRA`);
    }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loopWord(word, num) {
    for (let i = 0; i < num; i++) {
        console.log(word);
    }
}
