const initialState = {
  history: [
    {
      squares: Array(9).fill(null)
    }
  ],
  xIsNext: true,
  stepNumber: 0,
  winner: null
};

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
