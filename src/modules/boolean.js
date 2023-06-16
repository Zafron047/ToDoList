const trueStatus = (task) => {
  task.completed = true;
};
const falseStatus = (task) => {
  task.completed = false;
};

export { trueStatus, falseStatus };