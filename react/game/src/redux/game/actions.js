import { concatHistory } from '../../utils/game';

const privateActionCreators = {
  gamePlayerMove: move => ({
    type: 'GAME_PLAYER_MOVED',
    payload: move
  }),

  gameHistoryChanged: step => ({
    type: 'GAME_HISTORY_CHANGED',
    payload: step
  })
};

export const actionCreators = {
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
    const change = {
      stepNumber: step,
      xIsNext: step % 2 === 0,
      winner: step === state.game.history.length - 1 ? state.game.winner : null
    };
    dispatch(privateActionCreators.gameHistoryChanged(change));
  }
};
