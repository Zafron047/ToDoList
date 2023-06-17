/* eslint-disable import/no-mutable-exports */

import editTaskNote from './editTaskNote.js';
import { trueStatus, falseStatus } from './boolean.js';
import updateIndex from './updateIndex.js';
import remove from './removeItem.js';


const array = JSON.parse(localStorage.getItem('Data')) || [];

const list = document.querySelector('#list');

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

    const removeBtn = document.createElement('button');
    removeBtn.className = 'removeBtn';
    const removeIcon = document.createElement('i');
    removeIcon.className = 'fa-solid fa-trash fa-xl';
    removeBtn.appendChild(removeIcon);

    const hr = document.createElement('hr');
    hr.className = 'hr';

    list.appendChild(taskContainer);
    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(taskNote);
    taskContainer.appendChild(removeBtn);
    list.appendChild(hr);

    removeBtn.addEventListener('click', () => {
      remove(task.index);
    });

    taskNote.addEventListener('input', (event) => {
      editTaskNote(task, event.target.value);
      localStorage.setItem('Data', JSON.stringify(array));
    });

    taskNote.addEventListener('keyup', (event) => {
      if (event.key === 'Enter' || event.key === 'Escape') {
        event.preventDefault();
        event.target.blur();
      }
    });

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        trueStatus(task);
      } else {
        falseStatus(task);
      }
      localStorage.setItem('Data', JSON.stringify(array));
    });
  });
};

export {
  showList, editTaskNote, array, updateIndex,
};