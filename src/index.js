import './style.css';

const array = JSON.parse(localStorage.getItem('Data')) || [];
const listInput = document.querySelector('#listInput');
let counter = 0;
const list = document.querySelector('#list');

const updateArray = () => {
  counter += 1;
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
