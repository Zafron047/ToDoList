import './style.css';
import { showList, array, clearCompleted } from './modules/showList.js';

const listInput = document.querySelector('#listInput');

const updateArray = () => {
  array.push({
    index: array.length + 1,
    description: listInput.value,
    completed: false,
  });
  localStorage.setItem('Data', JSON.stringify(array));
};

listInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && listInput.value) {
    updateArray(listInput.value);
    listInput.value = '';
    showList();
  }
});

const clearAll = document.querySelector('#clearAll');
clearAll.addEventListener('click', () => {
  clearCompleted(array);
});

showList();