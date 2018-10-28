import { createReducer, completeState, completeReducer, onReadValue } from 'redux-recompose';

import { actions } from './actions';

const initialStateDescription = {
  profileInfo: {
    firstName: null,
    id: null,
    lastName: null,
    age: null,
    aboutMe: null,
    profilePicture: null,
    backgroundPicture: null
  },
  successMessage: null
};

const initialState = completeState(initialStateDescription, ['successMessage']);

const reducerDescription = {
  primaryActions: [actions.PROFILE_INFO],
  override: {
    [actions.SET_SUCCESS_MESSAGE]: onReadValue()
  }
};

const reducer = createReducer(initialState, completeReducer(reducerDescription));

export { reducer };
