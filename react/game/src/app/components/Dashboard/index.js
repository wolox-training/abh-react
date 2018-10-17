import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ROUTES from '@constants/routes';
import Game from '@screens/Game';
import Home from '@screens/Home';
import Profile from '@screens/Profile';
import E404 from '@screens/Errors/E404';
import Topbar from '@components/Topbar';

import styles from './styles.scss';

function Dashboard({ location }) {
  return (
    <Fragment>
      <Topbar currentLocation={location} />
      <div className={styles.pagesContainer}>
        <Switch>
          <Route exact path={ROUTES.PRIVATE.HOME.path} component={Home} />
          <Route exact path={ROUTES.PRIVATE.GAME.path} component={Game} />
          <Route exact path={ROUTES.PRIVATE.PROFILE.path} component={Profile} />
          <Route component={E404} />
        </Switch>
      </div>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  location: state.router.location.pathname
});

Dashboard.propTypes = {
  location: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(Dashboard);
