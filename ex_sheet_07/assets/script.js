//2.

const agendaItems = [{
    title: 'Birthday party',
    description: 'Birthday party at the beach',
    date: '2024-04-25T14:00:00',
    category: 'Others'
}];


//3.

function addAgenda(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    
    const newAgenda = {
        title,
        description,
        date,
        category
    };
    
    //3. b.
    const currentDate = new Date();
    const agendaDate = new Date(date);
    if (agendaDate < currentDate) {
        alert('Date must be greater than the current date');
        return;
    }

    //3. c.
    const exists = agendaItems.some((agendaItems) => {
        return agendaItems.title === title && agendaItems.description === description && agendaItems.date === date && agendaItems.category === category;
    });

    if (exists) {
        alert('Agenda already exists');
        return;
    }

    agendaItems.push(newAgenda);

    addToAgenda();
}
document.getElementById('form').addEventListener('submit', addAgenda);

//4.
function addToAgenda() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    //5.
    const currentDate = new Date();
    const agendaDate = new Date(date);

    if (agendaDate < currentDate) {
        card.classList.add('expired');
    }

    //6.
    agendaItems.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    });

    agendaItems.forEach((agendaItems, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        //7.
        card.classList.add(agendaItems.category.toLowerCase());
        
        card.innerHTML = `
            <button id="deleteBtn" onclick="deleteAgenda(${index})">X</button>
            <h3>${agendaItems.title}</h3>
            <p>${agendaItems.description}</p>
            <p>${agendaItems.date}</p>
            <p>${agendaItems.category}</p>
            `;

            grid.appendChild(card);

        });
}

function deleteAgenda(index) {
    agendaItems.splice(index, 1);
    addToAgenda();
}

addToAgenda();