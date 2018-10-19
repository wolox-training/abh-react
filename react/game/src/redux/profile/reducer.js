import { PROFILE_ACTIONS } from './actions';

const initialState = {
  firstName: null,
  lastName: null,
  age: null,
  aboutMe: null,
  profilePicture: null,
  backgroundPicture: null,
  errorMessage: null,
  successMessage: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_ACTIONS.SUBMIT_LOADING:
      return {
        ...state,
        ...action.payload
      };
    case PROFILE_ACTIONS.SUBMIT_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case PROFILE_ACTIONS.SUBMIT_ERROR:
      return {
        ...state,
        ...action.payload
      };
    case PROFILE_ACTIONS.RESET_FORM:
      return initialState;
    default:
      return state;
  }
};

export { reducer };
