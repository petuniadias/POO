import {perguntas} from './data.js';


let nomeJogador = prompt("Qual o seu nome?");
let tempo = 0, timer;
let respondidas = 0;



function mostrarPromptJogador() {

  const painelAdmin = document.querySelector('#admin');
  const jogo = document.querySelector('#jogo');


  if (nomeJogador === 'admin') {
    painelAdmin.classList.remove('hidden');

    const tabelaPerguntas = document.querySelector('#tabelaPerguntas .tbody');
    const tr = document.createElement('tr');
    tabelaPerguntas.appendChild(tr);
    tabelaPerguntas.innerHTML = `
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    `;
  } else {
    jogo.classList.remove('hidden');
    

  }
}

function criarGrelha() {
  const grelha = document.querySelector('#grelha');
  for(let i=0; i < perguntas.length; i++) {
    const celula = document.createElement('div');
    celula.className = 'celula';
    grelha.appendChild(celula);

    celula.innerHTML = `
      
    `;

  }

}

criarGrelha();

function mostrarPergunta(categoria, celula) {
  const perguntaContainer = document.querySelector('#perguntaContainer');
  const perguntaTexto = document.querySelector('#perguntaTexto');
  const respostas = document.querySelector('#respostas');

  celula.addEventListener('click', () => {
    perguntaContainer.classList.remove('hidden');
    perguntaTexto.innerHTML = `
      ${pergunta}
    `;
  });
}

function validarResposta(resposta, pergunta, celula) {

}

function iniciarContador() {
  timer = setInterval(() => {
    tempo++;
    document.getElementById("contador").textContent = `Tempo: ${tempo}s`;
  }, 1000);
}

function registarTempo() {
 
}

function atualizarLeaderboard() {
  
}

function atualizarTabelaAdmin() {

}

document.getElementById("btnAdicionarPergunta").addEventListener("click", adicionarPergunta)

function adicionarPergunta() {
  
}

window.onload = mostrarPromptJogador;