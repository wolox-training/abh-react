import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import Game from '@screens/Game';
import { store } from '@redux/store';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to={{ pathname: '/about' }}>About</Link>
    <Link replace to="/contact">
      Contact
    </Link>
  </nav>
);

function App() {
  return (
    <Router>
      <Fragment>
        <Links />
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route path="/about" render={() => <h1>About</h1>} />
        <Route path="/contact" render={() => <h1>Contact</h1>} />
      </Fragment>
    </Router>
  );
}

export default App;

/* <Provider store={store}>
  <Game />
</Provider> */
