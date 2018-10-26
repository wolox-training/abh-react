import { API } from '@config/api';
import { AUTH_SESSION_NAME } from '@constants/localStorage';
import { service as localStorageService } from '@services/localStorageService';

const apiNames = {
  API_LOGIN_PATH: '/api/Users/login',
  API_LOGOUT_PATH: '/api/Users/logout'
};

export const service = {
  post: ({ email, password }) => API.post(apiNames.API_LOGIN_PATH, { email, password }),
  postLogout: () => API.post(apiNames.API_LOGOUT_PATH, null)
};

export const loadAuthState = () => {
  const session = localStorageService.get(AUTH_SESSION_NAME);
  return session || null;
};

export const saveAuthState = value => value && localStorageService.set(AUTH_SESSION_NAME, value);

export const deleteAuthState = () => localStorageService.delete(AUTH_SESSION_NAME);
