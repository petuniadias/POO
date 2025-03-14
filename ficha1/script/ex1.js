//ex. 1
let num1 = parseInt(prompt('Indique o primeiro número'));
let num2 = parseInt(prompt('Indique o segundo número'));

console.log(num1, num2);

  //caso o num1 for sup ao num2 tem de funcionar

if(num1 > num2) {
  let temp = num1;
  num1 = num2;
  num2 = temp;
}

let soma = 0;

for (let i = num1; i <= num2; i++) {
  soma += i;
}

console.log(soma);