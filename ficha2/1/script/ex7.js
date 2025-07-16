const palindromo = (generatedNumber) => {

  const numStr = generatedNumber.toString();
  const firstDigit = numStr[0];
  const lastDigit = numStr[numStr.length - 1];

  if(firstDigit === lastDigit) {
    return true;
  } else {
    return false;
  }
}

const generateBtn = document.querySelector('.generate-btn');
const generatedMessage = document.querySelector('.generated-msg');
const num = document.querySelector('.number');

generateBtn.addEventListener('click', () => {
  const generatedNumber = Math.floor(Math.random()*(999 - 100 + 1) + 100);
  //Aqui usamos Math.floor ao invés de parseInt() 
  //porque o parseInt apenas remove os decimais e 
  //pode gerar 1000 por erro, enquanto que Math.floor() 
  //arredonda sempre para baixo

  num.innerHTML = `${generatedNumber}`;
  generatedMessage.style.display = `flex`;
  console.log(`É um palindromo? ${palindromo(generatedNumber)}`);
});

