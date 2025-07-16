function calcSoma() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  console.log(result)
}

calcSoma(1, 2, 4);
calcSoma(1, 4, 4);
calcSoma(50, 20, 24);