import { createReducer } from 'redux-recompose';

import { loadGame, gameMove, historyChanged } from './selectors';
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

const reducerDescription = {
  [actions.LOAD_GAME_INFO]: loadGame,
  [actions.GAME_PLAYER_MOVED]: gameMove,
  [actions.GAME_HISTORY_CHANGED]: historyChanged
};

const reducer = createReducer(initialState, reducerDescription);

export { reducer };
