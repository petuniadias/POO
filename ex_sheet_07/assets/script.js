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
    
    agendaItems.push(newAgenda);

    addToGrid();
}
document.getElementById('form').addEventListener('submit', addAgenda);

function addToGrid() {
    const grid = document.getElementById('grid');
    
    agendaItems.forEach((agendaItems, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h3>${agendaItems.title}</h3>
            <p>${agendaItems.description}</p>
            <p>${agendaItems.date}</p>
            <p>${agendaItems.category}</p>
            `;

            grid.appendChild(card);

        });
}