const updateIndex = (array) => {
  array.forEach((task, arrayIndex) => {
    task.index = arrayIndex + 1;
  });
  return array;
};

export default updateIndex;
