import { AUTH_SESSION_NAME } from '@constants/localStorage';
import { service as localStorageService } from '@services/localStorageService';

const loadAuthState = () => {
  const session = localStorageService.get(AUTH_SESSION_NAME);
  return session || null;
};

const saveAuthState = value => value && localStorageService.set(AUTH_SESSION_NAME, value);

export { loadAuthState, saveAuthState };
