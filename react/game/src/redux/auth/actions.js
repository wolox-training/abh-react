import { withSuccess, withPostSuccess, completeTypes, createTypes } from 'redux-recompose';
import { service as authService, loadAuthState, saveAuthState, deleteAuthState } from '@services/authService';
import { deleteGameState } from '@services/gameService';
import { API } from '@config/api';
import { push } from 'connected-react-router';
import routes from '@constants/routes';

import { TARGET_APP_LOADING, TARGET } from './constants';

const completedTypes = completeTypes(['INIT_APP_LOADING', 'LOGIN', 'LOGOUT'], ['INIT_APP_LOADING']);

export const actions = createTypes(completedTypes, '@@AUTH');

export const actionCreators = {
  initApp: () => dispatch => {
    const session = loadAuthState();
    dispatch({ type: actions.LOGIN_SUCCESS, target: TARGET, payload: session });
    if (session) API.setHeader('Authorization', session.token);
    setTimeout(() => {
      dispatch({ type: actions.INIT_APP_LOADING, target: TARGET_APP_LOADING, payload: false });
    }, 1500);
  },
  handleLogin: (email, password) => ({
    type: actions.LOGIN,
    service: authService.post,
    payload: { email, password },
    target: TARGET,
    injections: [
      withSuccess((dispatch, response) => {
        const { data } = response;
        setTimeout(() => {
          dispatch({
            type: actions.LOGIN_SUCCESS,
            payload: { token: data.id, email, userId: data.userId },
            target: TARGET
          });
          saveAuthState({ token: data.id, userId: data.userId, email });
          API.setHeader('Authorization', data.id);
          dispatch(push(routes.PRIVATE.HOME.path));
        }, 1500);
      })
    ],
    failureSelector: response => response.data.error.message
  }),
  handleLogout: () => ({
    type: actions.LOGOUT,
    service: authService.postLogout,
    target: TARGET,
    injections: [
      withPostSuccess(dispatch => {
        deleteAuthState();
        deleteGameState();
        API.setHeaders([]);
        dispatch(push(routes.AUTH.LOGIN.path));
      })
    ],
    successSelector: () => ({ token: null, email: null, userId: null }),
    failureSelector: response => response.data.error.message
  })
};
