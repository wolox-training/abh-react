import { createReducer } from 'redux-recompose';
import { concatHistory, calculateWinner } from '@utils/game';

import { actions } from './actions';

const initialState = {
  history: [
    {
      id: null,
      squares: Array(9).fill(null)
    }
  ],
  xIsNext: true,
  stepNumber: 0,
  winner: null
};

const loadGame = (state, action) => action.payload;

const gameMove = (state, action) => {
  const { history, winner, squares } = action.payload;
  return {
    history: concatHistory(history, squares),
    stepNumber: history.length,
    xIsNext: !state.xIsNext,
    winner
  };
};

const historyChanged = (state, action) => {
  const step = action.payload;
  const winner = calculateWinner(state.history[step].squares);
  return {
    ...state,
    stepNumber: step,
    xIsNext: step % 2 === 0,
    winner
  };
};

const reducerDescription = {
  [actions.LOAD_GAME_INFO]: loadGame,
  [actions.GAME_PLAYER_MOVED]: gameMove,
  [actions.GAME_HISTORY_CHANGED]: historyChanged
};

const reducer = createReducer(initialState, reducerDescription);

export { reducer };
