class escapeRoom {
    id = "";
    title = ""
    image = "";
    solved = "false";
    level = 0;

    constructor(id, title, image, solved, level) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.solved = solved;
        this.level = level;
    }

    card() {
        const card = document.createElement("div");
        card.id = this.id;
        card.className = "card";

        const cardTitle = document.createElement("h3");
        cardTitle.textContent = this.title;

        const cardImage = document.createElement("img");
        cardImage.src = this.image;

        const cardLevel = document.createElement("p");
        cardLevel.textContent = this.level;

        const cardButton = document.createElement("span");
        cardButton.textContent = "Jogar Escape Room";

        card.appendChild(cardImage);
        card.appendChild(cardTitle);
        card.appendChild(cardLevel);
        card.appendChild(cardButton);

        return card;
    }

}

const cards = [
    {
        id: "card-1",
        title: "Licenciatura em TSIW: Descobre a licenciatura",
        image: "/classes_short_ex/assets/img/950126c5170f5f0c573078aab6daf416.jpg",
        solved: false,
        level: 1
    },

    {
        id: "card-2",
        title: "Licenciatura em TSIW: os temas que vais aprender!",
        image: "/classes_short_ex/assets/img/950126c5170f5f0c573078aab6daf416.jpg",
        solved: false,
        level: 2
    },

    {
        id: "card-3",
        title: "TSIW e WEB: Tendências de evolução",
        image: "/classes_short_ex/assets/img/950126c5170f5f0c573078aab6daf416.jpg",
        solved: false,
        level: 3
    },

    {
        id: "card-4",
        title: "TSIW e WEB: o mercado à tua espera",
        image: "/classes_short_ex/assets/img/950126c5170f5f0c573078aab6daf416.jpg",
        solved: false,
        level: 4
    }
];

const base = document.getElementById("escapeRoom");

for (const data of cards) {
    console.log(data);
    const room = new escapeRoom(data.id, data.title, data.image, data.level, data.solved);
    const card = room.card();
    base.appendChild(card);
}   
