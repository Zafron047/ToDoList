import './style.css';
// import _ from 'lodash';

// let cloud = 'cloud';
const array = JSON.parse(localStorage.getItem('Data')) || [];
const listInput = document.querySelector('#listInput');
let counter = 1;
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

const showList = () => {
  list.innerHTML = '';
  array.forEach((task) => {
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
    edit.className = 'fa-sharp fa-solid fa-pen-to-square fa-xl';

    const remove = document.createElement('i');
    remove.className = 'fa-solid fa-trash fa-xl';

    const hr = document.createElement('hr');
    hr.className = 'hr';

    list.appendChild(taskContainer);
    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(taskNote);
    taskContainer.appendChild(edit);
    taskContainer.appendChild(remove);
    list.appendChild(hr);
  });
};

listInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && listInput.value) {
    updateArray(listInput.value);
    listInput.value = '';

    showList();
  }
});

showList();
