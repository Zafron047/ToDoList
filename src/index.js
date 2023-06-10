import './style.css';
import { showList, array, counter } from './modules/showList.js';

const listInput = document.querySelector('#listInput');

const updateArray = () => {
  array.push({
    index: counter,
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

showList();