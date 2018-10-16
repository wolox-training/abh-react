import { LOGIN_ACTIONS, USER_ACTIONS } from '@constants/redux';

const initialState = {
  userId: null,
  token: null,
  isLoading: false,
  errorMessage: null,
  appLoaded: false,
  userInfo: {
    id: null,
    email: null,
    firstName: null,
    lastName: null,
    age: null
  }
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
    case USER_ACTIONS.SET_USER_INFO:
      return {
        ...state,
        ...action.payload
      };
    case LOGIN_ACTIONS.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export { reducer };
