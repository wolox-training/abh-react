import { concatHistory, calculateWinner } from '@utils/game';

export const loadGame = (state, action) => action.payload;

export const gameMove = (state, action) => {
  const { history, winner, squares } = action.payload;
  return {
    history: concatHistory(history, squares),
    stepNumber: history.length,
    xIsNext: !state.xIsNext,
    winner
  };
};

export const historyChanged = (state, action) => {
  const step = action.payload;
  const winner = calculateWinner(state.history[step].squares);
  return {
    ...state,
    stepNumber: step,
    xIsNext: step % 2 === 0,
    winner
  };
};
