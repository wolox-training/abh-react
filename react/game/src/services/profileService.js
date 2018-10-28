import { API } from '@config/api';

const apiNames = {
  API_USER_PATH: '/api/Users/'
};

export const service = {
  patch: values => API.patch(`${apiNames.API_USER_PATH}${values.id}`, values),
  get: userId => API.get(`${apiNames.API_USER_PATH}${userId}`, null)
};
