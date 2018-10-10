import { create } from 'apisauce';

const type = 'application/json';

export const API = create({
  baseURL: process.env.REACT_API_BASE_URL,
  timeout: 5000
}).setHeaders({ Accept: type, 'Content-Type': type });
