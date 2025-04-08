let games = [];

const forms = document.querySelector('.add-game-forms');
const table = document.querySelector('.game-table');

forms.addEventListener('submit', event => {
  event.preventDefault();

  const name = document.querySelector('.game-name').value;
  const year = document.querySelector('.year').value;
  const genre = document.querySelector('.genre').value;
  const rating = document.querySelector('.rating').value;

  const plataform = [...document.querySelector('.plataform').selectedOptions]
    .map(option => option.value)
    .join(', ');

  const anoAtual = new Date().getFullYear();

  const newGame = {name, year, genre, plataform, rating};

  games.push(newGame);
  console.log(games);

  renderTable();
});

function renderTable() {
  const tr = document.createElement('tr');

  games.forEach((game, index) => {


    tr.innerHTML = `
      <td>${game.name}</td>
      <td>${game.year}</td>
      <td>${game.genre}</td>
      <td>${game.plataform}</td>
      <td>${game.rating}</td>
      <td>
        <button class="row-btn edit-btn">
          Editar
        </button>
        <button onclick="seeDetails(${index})" class="row-btn details-btn">
          Ver detalhes
        </button>
        <button class="row-btn remove-btn">
          Remover
        </button>
      </td>
    `;
  })

  table.appendChild(tr);
}

function seeDetails(index) {
  const game = games[index];
  alert(`Nome: ${game.name}\nAno de lançamento: ${game.year}\nGénero: ${game.genre}\nPlataforma: ${game.plataform}\nAvaliação: ${game.rating}`);
}