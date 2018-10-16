import { GAME_ACTIONS } from './actions';

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_ACTIONS.LOAD_GAME_INFO:
      return {
        ...state,
        ...action.payload
      };
    case GAME_ACTIONS.GAME_PLAYER_MOVED:
      return {
        ...state,
        ...action.payload
      };
    case GAME_ACTIONS.GAME_HISTORY_CHANGED:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export { reducer };
