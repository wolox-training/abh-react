import { winLines } from '@constants/game';

export const concatHistory = (history, squares) => history.concat([{ squares }]);

export const calculateWinner = squares => {
  const lines = winLines;
  let winner;
  if (squares.every(el => el != null)) {
    winner = 'tie';
  }
  lines.forEach(line => {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      winner = squares[a];
    }
  });
  return winner || null;
};

export const loadGameState = () => {
  try {
    const serializedState = localStorage.getItem('gameState');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveGameState = gameState => {
  try {
    const serializedState = JSON.stringify(gameState);
    localStorage.setItem('gameState', serializedState);
  } catch (err) {
    throw Error('Error: ', err);
  }
};
