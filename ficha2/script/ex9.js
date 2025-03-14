const limInf = document.querySelector('.inferior');
const limSup = document.querySelector('.superior');
const submit = document.querySelector('.submit-btn');
const number = document.querySelector('.number');

const randomNumber = (limInf, limSup) => {
  const randomNum = Math.floor(Math.random()*(limSup.value - limInf.value) + limInf.value);

  number.innerHTML = `${randomNum}`;
}

submit.addEventListener('click', () => {
  randomNumber(limInf, limSup);
});