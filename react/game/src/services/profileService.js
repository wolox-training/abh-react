import { API } from '@config/api';

const apiNames = {
  API_USER_PATH: '/api/Users/'
};

export const service = {
  patch: (userId, values) => API.patch(`${apiNames.API_USER_PATH}${userId}`, values),
  get: userId => API.get(`${apiNames.API_USER_PATH}${userId}`, null)
};
