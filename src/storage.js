export const isStorage = (key) => localStorage.getItem(key);

export const getStorage = (key) => JSON.parse(localStorage.getItem(key));

export const setStorage = (key, todos) => {
  localStorage.setItem(key, JSON.stringify(todos));
};
