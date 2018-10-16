import { LOGIN_ACTIONS, USER_ACTIONS } from '@constants/redux';
import { service as authService } from '@services/authService';
import { loadAuthState, saveAuthState } from '@utils/auth';
import { API } from '@config/api';

const privateActionCreators = {
  loadApp: (id, token) => ({
    type: LOGIN_ACTIONS.LOAD_APP,
    payload: { userId: id, token }
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
  loginSuccess: (id, token) => ({
    type: LOGIN_ACTIONS.LOGIN_SUCCESS,
    payload: { id, token }
  }),
  setUserInfo: userInfo => ({
    type: USER_ACTIONS.SET_USER_INFO,
    payload: { userInfo }
  }),
  logout: () => ({
    type: LOGIN_ACTIONS.LOGOUT,
    payload: null
  })
};

export const actionCreators = {
  initApp: () => async dispatch => {
    const session = loadAuthState();
    if (session) {
      await dispatch(privateActionCreators.loadApp(session.id, session.userId));
      API.setHeader('Authorization', session.token);
      const responseUser = await authService.get(session.id);
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
      dispatch(privateActionCreators.appLoaded(true));
    }
  },
  handleLogin: (email, password) => async dispatch => {
    dispatch(privateActionCreators.loginLoading(true));
    const response = await authService.post({ email, password });
    const data = response.data;
    dispatch(privateActionCreators.loginLoading(false));
    if (response.ok) {
      saveAuthState({ token: data.id, id: data.userId });
      API.setHeader('Authorization', data.id);
      dispatch(privateActionCreators.loginLoading(true));
      const responseUser = await authService.get(data.userId, data.id);
      dispatch(privateActionCreators.loginLoading(false));
      const userData = responseUser.data;
      if (responseUser.ok) {
        const userInfo = {
          id: data.userId,
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
  handleLogout: () => async dispatch => dispatch(privateActionCreators.logout)
};
