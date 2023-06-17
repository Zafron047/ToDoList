const trueStatus = (task) => {
  task.completed = true;
};
const falseStatus = (task) => {
  task.completed = false;
};

module.exports = {
  trueStatus,
  falseStatus,
};