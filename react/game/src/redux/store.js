import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { loadGameState, saveGameState } from '@utils/game';

import { reducer as game } from './game/reducer';

const persistedState = {
  game: loadGameState()
};

const reducers = combineReducers({
  game
});

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(reducers, persistedState, composeEnhancers(applyMiddleware(thunk)));
store.subscribe(() => {
  saveGameState(store.getState().game);
});
export { store };
/* eslint-enable */
