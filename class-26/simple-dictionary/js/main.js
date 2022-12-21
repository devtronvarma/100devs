//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const choice = document.querySelector('input').value
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${choice}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data[0].meanings)
      document.querySelector('h2').innerText = data[0].word
      document.querySelector('#phonetic').innerText = data[0].phonetics[1].text
      document.querySelector('#definitions').innerText = data[0].meanings[0].definitions[0].definition;
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}
