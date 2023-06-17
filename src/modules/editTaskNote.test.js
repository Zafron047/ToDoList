import editTaskNote from './editTaskNote.js';

describe('editTaskNote', () => {
  test('should update the note of a task', () => {
    // Arrange
    const task = {
      id: 1,
      description: 'Initial note',
    };
    const newNote = 'Updated note';

    // Act
    editTaskNote(task, newNote);

    // Assert
    expect(task.description).toBe(newNote);
  });

  test('should set an empty string as the note if newNote is not provided', () => {
    // Arrange
    const task = {
      id: 1,
      description: 'Initial note',
    };

    // Act
    editTaskNote(task);

    // Assert
    expect(task.description).toBe('');
  });
});
