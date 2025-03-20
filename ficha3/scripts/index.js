const submit = document.querySelector('.submit')
const produtos = document.querySelector('.produtos');

let compra;

submit.addEventListener('click', () => {
    const nomeProduto = document.querySelector('.nomeProduto').value;
    const catProduto = document.querySelector('.catProduto').value;

    const linha = document.createElement('div');
    linha.classList.add('linha');
    produtos.appendChild(linha);

    const nomeProdutoResultado = document.createElement('div');
    nomeProdutoResultado.classList.add('nomeProduto-resultado');

    const catProdutoResultado = document.createElement('div');
    catProdutoResultado.classList.add('catProduto-resultado');

    linha.appendChild(nomeProdutoResultado);
    linha.appendChild(catProdutoResultado);

    compra = {
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

    nomeProdutoResultado.innerHTML = `${compra.nomeProduto}`;
    catProdutoResultado.innerHTML = `${compra.catProduto}`;
    showLength();
});

function showLength() {
    console.log(Object.keys(compra).length);
}




