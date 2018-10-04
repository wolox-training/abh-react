import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { reducer as game } from './game/reducer';

const reducers = combineReducers({
  game
});

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
/* eslint-enable */
