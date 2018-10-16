import { API } from '@config/api';
import { API_LOGIN_PATH, API_USER_PATH, API_LOGOUT_PATH } from '@constants/apiNames';

export const service = {
  post: ({ email, password }) => API.post(API_LOGIN_PATH, { email, password }),
  postLogout: () => API.post(API_LOGOUT_PATH, null),
  get: userId => API.get(`${API_USER_PATH}${userId}`, null)
};
