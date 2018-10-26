import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { reducer as form } from 'redux-form';

import { reducer as auth } from './auth/reducer';
import { reducer as game } from './game/reducer';
import { reducer as profile } from './profile/reducer';

const reducers = combineReducers({
  auth,
  game,
  form,
  profile
});

export const history = createBrowserHistory();

/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(reducers), // new root reducer with router state
  composeEnhancer(applyMiddleware(routerMiddleware(history), thunk))
);
/* eslint-enable */

export { store };
