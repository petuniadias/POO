//atribuição dos ovos com o Ovo da páscoa
const ovos = document.querySelectorAll('.ovo');

const ovo1Index = Math.floor(Math.random() * 12);

let ovo2Index;

do {
  ovo2Index = Math.floor(Math.random() * 12) + 1;
} while (ovo1Index === ovo2Index);

const easterOvos = [ovo1Index, ovo2Index]
let found = [];

console.log(ovo1Index, ovo2Index);

console.log(easterOvos);

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
      found.forEach(i => {
        ovos[i].src = "assets/images/Ovo.png";
      });
      console.log('venceste! Parabéns! És ganda burro, perdeste o teu tempo a jogar esta merda!');
      found = []; //remove os elementos do array ou ---> found.splice(0, found.length)


    } else {
      //volta à imagem inicial passado 2 segundos
      setTimeout(() => {
        ovo.src = "assets/images/DiscoverEggs.png";
      }, 2000);
    }
  });
});

