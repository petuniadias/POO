const numbers = [];
let num;

do {
num = parseInt(prompt('Insira um número'));
numbers.push(num);
} while(num != 0)

const numMax = Math.max(...numbers);
const numMin = Math.min(...numbers);

console.log(numbers);
console.log(numMax, numMin);