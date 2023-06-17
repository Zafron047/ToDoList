import { trueStatus, falseStatus } from './boolean.js';

describe('trueStatus', () => {
  it('should set task.completed to true', () => {
    // Arrange
    const task = { id: 1, description: 'Task 1', completed: false };

    // Act
    trueStatus(task);

    // Assert
    expect(task.completed).toBe(true);
  });
});

describe('falseStatus', () => {
  it('should set task.completed to false', () => {
    // Arrange
    const task = { id: 1, description: 'Task 1', completed: true };

    // Act
    falseStatus(task);

    // Assert
    expect(task.completed).toBe(false);
  });
});