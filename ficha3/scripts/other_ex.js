const nomeProduto = prompt('Nome do produto');
const catProduto = prompt('Categoria');

const compra = {
    nomeProduto,
    catProduto,
    precoBase: 2.50,
    txIva: 23,
    precoFinal: function() {
        return precoBase * txIva;
    },
    dadosEncomenda: {
        dataEncomenda: '2023-03-27',
        prazoEntrega: '(7) dias',
        localEntrega: 'Avenida do Mar, 74, 4460-810 Matosinhos' 
    }
};

function showLength() {
    console.log(Object.keys(compra).length);
}

showLength();

function showProperties() {
    for (let prop in compra) {
        console.log(prop);
    }
}
showProperties();

function removeProp(prop) {
    //verifica se a propriedade não é herdada
    if (compra.hasOwnProperty(prop)) {
        delete compra[prop];
        console.log(`Propriedade ${prop} removida`);
    } else {
        console.log(`Propriedade ${prop} não encontrada`);
    }

}

removeProp('txIva');