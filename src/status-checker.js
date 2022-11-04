const tasksArr = JSON.parse(localStorage.getItem('tasksArr')) || [];

function checker(state) {
  if (state) {
    return true;
  }
  return false;
}

function updateTaskStatus(description, completed, index) {
  const foundIndex = tasksArr.findIndex((x) => x.index === index);
  tasksArr[foundIndex] = { description: description, completed: !completed, index: index };
  localStorage.setItem('tasksArr', JSON.stringify(tasksArr));
  window.location.reload();
}

export { checker, updateTaskStatus };