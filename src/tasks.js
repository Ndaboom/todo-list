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
    // Check-box
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    task.appendChild(checkBox);
    // P tag
    const taskDescription = document.createElement('p');
    taskDescription.innerHTML = currentTask.description;
    taskDescription.setAttribute('id', 'task-description');
    taskDescription.addEventListener('click', () => {
      // Chnage next element visibility to visible
      taskDescription.classList.add('hidden');
      taskDescription.nextSibling.classList.remove('hidden');
      taskDescription.nextSibling.value = currentTask.description;
      taskDescription.nextSibling.focus();
      taskDescription.nextSibling.addEventListener('blur', () => {
        this.updateTask(currentTask.index, taskDescription.nextSibling.value);
      });
    });
    task.appendChild(taskDescription);
    // Edit text
    const taskEditText = document.createElement('input');
    taskEditText.classList.add('hidden', 'editText');
    taskEditText.setAttribute('type', 'text');
    task.appendChild(taskEditText);
    // Delete button
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
    let currentIndex = 1;
    const updatedList = tasksArr.filter((item) => item.index !== this.index);
    updatedList.forEach((task) => {
      task.index = currentIndex;
      currentIndex += 1;
    });
    localStorage.setItem('tasksArr', JSON.stringify(updatedList));
    window.location.reload();
  }

  updateTask(index, description) {
    this.index = index;
    this.description = description;
    const foundIndex = tasksArr.findIndex((x) => x.index === this.index);
    tasksArr[foundIndex] = { description: this.description, completed: false, index: this.index };
    localStorage.setItem('tasksArr', JSON.stringify(tasksArr));
    window.location.reload();
  }
}

let tasks = new Tasks();

addTask.addEventListener('click', () => {
  if (inputDesc.value) {
    const currentId = tasksArr.length + 1;
    // Insert the task
    tasks = new Tasks(inputDesc.value, false, currentId);
    tasks.addTask();
  }
});

export default tasks = new Tasks();