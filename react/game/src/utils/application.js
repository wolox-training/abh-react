export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('gameState');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = gameState => {
  try {
    const serializedState = JSON.stringify(gameState);
    localStorage.setItem('gameState', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};
