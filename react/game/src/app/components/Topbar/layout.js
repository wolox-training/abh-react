import React from 'react';
import { NavLink } from 'react-router-dom';
import { string, func } from 'prop-types';
import Logo from '@components/Logo';

import styles from './styles.scss';

function TopbarLayout(props) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <NavLink exact to="/">
          <Logo logoImgClassName={styles.logoImg} />
        </NavLink>
      </div>
      <div className={styles.navbarRight}>
        <NavLink exact to="/game" activeClassName={styles.active} className={styles.navOption}>
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
    </nav>
  );
}

TopbarLayout.propTypes = {
  email: string,
  logout: func.isRequired
};

export default TopbarLayout;
