import { API } from '@config/api';
import { API_LOGIN_PATH, API_USER_PATH } from '@constants/apiNames';

export const service = {
  post: ({ email, password }) => API.post(API_LOGIN_PATH, { email, password }),
  get: userId => API.get(`${API_USER_PATH}${userId}`, null)
};
