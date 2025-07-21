

// Resolução alinea a)
  let clickCount = 0;
function sumClick() {
  clickCount += 1;
  return clickCount;
}

const td = document.querySelectorAll('td');


td.forEach((cell) => {
  cell.addEventListener('click', () => {
    let min = 1;
    let max = 10; 
    const randomNum = parseInt(Math.random() * (max - min) + min);
    cell.innerHTML = `${randomNum}`;
    sum.push(randomNum);
    sumClick();
    console.log(sumClick());
  });
});

// Resolução alinea b)
const sum = [];
const tbody = document.querySelector('tbody');

console.log(sum);

const total = sum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total);
if (total === 35) {
  console.log(`You did it!`);
  tbody.style.backgroundColor = `cyan`;
}

// Resolução alinea c)

const restart = document.querySelector('#btnInicio');
restart.addEventListener('click', () => {
  td.forEach((cell) => {
    cell.innerHTML = 0;
    sum.length = 0;
  });
});
