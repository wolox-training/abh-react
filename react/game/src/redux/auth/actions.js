import { service as authService, loadAuthState, saveAuthState, deleteAuthState } from '@services/authService';
import { deleteGameState } from '@services/gameService';
import { API } from '@config/api';
import { push } from 'connected-react-router';

export const AUTH_ACTIONS = {
  LOAD_APP: 'LOAD_APP',
  APP_LOADED: 'APP_LOADED',
  LOGIN_LOADING: 'LOGIN_LOADING',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  SET_USER_INFO: 'SET_USER_INFO',
  LOGOUT: 'LOGOUT'
};

const privateActionCreators = {
  loadApp: ({ userId, token }) => ({
    type: AUTH_ACTIONS.LOAD_APP,
    payload: { userId, token }
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
  setUserInfo: userInfo => ({
    type: AUTH_ACTIONS.SET_USER_INFO,
    payload: { userInfo }
  }),
  logout: () => ({
    type: AUTH_ACTIONS.LOGOUT
  })
};

export const actionCreators = {
  initApp: () => async dispatch => {
    dispatch(privateActionCreators.appLoaded(false));
    dispatch(privateActionCreators.loginLoading(true));
    const session = loadAuthState();
    const { token, userId } = session || { userId: null, token: null };
    dispatch(privateActionCreators.loadApp({ userId, token }));
    if (session) {
      API.setHeader('Authorization', session.token);
      const responseUser = await authService.get(session.userId);
      dispatch(privateActionCreators.loginLoading(false));
      const userData = responseUser.data;
      if (responseUser.ok) {
        dispatch(privateActionCreators.setUserInfo({ ...responseUser.data }));
      } else {
        dispatch(privateActionCreators.loginError(userData.error.message));
      }
      dispatch(privateActionCreators.appLoaded(true));
    } else {
      dispatch(privateActionCreators.loginLoading(false));
      dispatch(privateActionCreators.appLoaded(true));
    }
  },
  handleLogin: (email, password) => async dispatch => {
    dispatch(privateActionCreators.loginLoading(true));
    const response = await authService.post({ email, password });
    const data = response.data;
    if (response.ok) {
      saveAuthState({ token: data.id, userId: data.userId });
      dispatch(privateActionCreators.loadApp({ userId: data.userId, token: data.id }));
      API.setHeader('Authorization', data.id);
      dispatch(privateActionCreators.loginLoading(true));
      const responseUser = await authService.get(data.userId, data.id);
      dispatch(privateActionCreators.loginLoading(false));
      if (responseUser.ok) {
        dispatch(privateActionCreators.setUserInfo({ ...responseUser.data }));
        dispatch(privateActionCreators.loginSuccess(data.userId, data.id));
      } else {
        dispatch(privateActionCreators.loginError(responseUser.data.error.message));
      }
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
      dispatch(push('/'));
      dispatch(privateActionCreators.appLoaded(true));
    }
  }
};
