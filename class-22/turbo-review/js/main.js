// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = " Vanilla Coke ";
favDrink = favDrink.trim();
console.log(favDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let nothingIsTrue = "there are no words that are false in here";
let check = "apple";
console.log(nothingIsTrue.includes(check));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
const rockPaperScissors = () => {
  let choice = Math.random();
  if (choice < 1 / 3) return 'rock';
  else if (choice < 2 / 3) return 'paper';
  else return 'scissors';
};

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
const playRPS = () => {

  let userSel = prompt("rock, paper, scissors: ");
  let botSel = rockPaperScissors();

  console.log(`You picked ${userSel} and the bot picked ${botSel}.`)

  if (botSel === userSel) return `It's a tie.`

  switch (userSel) {
    case 'rock':
      return botSel === 'scissors' ? 'You win!' : 'You lose!';
    case 'paper':
      return botSel === 'rock' ? 'You win!' : 'You lose!';
    case 'scissors':
      return botSel === 'paper' ? 'You win!' : 'You lose!'
  }

};

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
