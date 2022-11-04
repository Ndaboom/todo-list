// Add task button
const addTask = document.querySelector('#add_task');
const inputDesc = document.querySelector('#task_description');
const tasksArr = JSON.parse(localStorage.getItem('tasksArr')) || [];
class Tasks {
  constructor(description, completed, index) {
    this.index = index;
    this.description = description;
    this.completed = completed;

    // Task list selector
    this.tasksContainer = document.querySelector('.tasks-list');
  }

  populateTaskUI(currentTask) {
    const task = document.createElement('div');
    task.className = 'task';
    task.innerHTML = `
            <input type="checkbox" />
            <p>${currentTask.description}</p>
            <span class="material-symbols-outlined">
                list
            </span>
    `;
    this.tasksContainer.appendChild(task);
  }

  readTasks() {
    tasksArr.forEach((task) => {
      this.populateTaskUI(task);
    });
  }

  addTask() {
    tasksArr.push(this);
    localStorage.setItem('tasksArr', JSON.stringify(tasksArr));
    window.location.reload();
  }
}

let tasks = new Tasks();

addTask.addEventListener('click', () => {
  if (inputDesc.value) {
    const currentId = tasksArr.length;
    // Insert the task
    tasks = new Tasks(inputDesc.value, false, currentId);
    tasks.addTask();
  }
});

export default tasks = new Tasks();