import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { loadGameState, saveGameState } from '@utils/game';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { reducer as form } from 'redux-form';

import { reducer as game } from './game/reducer';

const persistedState = {
  game: loadGameState()
};

const reducers = combineReducers({
  game,
  form
});

export const history = createBrowserHistory();

/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(reducers), // new root reducer with router state
  persistedState,
  composeEnhancer(applyMiddleware(routerMiddleware(history), thunk))
);
/* eslint-enable */

store.subscribe(() => {
  saveGameState(store.getState().game);
});
export { store };
