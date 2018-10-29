import { createTypes } from 'redux-recompose';
import { loadGameState } from '@services/gameService';

const types = ['GAME_PLAYER_MOVED', 'GAME_HISTORY_CHANGED', 'LOAD_GAME_INFO'];

export const actions = createTypes(types, '@@GAME');

export const actionCreators = {
  handleLoadGameInfo: () => dispatch => {
    dispatch({ type: actions.LOAD_GAME_INFO, payload: loadGameState() });
  },
  handlePlayerMove: (history, winner, squares) => dispatch => {
    dispatch({ type: actions.GAME_PLAYER_MOVED, payload: { history, winner, squares } });
  },
  handleHistoryChange: step => dispatch => {
    dispatch({ type: actions.GAME_HISTORY_CHANGED, payload: step });
  }
};
