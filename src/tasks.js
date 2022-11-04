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
    console.log("Current array state", tasksArr);
  }

  populateTaskUI(currentTask) {
    const task = document.createElement('div');
    task.className = 'task';
    task.innerHTML = `
            <input type="checkbox" />
            <p>${currentTask.description}</p>
    `;
    const deleteBtn = document.createElement('span');
    deleteBtn.className = 'material-symbols-outlined';
    deleteBtn.innerHTML = 'delete';
    deleteBtn.addEventListener('click', () => {
    this.removeTask(currentTask.index);
    });
    task.appendChild(deleteBtn);
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

  removeTask(index) {
    this.index = index;
    let currentIndex = 0;
    const updatedList = tasksArr.filter((item) => item.index !== this.index);
    updatedList.forEach((task) => {
      task.index = currentIndex;
      currentIndex++;    
    });
    localStorage.setItem('tasksArr', JSON.stringify(updatedList));
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