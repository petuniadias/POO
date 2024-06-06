
//4. Ao premir o botão “ADICIONAR” o produto deve ser adicionado numa tabela 
const products = [

];

const tbody = document.querySelector('table tbody');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newProduct = {};
    newProduct.name = document.getElementById('name').value;
    newProduct.category = document.getElementById('category').value;
    newProduct.quantity = parseInt(document.getElementById('quantity').value);

    //Tome nota que se um produto já existir na tabela, deve surgir a mensagem de “Produto já adicionado!” 
    const exists = products.find(product => product.name.toLowerCase() == newProduct.name.toLowerCase())
    if (exists) {
        return alert(`O produto ${newProduct.name} já existe!`);
    }

    products.push(newProduct)

    addToTable(newProduct);
});

function addToTable(product) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.innerHTML = product.name;
    
    const tdCategory = document.createElement('td');
    tdCategory.innerHTML = product.category;

    const tdQuantity = document.createElement('td');
    tdQuantity.innerHTML = product.quantity;

    tr.append(tdName, tdCategory, tdQuantity);
    tbody.append(tr);
}

//Os botões abaixo da tabela devem executar as seguintes tarefas: 
//a. botão “Nª PRODUTOS” - ao ser premido deve exibir uma caixa de alerta com a mensagem: “A lista de compras tem X produtos.” (onde X é o nº de produtos a comprar);

function numProdutos() {
    alert(`A lista de compras tem ${products.length} produtos`);
}

//b. botão “PRODUTOS POR CATEGORIA” - ao ser premido deve exibir um prompt onde é pedida uma categoria. Ao confirmar deve ser exibida uma caixa de alerta com a mensagem: “A lista de compras tem X produtos da categoria Y a comprar.” (onde X é o nº de produtos a comprar e Y é a categoria definida);

function produtosCategoria() {
    const category = prompt('Digite a categoria');

    const productsOnCategory = products.filter(product => product.category.toLowerCase() == category.toLowerCase());
    alert(`A list de compras tem ${productsOnCategory.length} produtos da categoria ${category} a comprar`);
}

//c. botão “QUANTIDADE TOTAL” – ao ser premido deve exibir uma caixa de alert com a soma total das quantidades compradas
function quantidadeTotal() {
    let sum = 0;
    for (const product of products) {
        sum += product.quantity;
    }
    alert(`A lista tem de quantidade total ${sum} items`);
}

// d. botão “LIMPAR LISTA” - ao ser premido deve limpar a lista de compras com confirmação (todas as linhas da tabela com a exceção do cabeçalho). 
function limparLista() {
    products.length = 0;
    tbody.innerHTML = '';
}

//6. Crie um botão “NOVA CATEGORIA”, que ao ser premido solicite uma nova categoria ao utilizador (através de um prompt). A nova categoria deve ser adicionada ao seletor de categorias.

