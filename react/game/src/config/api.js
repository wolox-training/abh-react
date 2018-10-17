import { create } from 'apisauce';

export const API = create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000
});
