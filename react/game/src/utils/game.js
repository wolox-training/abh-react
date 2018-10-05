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
