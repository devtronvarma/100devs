// PSEUDO CODE
// When the yell button clicked,
// Take the first name
// Take the middle name
// Take the last name
// Capitalize all of them
// Concatenate them together
// Show them

document.querySelector('#yell').addEventListener('click', yell)

function yell() {
  const nameThings = document.querySelectorAll('.name')
  let names = []

  nameThings.forEach(node => names.push(node.value))

  let nameString = names.join(' ');

  document.querySelector('#placeToYell').innerText = nameString;

}
