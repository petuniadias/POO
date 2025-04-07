// Importa modulo data.js
import * as data from "./data.js";

let listUsers = [];
listUsers = data.init();
console.log(listUsers);

//exercício 1
function listarNivel(nivel) {
    const jogadoresDoNivel = listUsers
        .filter(element => element.nivel === nivel)
        .map(element => element.nome)
    //map() cria um novo array e coloca apenas os nomes
        .join(', ');
    //join() junta os elementos de um array e separa-os com um caractere ou sequencia de caracteres
    alert(`Jogadores no nível ${nivel}: ${jogadoresDoNivel}`);
}

listarNivel(parseInt(prompt('Selecione um nível:')));

function somarPontos(nivel) {
    const jogadoresDoNivel = listUsers.filter(element => element.nivel === nivel);

    //map() cria um novo array e coloca apenas os nomes
    const pontos = jogadoresDoNivel.map(element => element.pontos);

    let soma = 0;
    for (let i = 0; i < pontos.length; i++) {
        soma += pontos[i];
    }

    console.log(`Total de pontos do nível ${nivel}: ${soma}`);
}

const nivelEscolhido = parseInt(prompt('Escolhe um nível'));
somarPontos(nivelEscolhido);

function VerificarNivel(nivel) {
    const exists = listUsers.some(element => element.nivel === nivel);
    console.log(`Nível ${nivel}: ${exists}`);
    return exists;
}
VerificarNivel(parseInt(prompt('Verifica se existe alguém no nível:')));

function pesquisarColecionaveis(colecionavel) {
    const exists = listUsers.some(element => element.colecionaveis.includes(colecionavel));
    console.log(`Colecionável ${colecionavel}: ${exists}`);
    return exists;
}

pesquisarColecionaveis(prompt('Escreve um colecionável:'));

function mostrarJogadores(colecionavel) {
    const nomeDosJogadores = listUsers
        .filter(element => element.colecionaveis.includes(colecionavel))
        .map(element => element.nome)
        .join(', ');

    alert(`Os jogadores com ${colecionavel} são: ${nomeDosJogadores}`);
}
mostrarJogadores(prompt('Vê os jogadores quem tem este colecionável:'));

function listaTabClass() {
    const lista = listUsers
        .sort((a, b) => b.pontos - a.pontos)
        .map(element => `${element.pontos} ${element.nome}`)
        .join('\n');
    alert(`Classificação:\n${lista}`);
}

listaTabClass();

function giveReward(nivel) {
    listUsers.forEach(element => {
        if(element.nivel === nivel) {
            element.pontos += 100;
        }
    });
    console.log(listUsers);
}

giveReward(parseInt(prompt('Seleciona um nível para dar pontos:')));

function sumPontos() {
    let totalPontos = listUsers.reduce((sum, element) => sum + element.pontos, 0)
    console.log(`A soma total dos pontos é: ${totalPontos}`);
}

sumPontos();