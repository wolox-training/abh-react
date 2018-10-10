export const service = {
  get: key => {
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    } catch (err) {
      throw Error('Error: ', err);
    }
  },
  set: (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
      throw Error('Error: ', err);
    }
  },
  delete: key => {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      throw Error('Error: ', err);
    }
  }
};
