import React from 'react';
import { NavLink } from 'react-router-dom';
import { string, func } from 'prop-types';

import styles from './styles.scss';

function TopbarLayout(props) {
  return (
    <div className={styles.navbar}>
      <NavLink to="/" activeClassName={styles.active}>
        Home
      </NavLink>
      <NavLink to="/game" activeClassName={styles.active}>
        Game
      </NavLink>
      <div className={styles.dropdown}>
        <button className={styles.dropdownBtn}>
          {props.email}
          <i className="fa fa-caret-down" />
        </button>
        <div className={styles.dropdownContent}>
          <button onClick={props.logout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

TopbarLayout.propTypes = {
  email: string,
  logout: func.isRequired
};

export default TopbarLayout;
