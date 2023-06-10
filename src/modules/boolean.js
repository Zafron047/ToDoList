import { updateIndex } from './updateIndex.js';

const trueStatus = (task) => {
  task.completed = true;
};
const falseStatus = (task) => {
  task.completed = false;
};

const clearCompleted = (bArray) => {
  bArray = bArray.filter((task) => !task.completed);
  updateIndex();
  localStorage.setItem('Data', JSON.stringify(bArray));
  window.location.reload();
};

export { trueStatus, falseStatus, clearCompleted };