export default class Tasks {
  constructor(index, description, completed) {
    this.index = index;
    this.description = description;
    this.completed = completed;

    // For tasks rendering
    this.tasksArr = [
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
      },
    ];

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
      this.tasksArr.forEach((task) => {
        this.populateTaskUI(task);
      });
    }
}