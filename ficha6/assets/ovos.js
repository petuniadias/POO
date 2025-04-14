//atribuição dos ovos com o Ovo da páscoa
const ovos = document.querySelectorAll('.ovo');

let easterOvos = [];
let found = [];

function randomOvo() {
  const ovo1Index = Math.floor(Math.random() * 12);

  let ovo2Index;

  do {
    ovo2Index = Math.floor(Math.random() * 12) + 1;
  } while (ovo1Index === ovo2Index);

  easterOvos = [ovo1Index, ovo2Index];


  // Reseta as imagens
  ovos.forEach(ovo => {
    ovo.src = "assets/images/DiscoverEggs.png";
  });

  console.log(ovo1Index, ovo2Index);

  console.log(easterOvos);
}

randomOvo();



//mostra os ovos ao clicar
ovos.forEach((ovo, index) => {
  ovo.addEventListener('click', () => {
    if (easterOvos.includes(index)) {
      ovo.src = "assets/images/Ovo.png";
      if (!found.includes(index)) {
        found.push(index);
        console.log(found);
      }

    }

    if (found.length === 2) {
      
      const win = document.querySelector('.win-message');
      win.innerHTML = `
        <h2>Parabéns, encontraste os Ovos de Páscoa!</h2>
      `

      setTimeout(() => {
        found = []; //remove os elementos do array ou ---> found.splice(0, found.length)
        randomOvo();
      }, 2000);



    } else {
      //volta à imagem inicial passado 2 segundos
      setTimeout(() => {
        if (found.length < 2) {
          ovo.src = "assets/images/DiscoverEggs.png";
          found = found.filter(i => i !== index); // remove do array
        }

      }, 2000);
    }
  });
});

