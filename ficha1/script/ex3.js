const altura = document.querySelector('.altura');
const peso = document.querySelector('.peso');
const idade = document.querySelector('.idade');
const genero = document.querySelector('.genero');

const calcular = document.querySelector('.calcular');
const result = document.querySelector('.result');
const resultBox = document.querySelector('.result-container');

let resultado;

calcular.addEventListener('click', () => {
  const pesoValor = parseFloat(peso.value);
  const alturaValor = parseFloat(altura.value);
  const idadeValor = parseInt(idade.value);

  if(genero.value === 'Masculino') {
    resultado = 10 * pesoValor + 6.25 * alturaValor - 5 * idadeValor + 5;
  } else if(genero.value === 'Feminino') {
    resultado = 10 * pesoValor + 6.25 * alturaValor - 5 * idadeValor + 5;
  }
  resultBox.style.display = `block`;
  result.innerHTML = `${resultado}`;
});