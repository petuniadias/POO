// Importa o modulo init.js
import * as data from "../init.js";
// declara array 
let dogs = []
// invoca função init (módulo init.js) para preencher array de objetos com tasks pré-definidas
dogs = data.init();
renderCatalog(dogs);

// Renredirzar o catálogo com o array de objetos
function renderCatalog(dogs = []) {
  let result = '';
  for (let dog of dogs) {
    result += `
      <div class="col mb-4">
        <div class="card h-100" style="width: 18rem;">
          <img class="card-img-top" src="${dog.imagem}" alt="${dog.raca}">
          <div class="card-body">
            <h5 class="card-title">${dog.raca}</h5>
            <p class="card-text">Link: ${dog.link || 'Sem link'}</p>
            <a href="${dog.link}" class="btn btn-primary">Ver mais</a>
          </div>
        </div>
      </div>
    `;
  }

  const container = document.getElementById("myCatalog");
  container.innerHTML = result;
}
