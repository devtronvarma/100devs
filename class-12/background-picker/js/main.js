document.querySelector('#purple').addEventListener('click', setPurple);
document.querySelector('#green').addEventListener('click', setGreen);
document.querySelector('#blue').addEventListener('click', setBlue);
document.querySelector('#dodgerBlue').addEventListener('click', setDodgerBlue);

const body = document.querySelector('body');

function setPurple() {
  body.style.backgroundColor = 'rgba(241, 63, 247, 1)';
  body.style.color = 'white';
};

function setGreen() {
  body.style.backgroundColor = 'rgba(0, 253, 81, 1)';
  body.style.color = 'white';
}

function setBlue() {
  body.style.backgroundColor = 'rgba(0, 254, 255)';
  body.style.color = 'white';
}

function setDodgerBlue() {
  body.style.backgroundColor = 'dodgerblue';
  body.style.color = 'white';
}
