import updateIndex from "./updateIndex";

const remove = (x) => {
  let array = JSON.parse(localStorage.getItem('Data')) || [];
  array = array.filter((task) => task.index !== x);

  if (array.length > 0) {
    updateIndex(array);
    localStorage.setItem('Data', JSON.stringify(array));
  } else {
    localStorage.removeItem('Data');
  }

  window.location.reload();
};

export default remove;
