document.querySelector('#check').addEventListener('click', check)

const output = document.querySelector('#placeToSee')

function check() {

  const day = document.querySelector('#day').value.toUpperCase()

  let result = '';

  //Conditionals go here
  if (day === 'TUESDAY' || day === 'THURSDAY') {
    result = 'Class!'
  } else if (day === 'SATURDAY' || day === 'SUNDAY') {
    result = 'Weekend!'
  } else {
    result = 'Yawn! Boring.'
  }

  output.innerHTML = result;

}
