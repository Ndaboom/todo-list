import './style.css';

const tasksContainer = document.querySelector('.tasks-list');

const tasksArr = [
  {
    description: 'Note description',
    completed: false,
    index: 0,
  },
  {
    description: 'Play COD',
    completed: false,
    index: 1,
  },
  {
    description: 'Go through JS docs',
    completed: false,
    index: 2,
  }
];

function populateUI(currentTask) {
  const task = document.createElement('div');
  task.className = 'task';
  task.innerHTML = `
    <input type="checkbox" />
    <p>${currentTask.description}</p>
    <span class="material-symbols-outlined">
        list
    </span>
  `;
  tasksContainer.appendChild(task);
}

tasksArr.forEach((task) => {
  populateUI(task);
});