const nomeProduto = prompt('Nome do Produto');
const catProduto = prompt('Categoria do Produto');

function precoFinal(compra) {
  return compra.precoBase * compra.LxIVA;
}

const compra = {
  nomeProduto,
  catProduto,
  precoBase: 2.50,
  txIVA: 23,
  precoFinal: function () {
    return precoBase * txIVA;
  },
  dadosEncomenda: {
    dataEncomenda: '(2023-03-27)',
    prazoEntrega: '(7) dias',
    localEntrega: 'Avenida do Mar, 74, 4460-810 Matosinhos'
  }
};

console.log(compra);

function showLength() {
  console.log(Object.keys(compra).length);
}

showLength();

function showProperties() {
  console.log(Object.keys(compra));
}

showProperties();

function removeProp(arg) {
  delete compra.arg;
  console.log(compra);
}

removeProp(nomeProduto);

