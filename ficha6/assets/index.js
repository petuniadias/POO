let registros = [];

const form = document.querySelector('.form');
const calculateBtn = document.querySelector('.calculate-btn');

function calculateLDL() {
  const colestrolTotal = document.querySelector('.colesterol-total').value;
  const HDL = document.querySelector('.HDL').value;
  const triglecerideos = document.querySelector('.triglecerideos').value;
  const resultBox = document.querySelector('.result-box');

  const LDL = colestrolTotal - HDL - 0.2 * triglecerideos;
  resultBox.innerHTML += ` ${LDL}`;
  return LDL;
}

//calculate LDL-C
calculateBtn.addEventListener('click', () => {
  calculateLDL();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const colestrolTotal = document.querySelector('.colesterol-total').value;
  const HDL = document.querySelector('.HDL').value;
  const triglecerideos = document.querySelector('.triglecerideos').value;
  const LDL = document.querySelector('.result-box').innerHTML;
  const LDLvalue = parseInt(LDL);

  const newRow = {colestrolTotal, HDL, triglecerideos, LDLvalue};
  registros.push(newRow);
  
  console.log(registros);
  document.querySelector('.result-box').innerHTML = '';
  form.reset()

  //score
  let riscoCardiovascular;

  if (LDLvalue < 115) {
    riscoCardiovascular = `Baixo risco coronariano`;
  } else if (LDLvalue < 100) {
    riscoCardiovascular = `Risco coronariano médio`;
  } else if (LDLvalue < 70) {
    riscoCardiovascular = `Alto risco coronariano`;
  } else {
    riscoCardiovascular = `Sem risco coronariano`;
  }

  //add to table
  const tbody = document.querySelector('.table tbody');
  tbody.innerHTML += `
    <td>${colestrolTotal}</td>
    <td>${HDL}</td>
    <td>${triglecerideos}</td>
    <td>${LDLvalue}</td>
    <td>${riscoCardiovascular}</td>
  `;
  });