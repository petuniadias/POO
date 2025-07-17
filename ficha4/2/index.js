
// Importa modulo data.js
import * as data from "./data.js";


let listUsers = []
listUsers = data.init();

console.log(listUsers)

function listarNivel(nivel) {
  const jogadores = listUsers
    .filter(jogador => jogador.nivel === nivel)
    .map(jogador => jogador.nome)
    .join(', ');
  console.log(jogadores)
  alert(`
    Users no nível ${nivel}:
    ${jogadores}
  `);
}

listarNivel(1);

function somarPontos(nivel) {
  const jogadores = listUsers
    .filter(jogador => jogador.nivel === nivel);
  
  const pontos = jogadores
    .map(jogador => jogador.pontos);

  let soma = 0;
  for (let i = 0; i < pontos.length; i++) {
    soma += pontos[i];
  }

  console.log(`Soma dos pontos do nível ${nivel}: ${soma}`)
}

somarPontos(2);
somarPontos(1);

function VerificarNivel(nivel) {
  const existe = listUsers
    .some(jogador => jogador.nivel === nivel);
  console.log(`Nivel ${nivel}: ${existe}`);
  return existe;
}

VerificarNivel(2);
VerificarNivel(5);

function mostrarJogadores(colecionavel) {

  const jogadores = listUsers
    .filter(jogador => jogador.colecionaveis.includes(colecionavel))
    .map(jogador => jogador.nome)
    .join(', ');

  console.log(`Jogadores com ${colecionavel}: ${jogadores}`);

}

mostrarJogadores('avatar');
mostrarJogadores('badge 1');

function listaTabClass() {
  const lista = listUsers
    .sort((a, b) => b.pontos - a.pontos)
    .map(jogador => `${jogador.pontos} ${jogador.nome}`)
    .join('\n');
  alert(`Classificação:\n${lista}`);
}

listaTabClass();

function giveReward(nivel) {
  listUsers.forEach(user => {
    if(user.nivel === nivel) {
      user.pontos += 100;
    }
  });

  console.log(listUsers);
}

giveReward(2);

function sumPontos() {
  let totalPontos = listUsers.reduce((sum, user) => sum + user.pontos, 0);
      console.log(`A soma total dos pontos é: ${totalPontos}`);
}

sumPontos();