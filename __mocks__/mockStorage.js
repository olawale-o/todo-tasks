export const store = {};
export const localStorageMock = {
  getItem: jest.fn((key) => store[key]),
  setItem: jest.fn((key, value) => {
    store[key] = value;
  }),
  clear: jest.fn(() => store),
};
