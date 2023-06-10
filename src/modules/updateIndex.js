/* eslint-disable */
let array = JSON.parse(localStorage.getItem('Data')) || [];

const updateIndex = () => {
    array.forEach((task, arrayIndex) => {
      task.index = arrayIndex;
    });
};
  
export { updateIndex };