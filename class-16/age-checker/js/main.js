//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
const age = document.querySelector('#danceDanceRevolution').value

function checkAge() {
    let result;

    if (age < 16) {
        result = `You cannot drive.`;
    } else if (age < 18) {
        result = `You can't hate from outside the club -- you can't even get in.`;
    } else if (age < 21) {
        result = `You cannot drink.`;
    } else if (age < 25) {
        result = `You cannot rent cars affordably.`;
    } else if (age < 30) {
        result = `You cannot rent fancy cars affordably.`;
    } else {
        result = `There's nothing left to look forward to.`
    }

    document.querySelector('#resultOutput').innerText = result;
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

document.querySelector('h1').addEventListener('click', checkAge);
