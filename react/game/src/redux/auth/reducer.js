import { createReducer, completeState, completeReducer, onSetValue } from 'redux-recompose';

import { actions } from './actions';

const initialStateDescription = {
  authInfo: {
    userId: null,
    token: null,
    email: null
  },
  appLoading: true
};

const initialState = completeState(initialStateDescription, ['appLoading']);

const reducerDescription = {
  primaryActions: [actions.LOGIN, actions.LOGOUT],
  override: {
    [actions.INIT_APP_LOADING]: onSetValue(false)
  }
};

const reducer = createReducer(initialState, completeReducer(reducerDescription));

export { reducer };
