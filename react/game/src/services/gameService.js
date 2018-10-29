import { GAME_STATE_NAME } from '@constants/localStorage';

import { service as localStorageService } from './localStorageService';

export const loadGameState = () => localStorageService.get(GAME_STATE_NAME);

export const saveGameState = gameState => localStorageService.set(GAME_STATE_NAME, gameState);

export const deleteGameState = () => localStorageService.delete(GAME_STATE_NAME);
