import { service as authService } from '@services/authService';
import { loadAuthState, saveAuthState } from '@utils/auth';
import { API } from '@config/api';

export const LOGIN_ACTIONS = {
  LOAD_APP: 'LOAD_APP',
  APP_LOADED: 'APP_LOADED',
  LOGIN_LOADING: 'LOGIN_LOADING',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  SET_USER_INFO: 'SET_USER_INFO'
};

const privateActionCreators = {
  loadApp: ({ userId, token }) => ({
    type: LOGIN_ACTIONS.LOAD_APP,
    payload: { userId, token }
  }),
  appLoaded: appLoaded => ({
    type: LOGIN_ACTIONS.APP_LOADED,
    payload: { appLoaded }
  }),
  loginLoading: isLoading => ({
    type: LOGIN_ACTIONS.LOGIN_LOADING,
    payload: { isLoading }
  }),
  loginError: errorMessage => ({
    type: LOGIN_ACTIONS.LOGIN_ERROR,
    payload: { errorMessage }
  }),
  loginSuccess: (userId, token) => ({
    type: LOGIN_ACTIONS.LOGIN_SUCCESS,
    payload: { userId, token }
  }),
  setUserInfo: userInfo => ({
    type: LOGIN_ACTIONS.SET_USER_INFO,
    payload: { userInfo }
  }),
  logout: () => ({
    type: LOGIN_ACTIONS.LOGOUT,
    payload: null
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
        const userInfo = {
          id: userData.id,
          email: userData.email,
          firstName: userData.firstName,
          lastName: userData.lastName,
          age: userData.age
        };
        dispatch(privateActionCreators.setUserInfo(userInfo));
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
    dispatch(privateActionCreators.loginLoading(false));
    const data = response.data;
    if (response.ok) {
      saveAuthState({ token: data.id, userId: data.userId });
      dispatch(privateActionCreators.loadApp({ userId: data.userId, token: data.id }));
      API.setHeader('Authorization', data.id);
      dispatch(privateActionCreators.loginLoading(true));
      const responseUser = await authService.get(data.userId, data.id);
      dispatch(privateActionCreators.loginLoading(false));
      const userData = responseUser.data;
      if (responseUser.ok) {
        const userInfo = {
          userId: data.userId,
          email: userData.email,
          firstName: userData.firstName,
          lastName: userData.lastName,
          age: userData.age
        };
        dispatch(privateActionCreators.setUserInfo(userInfo));
        dispatch(privateActionCreators.loginSuccess(data.userId, data.id));
      } else {
        dispatch(privateActionCreators.loginError(data.error.message));
      }
    } else {
      dispatch(privateActionCreators.loginError(data.error.message));
    }
  },
  handleLogout: () => async dispatch => {
    dispatch(privateActionCreators.logout);
  }
};
