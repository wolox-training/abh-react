import { completeTypes, createTypes } from 'redux-recompose';
import { service as authService, loadAuthState, saveAuthState, deleteAuthState } from '@services/authService';
import { deleteGameState } from '@services/gameService';
import { API } from '@config/api';
import { push } from 'connected-react-router';
import routes from '@constants/routes';

export const AUTH_ACTIONS = {
  LOAD_APP: 'LOAD_APP',
  APP_LOADED: 'APP_LOADED',
  LOGIN_LOADING: 'LOGIN_LOADING',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT'
};

const completedTypes = completeTypes(['CHECK_AUTH'], ['INITIAL_LOADING_SUCCESS', 'LOGOUT']);

export const actions = createTypes(completedTypes, '@@AUTH');

const privateActionCreators = {
  loadApp: ({ userId, token, email }) => ({
    type: AUTH_ACTIONS.LOAD_APP,
    payload: { userId, token, email }
  }),
  appLoaded: appLoaded => ({
    type: AUTH_ACTIONS.APP_LOADED,
    payload: { appLoaded }
  }),
  loginLoading: isLoading => ({
    type: AUTH_ACTIONS.LOGIN_LOADING,
    payload: { isLoading }
  }),
  loginError: errorMessage => ({
    type: AUTH_ACTIONS.LOGIN_ERROR,
    payload: { errorMessage }
  }),
  loginSuccess: (userId, token) => ({
    type: AUTH_ACTIONS.LOGIN_SUCCESS,
    payload: { userId, token }
  }),
  logout: () => ({
    type: AUTH_ACTIONS.LOGOUT
  })
};

export const actionCreators = {
  initApp: () => async dispatch => {
    dispatch(privateActionCreators.appLoaded(false));
    const session = loadAuthState();
    const { token, userId, email } = session || { userId: null, token: null, email: null };
    dispatch(privateActionCreators.loadApp({ userId, token, email }));
    if (session) {
      API.setHeader('Authorization', session.token);
    }
    dispatch(privateActionCreators.appLoaded(true));
  },
  handleLogin: (email, password) => async dispatch => {
    dispatch(privateActionCreators.loginLoading(true));
    const response = await authService.post({ email, password });
    const data = response.data;
    if (response.ok) {
      saveAuthState({ token: data.id, userId: data.userId, email });
      dispatch(privateActionCreators.loadApp({ userId: data.userId, token: data.id, email }));
      API.setHeader('Authorization', data.id);
    } else {
      dispatch(privateActionCreators.loginError(data.error.message));
    }
    dispatch(privateActionCreators.loginLoading(false));
  },
  handleLogout: () => async dispatch => {
    const response = await authService.postLogout();
    if (response.ok) {
      deleteAuthState();
      deleteGameState();
      dispatch(privateActionCreators.logout());
      dispatch(push(routes.AUTH.LOGIN.path));
      dispatch(privateActionCreators.appLoaded(true));
    }
  }
};
