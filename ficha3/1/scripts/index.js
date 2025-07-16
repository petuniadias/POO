const submit = document.querySelector('.submit')
const produtos = document.querySelector('.produtos');

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
        catProduto
    };

    nomeProdutoResultado.innerHTML = `${compra.nomeProduto}`;
    catProdutoResultado.innerHTML = `${compra.catProduto}`;
});




