document.querySelector('#pumpkin').addEventListener('click', setZero);
document.querySelector('#dominosPizza').addEventListener('click', addThree);
document.querySelector('#zebra').addEventListener('click', addNine);
document.querySelector('#cantThinkOfAnything').addEventListener('click', subtractTwo);
document.querySelector('#waitIThoughtOfSomething').addEventListener('click', modThree);

const resultLocation = document.querySelector('#placeToPutResult');

let total = 0;

function setZero() {
  total = 0;
  resultLocation.innerHTML = total;
}

function addThree() {
  total += 3;
  resultLocation.innerHTML = total;
}

function addNine() {
  total += 9;
  resultLocation.innerHTML = total;
}

function subtractTwo() {
  total -= 2;
  resultLocation.innerHTML = total;
}

function modThree() {
  total %= 3;
  resultLocation.innerHTML = total;
}
