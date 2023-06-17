jest.mock('./modules/showList.js', () => ({
    showList: jest.fn(),
    array: [],
  }));
  
  describe('updateArray', () => {
    test('should update the array and call showList', () => {
      const { updateArray } = require('./index.js');
      const listInputValue = 'New Task';
  
      const localStorageMock = (() => {
        let store = {};
        return {
          getItem: jest.fn((key) => store[key]),
          setItem: jest.fn((key, value) => {
            store[key] = value.toString();
          }),
          clear: jest.fn(() => {
            store = {};
          }),
        };
      })();
  
      Object.defineProperty(window, 'localStorage', { value: localStorageMock });
  
      updateArray(listInputValue);
  
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'Data',
        JSON.stringify([{ index: 1, description: 'New Task', completed: false }])
      );
      expect(localStorageMock.setItem).toHaveBeenCalledTimes(1);
      expect(require('./modules/showList.js').showList).toHaveBeenCalledTimes(1);
    });
  });
  