const numberPrompt = document.querySelector('.number-prompt');
const submit = document.querySelector('.submit-btn');
const perfectMsg = document.querySelector('.perfect-msg');

submit.addEventListener('click', () => {
  let soma = 0;
  for(let i = 1; i < numberPrompt.value; i++) {
    if(numberPrompt.value % i === 0) {
      soma += i;
    }
  }

  if(soma == numberPrompt.value) {
    perfectMsg.innerHTML = `O número ${numberPrompt.value} é perfeito`;
  } else {
    perfectMsg.innerHTML = `O número ${numberPrompt.value} não é perfeito`;
  }

  console.log(soma);
});