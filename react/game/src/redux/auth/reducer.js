import { LOGIN_ACTIONS } from './actions';

const initialState = {
  id: null,
  token: null,
  isLoading: false,
  errorMessage: null,
  appLoaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTIONS.LOAD_APP:
      return {
        ...state,
        ...action.payload
      };
    case LOGIN_ACTIONS.LOGIN_LOADING:
      return {
        ...state,
        ...action.payload
      };
    case LOGIN_ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case LOGIN_ACTIONS.LOGIN_ERROR:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export { reducer };
