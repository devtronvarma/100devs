document.querySelector('#check').addEventListener('click', check);

function check() {
  const day = document.querySelector('#day').value.toUpperCase();

  const resultLocation = document.querySelector('#placeToSee');

  if (day === 'TUESDAY' || day === 'THURSDAY') {
    resultLocation.innerHTML = 'Class day!'
  } else if (day === 'SATURDAY' || day === 'SUNDAY') {
    resultLocation.innerHTML = 'It\'s the Weekend!'
  } else {
    resultLocation.innerHTML = 'Well, that\'s boring.'
  }
}
