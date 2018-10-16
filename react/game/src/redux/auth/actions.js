import { service as authService, loadAuthState, saveAuthState } from '@services/authService';

export const LOGIN_ACTIONS = {
  LOAD_APP: 'LOAD_APP',
  APP_LOADED: 'APP_LOADED',
  LOGIN_LOADING: 'LOGIN_LOADING',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS'
};

const privateActionCreators = {
  loadApp: session => ({
    type: LOGIN_ACTIONS.LOAD_APP,
    payload: session
  }),
  appLoaded: loaded => ({
    type: LOGIN_ACTIONS.APP_LOADED,
    payload: { loaded }
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
  })
};

export const actionCreators = {
  initApp: () => dispatch => {
    dispatch(privateActionCreators.appLoaded(false));
    const session = loadAuthState();
    const { token, id } = session || { token: null, id: null };
    dispatch(privateActionCreators.loadApp({ token, id }));
    dispatch(privateActionCreators.appLoaded(true));
  },
  handleLogin: (email, password) => async dispatch => {
    dispatch(privateActionCreators.loginLoading(true));
    const response = await authService.post({ email, password });
    const data = response.data;
    if (response.ok) {
      saveAuthState({ id: data.userId, token: data.id });
      dispatch(privateActionCreators.loginSuccess(data.userId, data.id));
    } else {
      dispatch(privateActionCreators.loginError(data.error.message));
    }
    dispatch(privateActionCreators.loginLoading(false));
  }
};
