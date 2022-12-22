//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=sRAntRrvaA7yrMq8GARS3xOXSVayCE008M5LkcAW&date=${choice}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      document.querySelector('img').src = data.hdurl
      document.querySelector('h3').innerText = data.explanation
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}
