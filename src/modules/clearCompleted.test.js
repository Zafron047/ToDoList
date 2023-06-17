import clearCompleted from './clearCompleted.js';
import updateIndex from './updateIndex.js';

jest.mock('./updateIndex', () => {
  const updateIndexMock = jest.fn();
  return updateIndexMock;
});

// Mocking localStorage and window.location
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};
Object.defineProperty(global, 'localStorage', { value: localStorageMock, configurable: true });

const windowReloadMock = jest.fn();
Object.defineProperty(global, 'window', { value: { location: { reload: windowReloadMock } }, configurable: true });

describe('clearCompleted', () => {
  test('should filter completed tasks, update index, update localStorage, and reload the page', () => {
    // Arrange
    const array = [
      { id: 1, task: 'Task 1', completed: false },
      { id: 2, task: 'Task 2', completed: true },
      { id: 3, task: 'Task 3', completed: false },
    ];

    const expectedNewArray = [
      { id: 1, task: 'Task 1', completed: false },
      { id: 3, task: 'Task 3', completed: false },
    ];

    // Act
    clearCompleted(array);

    // Assert
    expect(updateIndex).toHaveBeenCalledWith(expectedNewArray);
    expect(localStorage.setItem).toHaveBeenCalledWith('Data', JSON.stringify(expectedNewArray));
    expect(windowReloadMock).toHaveBeenCalled();
  });
});
