import './style.css';
import { showList, array } from './modules/showList.js';
import clearCompleted from './modules/clearCompleted.js';

const updateArray = (inputValue) => {
  array.push({
    index: array.length + 1,
    description: inputValue,
    completed: false,
  });
  localStorage.setItem('Data', JSON.stringify(array));
};

const handleKeyDown = (event) => {
  const listInput = event.target;
  if (event.key === 'Enter' && listInput.value) {
    updateArray(listInput.value);
    listInput.value = '';
    showList();
  }
};

const listInput = document.querySelector('#listInput');
if (listInput) {
  listInput.addEventListener('keydown', handleKeyDown);
}

const clearAll = document.querySelector('#clearAll');
if (clearAll) {
  clearAll.addEventListener('click', () => {
    clearCompleted(array);
  });
}

showList();

export default updateArray;
