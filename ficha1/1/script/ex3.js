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
    resultado = 66 + (13.7 * pesoValor) + (5 * alturaValor) - (6.8 * idadeValor);
  } else if(genero.value === 'Feminino') {
    resultado = 665 + (9.6 * pesoValor) + (1.8 * alturaValor) - (4.7 * idadeValor);
  }
  resultBox.style.display = `block`;
  result.innerHTML = `${resultado}`;
});