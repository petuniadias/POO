const taskForm = document.querySelector('.task-form');

taskForm.addEventListener('submit', event => {
  event.preventDefault();

  const name = document.querySelector('.name-input').value;
  const description = document.querySelector('.description-input').value;
  const date = document.querySelector('.date-input').value;
  const type = document.querySelector('.type-input').value;

  renderTasks(name, description, date, type);
});

function renderTasks(name, description, date, type) {
  const taskGrid = document.querySelector('.task-container');

  const newTask = document.createElement('div');
  newTask.className = 'task-box';

  newTask.innerHTML = `
    <div class="title-and-close-icon">
      <div class="task-title">${name}</div>
      <img class="close" src="assets/icons/close_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg">
    </div>

    <div class="task-description">${description}</div>
    <div class="task-date">${date}</div>
    <div class="task-status">${type}</div>
  `;

  taskGrid.appendChild(newTask);

  /*
  const taskTitle = document.createElement('div')
  taskTitle.className = 'task-title';
  taskTitle.textContent = name;
  const taskDescription = document.createElement('div')
  taskDescription.className = 'task-description';
  taskDescription.textContent = description;
  const taskDate = document.createElement('div')
  taskDate.className = 'task-date';
  taskDate.textContent = date;
  const taskType = document.createElement('div')
  taskType.className = 'task-type';
  taskType.textContent = type;


  newTask.appendChild(taskTitle); 
  newTask.appendChild(taskDescription);
  newTask.appendChild(taskDate);
  newTask.appendChild(taskType);
  */

  //newTask.append(taskTitle, taskDescription, taskDate, taskType); can be used too

  switch (type) {
    case 'ToDoList':
      newTask.style.backgroundColor = 'rgb(57, 173, 36)';
      break;

    case 'InProgress':
      newTask.style.backgroundColor = 'rgb(219, 41, 201)';
      break;

    case 'InReview':
      newTask.style.backgroundColor = 'rgb(220, 105, 4)';
      break;

    case 'Done':
      newTask.style.backgroundColor = 'rgb(160, 26, 209)';
      break;

    default:
      newTask.style.backgroundColor = 'rgb(211, 211, 211)';
  }
}

function deleteTask() {
  const close = document.querySelector('.close');

  close.addEventListener('click', () => {
    
  });
}