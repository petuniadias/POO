function showTabuada(numero) {
  for(i = 1; i <= 10; i++) {
    const result = numero * i;
    console.log(`
      ${numero} * ${i} = ${result}
      `);
  }
}

showTabuada(10);