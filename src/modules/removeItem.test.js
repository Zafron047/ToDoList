import remove from './removeItem.js';
import updateIndex from './updateIndex.js';

// Mock localStorage methods
const mockGetItem = jest.fn();
const mockSetItem = jest.fn();
const mockRemoveItem = jest.fn();
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: mockGetItem,
    setItem: mockSetItem,
    removeItem: mockRemoveItem,
  },
});

// Mock the updateIndex function
jest.mock('./updateIndex', () => jest.fn());

describe('remove', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should remove item from array and update localStorage', () => {
    // Mock the existing array in localStorage
    const existingArray = [
      { index: 1, description: 'Task 1', completed: false },
      { index: 2, description: 'Task 2', completed: true },
    ];
    mockGetItem.mockReturnValue(JSON.stringify(existingArray));

    // Mock window.location.reload
    const mockReload = jest.fn();
    Object.defineProperty(window, 'location', {
      value: {
        reload: mockReload,
      },
      writable: true,
    });

    // Remove an item
    const itemToRemove = 1;
    remove(itemToRemove);

    // Verify that the updateIndex function is called with the modified array
    expect(updateIndex).toHaveBeenCalledWith([
      { index: 2, description: 'Task 2', completed: true },
    ]);

    // Verify that the updated array is stored in localStorage
    expect(mockSetItem).toHaveBeenCalledWith(
      'Data',
      JSON.stringify([{ index: 2, description: 'Task 2', completed: true }]),
    );

    // Verify that window.location.reload is called
    expect(mockReload).toHaveBeenCalled();
  });

  test('should not update localStorage if array is empty', () => {
    // Mock an empty array in localStorage
    mockGetItem.mockReturnValue(null);

    // Mock window.location.reload
    const mockReload = jest.fn();
    Object.defineProperty(window, 'location', {
      value: {
        reload: mockReload,
      },
    });

    // Remove an item
    const itemToRemove = 1;
    remove(itemToRemove);

    // Verify that the updateIndex function is not called
    expect(updateIndex).not.toHaveBeenCalled();

    // Verify that localStorage.setItem is not called
    expect(mockSetItem).not.toHaveBeenCalled();

    // Verify that localStorage.removeItem is called
    expect(mockRemoveItem).toHaveBeenCalledWith('Data');

    // Verify that window.location.reload is called
    expect(mockReload).toHaveBeenCalled();
  });
});
