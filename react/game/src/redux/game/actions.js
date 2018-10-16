import { concatHistory, calculateWinner } from '@utils/game';
import { loadGameState } from '@services/gameService';

export const GAME_ACTIONS = {
  GAME_PLAYER_MOVED: 'GAME_PLAYER_MOVED',
  GAME_HISTORY_CHANGED: 'GAME_HISTORY_CHANGED',
  LOAD_GAME_INFO: 'LOAD_GAME_INFO'
};

const privateActionCreators = {
  loadGameInfo: gameInfo => ({
    type: GAME_ACTIONS.LOAD_GAME_INFO,
    payload: gameInfo
  }),
  gamePlayerMove: move => ({
    type: GAME_ACTIONS.GAME_PLAYER_MOVED,
    payload: move
  }),

  gameHistoryChanged: step => ({
    type: GAME_ACTIONS.GAME_HISTORY_CHANGED,
    payload: step
  })
};

export const actionCreators = {
  handleLoadGameInfo: () => dispatch => {
    dispatch(privateActionCreators.loadGameInfo(loadGameState()));
  },
  handlePlayerMove: (history, winner, squares) => (dispatch, getState) => {
    const state = getState();
    const move = {
      history: concatHistory(history, squares),
      stepNumber: history.length,
      xIsNext: !state.game.xIsNext,
      winner
    };
    dispatch(privateActionCreators.gamePlayerMove(move));
  },
  handleHistoryChange: step => (dispatch, getState) => {
    const state = getState();
    const winner = calculateWinner(state.game.history[step].squares);
    const change = {
      stepNumber: step,
      xIsNext: step % 2 === 0,
      winner
    };
    dispatch(privateActionCreators.gameHistoryChanged(change));
  }
};
