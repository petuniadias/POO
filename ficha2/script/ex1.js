function showInverse(texto) {
  let invertedText = '';
  for(let i = texto.length - 1; i >= 0; i--) {
    invertedText += texto[i];
  }
  return invertedText;
}

console.log(showInverse('bomdia'));

