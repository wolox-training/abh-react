import { API } from '@config/api';
import { API_LOGIN_PATH } from '@constants/apiNames';

export const service = {
  post: values => API.post(API_LOGIN_PATH, { email: values.email, password: values.password })
};
