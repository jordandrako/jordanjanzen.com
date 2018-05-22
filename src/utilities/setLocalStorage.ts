export const setLocalStorage = (key: string, data: object): void => {
  localStorage.setItem(key, JSON.stringify({ ...data }));
};
