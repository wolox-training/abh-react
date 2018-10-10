import api from '@config/api';

import { API_LOGIN_PATH } from '../constants/apiNames';

export const services = {
  postLoginAPI: values => api.get(API_LOGIN_PATH, { email: values.email, password: values.password })
};
