import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { loadState, saveState } from '@utils/application';

import { reducer as game } from './game/reducer';

const persistedGameState = loadState();

const reducers = combineReducers({
  game
});

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(reducers, persistedGameState, composeEnhancers(applyMiddleware(thunk)));
store.subscribe(() => saveState(store.getState()));
export { store };
/* eslint-enable */
