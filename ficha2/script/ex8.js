const promptNumber = document.querySelector('.o-tal-do-prompt');
const submitBtn = document.querySelector('.submit-btn');
const fatorialMsg = document.querySelector('.fatorial-msg');
const number = document.querySelector('.number');

const calcFatorial = function(num) {

  if(isNaN(num) || num < 0) {
    fatorialMsg.innerHTML = `Insira um número válido!`;
    fatorialMsg.classList.add('no-value');
    return;
  } else {
    let fatorial = 1;
    for(let i = 1; i <= num; i++) {
      fatorial *= i;
    }
    fatorialMsg.style.display = `flex`;
    fatorialMsg.innerHTML = `O fatorial de ${num} é:`;
    number.innerHTML = `${fatorial}`;
  }
}

submitBtn.addEventListener('click', () => {
  const num = parseInt(promptNumber.value);
  calcFatorial(num);
});