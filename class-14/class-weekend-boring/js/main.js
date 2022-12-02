//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  const daysOfWeek = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ]

  let output = document.querySelector('#placeToSee')

  if (daysOfWeek.includes(day)) {
    switch (day) {
      case 'tuesday' || 'thursday':
        output.innerText = `It's class day!`
        break;

      case 'saturday' || 'sunday':
        output.innerText = `It's the weekend!`;
        break;

      case 'wednesday':
        output.innerText = `Woof. Hump day.`
        break;

      default:
        output.innerText = `Just another boring day.`

    }
  } else {
    alert(`That's not a valid input.`)
  }
}
