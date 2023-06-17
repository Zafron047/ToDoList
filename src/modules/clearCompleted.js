import updateIndex from './updateIndex.js';

const clearCompleted = (array) => {
  const newArray = array.filter((task) => !task.completed);
  updateIndex(newArray);
  localStorage.setItem('Data', JSON.stringify(newArray));
  window.location.reload();
};

export default clearCompleted;