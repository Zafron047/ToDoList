const editTaskNote = (task, newNote) => {
    task.description = newNote || '';
};
  
export default editTaskNote;