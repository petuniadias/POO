//4.

let bands = [];

// CARREGAR BANDAS DA LOCALSTORAGE
export function init() {
    if (localStorage.bands) {
      const tempBands = JSON.parse(localStorage.bands);
      for(let band of tempBands) {
        users.push(new User(band.name, band.genre, band.cover, band.desc, band.music, band.userId));
      }
    } else {
      bands = [];
    }
  }

//2.

class Band {
    name = "";
    genre = "";
    cover = "";
    desc = "";
    music = "";
    userId = "";

    constructor(name, genre, cover, desc, music, userId) {
        this.name = name;
        this.genre = genre;
        this.cover = cover;
        this.desc = desc;
        this.music = music;
        this.userId = userId;
    }
};