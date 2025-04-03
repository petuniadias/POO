let games = []
const form = document.querySelector('.add-game-forms');

form.addEventListener('submit', event => {
  event.preventDefault(); //prevenir/suspender executar a açao por omissão de enviar os dados para o servidor

  const name = document.querySelector('game-name').value;
  const year = document.querySelector('year').value;
  const genre = document.querySelector('genre').value;
  const rating = document.querySelector('.rating').value;

  const plataforms =  [...document.querySelector('.plataform').selectedOptions()];

  const thisYear = new Date().getFullYear();

  if (year > thisYear) {
    alert('');
    return;
  }

  const newGame = {name, year, genre, plataforms, rating};
  games.push(newGame);
  console.log(games);
  form.reset();
});
