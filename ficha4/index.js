// Importa modulo data.js
import * as data from "./data.js";

let listUsers = [];
listUsers = data.init();
console.log(listUsers);

//exercício 1
function listarNivel(nivel) {
    const jogadoresDoNivel = listUsers.filter(element => element.nivel === nivel);

    //map() cria um novo array e coloca apenas os nomes
    const nomeDosJogadores = listUsers.map(element => element.nome);

    //join() junta os elementos de um array e separa-os com um caractere ou sequencia de caracteres
    alert(nomeDosJogadores.join(', '));
}

listarNivel(prompt('Selecione um nível:'));

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

pesquisarColecionaveis(prompt());