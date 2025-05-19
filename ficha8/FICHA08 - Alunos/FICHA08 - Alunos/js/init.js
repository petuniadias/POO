// Importar classe Dog
import DogModel from "../js/models/DogModel.js";

let dogs = [];  // array de objetos

// INJETAR DADOS CRIADOS A PARTIR DE INSTANCIAS DA CLASSE 
export function init() {
    
    let dog = new DogModel('Border Collie','img/BorderCollie.jpg', 'https://pt.wikipedia.org/wiki/Border_collie' );
    dogs.push(dog)

    dog = new DogModel('Bulldoge Frances', 'img/BulldogeFrances.jpg', 'https://pt.wikipedia.org/wiki/Buldogue_franc%C3%AAs' );
    dogs.push(dog)
    
    dog = new DogModel('Bull Terrier', 'img/BullTerrier.jpg', '' );
    dogs.push(dog)
    
    dog = new DogModel('Doberman', 'img/Doberman.jpg', '' );
    dogs.push(dog)

    dog = new DogModel('Golden Retriever', 'img/GoldenRetriever.jpg',  '' );
    dogs.push(dog)

    dog = new DogModel('Pastor Alemão', 'img/PastorAlemao.jpg', '' );
    dogs.push(dog)

    dog = new DogModel('Pastor Australiano',  'img/PastorAustraliano.jpg', '' );
    dogs.push(dog)

    return dogs;

}