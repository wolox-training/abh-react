import { PROFILE_ACTIONS } from './actions';

const initialState = {
  info: {
    firstName: null,
    id: null,
    lastName: null,
    age: null,
    aboutMe: null,
    profilePicture: null,
    backgroundPicture: null
  },
  errorMessage: null,
  successMessage: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_ACTIONS.SET_PROFILE_INFO:
      return {
        ...state,
        ...action.payload
      };
    case PROFILE_ACTIONS.LOADING:
      return {
        ...state,
        ...action.payload
      };
    case PROFILE_ACTIONS.SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case PROFILE_ACTIONS.ERROR:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export { reducer };
