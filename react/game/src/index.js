import React from 'react';
import ReactDOM from 'react-dom';
import Game from '@screens/Game';

import registerServiceWorker from './registerServiceWorker';

import './scss/application.scss';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
