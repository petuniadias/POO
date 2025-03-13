function findWord(texto, palavraDePesquisa) {
  const text = texto.split(" ");
  let wordCount = 0;

  for (i = 0; i < text.length; i++) {
    if(text[i] === palavraDePesquisa) {
      wordCount++
    }
  }
  return wordCount;
}

const texto = prompt();
const palavraDePesquisa = prompt();

console.log(texto);
console.log(palavraDePesquisa);

console.log(findWord(texto, palavraDePesquisa));