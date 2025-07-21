// library.js
// Complete a classe Library aqui

class Book {
  constructor(id, title, year, reserved = false) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.reserved = reserved;
  }

  reserve() {
    this.reserved = true;
  }

  deliver() {
    this.reserved = false;
  }
}

class Library {

  constructor(libraryList = [], id = 1) {
    this.libraryList = libraryList;
    this.id = id;
  }

  generateId() {
    return this.id++
  }

  addBook(title, year) {
    const exists = this.libraryList.some(book => book.title === title && book.year === year);
    if (exists) {
      console.log(`The book already exists`);
    } else {
      const book = new Book(this.generateId(), title, year);
      this.libraryList.push(book);
    }
  }

  getBookById(id) {
    return this.libraryList.find(book => book.id === id);
  }

}