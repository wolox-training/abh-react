import { winLines } from '@constants/game';
import { GAME_STATE_NAME } from '@constants/localStorage';
import { service as localStorageService } from '@services/localStorageService';

const loadGameState = () => localStorageService.get(GAME_STATE_NAME);

const saveGameState = gameState => localStorageService.set(GAME_STATE_NAME, gameState);

const concatHistory = (history, squares) => history.concat([{ id: history.length - 1, squares }]);

const calculateWinner = squares => {
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

export { loadGameState, saveGameState, concatHistory, calculateWinner };
