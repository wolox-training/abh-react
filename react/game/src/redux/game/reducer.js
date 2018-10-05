import { initialState } from '@constants/game';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GAME_PLAYER_MOVED':
      return {
        ...state,
        ...action.payload
      };
    case 'GAME_HISTORY_CHANGED':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export { reducer };
