//Example fetch using pokemonapi.co
let deckID = ``;
let deckURL = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

fetch(deckURL)
  .then(res => res.json())
  .then(data => {
    deckID = data.deck_id
  })
  .catch(err => {
    console.log(`error: ${err}`)
  });

document.querySelector('button').addEventListener('click', drawTwo)


// use deck of cards api to draw a card for each player
function drawTwo() {
  const url = `https://www.deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('#player1').src = data.cards[0].image
      document.querySelector('#player2').src = data.cards[1].image

      // convert drawn cards values for comparison
      let player1Val = convertToNum(data.cards[0].value)
      let player2Val = convertToNum(data.cards[1].value)

      // card comparison logic
      if (player1Val > player2Val) {
        document.querySelector('h3').innerText = 'player 1 wins'
      } else if (player1Val < player2Val) {
        document.querySelector('h3').innerText = 'player 2 wins'
      } else {
        document.querySelector('h3').innerText = 'this means war!'
      }
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

// helper function to convert cards to numbers
function convertToNum(val) {
  if (val === 'ACE') return 14;
  else if (val === 'KING') return 13;
  else if (val === 'QUEEN') return 12;
  else if (val === 'JACK') return 11;
  else return Number(val);
}
