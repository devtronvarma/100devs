// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = "Is this a question?";
console.log(sentence.endsWith("?"));

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let words = "jr. dev person with experience in stuff";
console.log(words.replace("jr. dev", "software engineer"));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
  let choice = Math.random();
  if (choice < 1 / 3) {
    return "rock";
  } else if (choice < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function playRPS(userChoice) {
  let botChoice = rockPaperScissors();

  console.log(`You chose ${userChoice}. The bot chose ${botChoice}.`);

  if (botChoice === userChoice) {
    console.log(`It's a tie.`);
  } else if (
    (userChoice === "rock" && botChoice === "scissors") ||
    (userChoice === "paper" && botChoice === "rock") ||
    (userChoice === "scissors" && botChoice === "paper")
  ) {
    console.log("You win!");
  } else {
    console.log("You lose. Sorry");
  }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function keepPlayingRPS(arr) {
  for (let i = 0; i < arr.length; i++) {
    playRPS(arr[i]);
  }
}
