import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import './scss/application.scss';

import Game from '~screens/Game'; // eslint-disable-line import/first

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
