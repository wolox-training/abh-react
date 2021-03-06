import { withPostSuccess, completeTypes, createTypes } from 'redux-recompose';
import { service as authService, loadAuthState, saveAuthState, deleteAuthState } from '@services/authService';
import { deleteGameState } from '@services/gameService';
import { API } from '@config/api';
import { push } from 'connected-react-router';
import routes from '@constants/routes';

import targets from './constants';

const completedTypes = completeTypes(['INIT_APP_LOADING', 'LOGIN', 'LOGOUT'], ['INIT_APP_LOADING']);

export const actions = createTypes(completedTypes, '@@AUTH');

const nullSession = { token: null, email: null, userId: null };

export const actionCreators = {
  initApp: () => dispatch => {
    const session = loadAuthState() || nullSession;
    dispatch({ type: actions.LOGIN_SUCCESS, target: targets.AUTH_INFO, payload: session });
    if (session) API.setHeader('Authorization', session.token);
    dispatch({ type: actions.INIT_APP_LOADING, target: targets.APP_LOADING });
  },
  login: (email, password) => ({
    type: actions.LOGIN,
    service: authService.post,
    payload: { email, password },
    target: targets.AUTH_INFO,
    injections: [
      withPostSuccess((dispatch, response) => {
        const { data } = response;
        saveAuthState({ token: data.id, userId: data.userId, email });
        API.setHeader('Authorization', data.id);
        dispatch(push(routes.PRIVATE.HOME.path));
      })
    ],
    successSelector: response => ({ token: response.data.id, email, userId: response.data.userId }),
    failureSelector: response => response.data.error.message
  }),
  logout: () => ({
    type: actions.LOGOUT,
    service: authService.postLogout,
    target: targets.AUTH_INFO,
    injections: [
      withPostSuccess(dispatch => {
        deleteGameState();
        delete API.headers.Authorization;
        deleteAuthState();
        dispatch(push(routes.AUTH.LOGIN.path));
      })
    ],
    successSelector: () => nullSession,
    failureSelector: response => response.data.error.message
  })
};
