//ex. 1
const num1 = parseInt(prompt('Indique o primeiro número'));
const num2 = parseInt(prompt('Indique o segundo número'));

console.log(num1, num2);

  //caso o num1 for sup ao num2 tem de funcionar

let soma = 0;

for (let i = num1; i <= num2; i++) {
  soma += i;
}

console.log(soma);