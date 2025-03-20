
// Importa modulo data.js
import * as data from "./data.js";


let listUsers = [];
listUsers = data.init();

//console.log(listUsers)

function listarNivel(nivel) {
    const jogadoresDoNivel = listUsers.filter(element => element.nivel === nivel);

    //map() cria um novo array e coloca apenas os nomes
    const nomeDosJogadores = listUsers.map(element => element.nome);

    //join() junta os elementos de um array e separa-os com um caractere ou sequencia de caracteres
    alert(nomeDosJogadores.join(', '));
}

listarNivel(prompt('nivel'));
