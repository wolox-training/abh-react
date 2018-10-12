import { LOGIN_ACTIONS } from '@constants/redux';
import { service as authService } from '@services/authService';
import { loadAuthState, saveAuthState } from '@utils/auth';

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
  initApp: () => async dispatch => {
    const session = loadAuthState();
    const { token, id } = session || { token: null, id: null };
    await dispatch(privateActionCreators.loadApp({ token, id }));
    dispatch(privateActionCreators.appLoaded(true));
  },
  handleLogin: (email, password) => async dispatch => {
    dispatch(privateActionCreators.loginLoading(true));
    const response = await authService.post({ email, password });
    const data = response.data;
    dispatch(privateActionCreators.loginLoading(false));
    if (response.ok) {
      saveAuthState({ id: data.userId, token: data.id });
      dispatch(privateActionCreators.loginSuccess(data.userId, data.id));
    } else {
      dispatch(privateActionCreators.loginError(data.error.message));
    }
  }
};
