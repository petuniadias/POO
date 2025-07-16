function numCities(...number) {
  const numberArray = [...number];
  console.log(`Nº de Cidades recebidas: ${numberArray.length}`);
  console.log(`Nome das Cidades recebidas: ${numberArray}`);
}

numCities('Braga', 'Madrid', 'Aveiro');