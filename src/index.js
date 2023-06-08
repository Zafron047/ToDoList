import _ from 'lodash';
import './style.css';

// let cloud = 'cloud';
let array = JSON.parse(localStorage.getItem('Data')) || [];
const listInput = document.querySelector('#listInput');
let counter = 1;
const list = document.querySelector('#list');

const updateArray = (counter) => {
  counter++;
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

let showList = () => {
  list.innerHTML = '';
  array.forEach((task, index) => {
    const taskContainer = document.createElement('li');
    taskContainer.classList.add('taskContainer');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('check');

    const taskNote = document.createElement('input');
    taskNote.type = 'text';
    taskNote.classList.add('taskNote');
    taskNote.value = task.description;

    const edit = document.createElement('i');
    edit.className = 'fa-solid fa-pen-to-square';

    const remove = document.createElement('i');
    remove.className = 'fa-solid fa-trash';

    list.appendChild(taskContainer);
    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(taskNote);
    taskContainer.appendChild(edit);
  });
};
showList();
