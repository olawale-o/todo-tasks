const store = {};
export const localStoragemock = {
    getItem: ((key) => store[key]),
    setItem: ((key, value) => {
      store[key] = value;
    }),
    clear: jest.fn(() => store),
  };
  