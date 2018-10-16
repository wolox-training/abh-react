import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import ROUTES from '@constants/routes';
import Game from '@screens/Game';
import Home from '@screens/Home';
import E404 from '@screens/Errors/E404';
import Topbar from '@components/Topbar';

import styles from './styles.scss';

function Dashboard() {
  return (
    <Fragment>
      <Topbar />
      <div className={styles.pagesContainer}>
        <Switch>
          <Route exact path={ROUTES.PRIVATE.HOME.path} component={Home} />
          <Route exact path={ROUTES.PRIVATE.GAME.path} component={Game} />
          <Route component={E404} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default Dashboard;
