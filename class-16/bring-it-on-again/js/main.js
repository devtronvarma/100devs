// *Variables*
// Declare a variable, assign it a value, and alert the value
let num = 10;
alert(num);
// Create a variable, divide it by 10, and console log the value
let otherNum = 100;
otherNum /= 10;
console.log(otherNum);
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplyThree(numA, numB, numC) {
    alert(numA * numB * numC);
}
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function fourNums(numA, numB, numC, numD) {
    const result = numA + numB - numC - numD;
    console.log(result);
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function threeNums(numA, numB, numC) {
    const result = (100 + numA - numB) / numC;
    if (result > 25) {
        console.log(`WE HAVE A WINNA`);
    }
}


// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayChecker(day) {
    const dayLower = day.toLowerCase();
    const weekendDays = ['saturday', 'sunday'];
    const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
    if (weekendDays.includes(dayLower)) {
        alert(`weekend`);
    } else if (weekDays.includes(dayLower)) {
        alert(`weekday`);
    } else {
        alert(`Try again!`);
    }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function loopNum(num) {
    for (let i = 1; i < num; i += 3) {
        console.log(i);
    }
}
