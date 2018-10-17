import { API } from '@config/api';
import { AUTH_SESSION_NAME } from '@constants/localStorage';
import { service as localStorageService } from '@services/localStorageService';

const apiNames = {
  API_LOGIN_PATH: '/api/Users/login'
};

export const service = {
  post: ({ email, password }) => API.post(apiNames.API_LOGIN_PATH, { email, password })
};

export const loadAuthState = () => {
  const session = localStorageService.get(AUTH_SESSION_NAME);
  return session || null;
};

export const saveAuthState = value => value && localStorageService.set(AUTH_SESSION_NAME, value);
