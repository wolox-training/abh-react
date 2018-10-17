import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '@components/Logo';

import styles from './styles.scss';

function TopbarLayout({ email, routeName, logout }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <NavLink exact to="/">
          <Logo logoImgClassName={styles.logoImg} />
        </NavLink>
      </div>
      <div className={styles.navbarCenter}>
        <h1 className={styles.pageTitle}>{routeName}</h1>
      </div>
      <div className={styles.navbarRight}>
        <NavLink exact to="/game" activeClassName={styles.active} className={styles.navOption}>
          Game
        </NavLink>
        <div className={styles.dropdown}>
          <button className={`${styles.dropdownButton} ${styles.navOption}`}>
            {email}
            <i className="fa fa-caret-down" />
          </button>
          <div className={styles.dropdownContent}>
            <NavLink exact to="/profile" activeClassName={styles.active} className={styles.dropdownOption}>
              Profile
            </NavLink>
            <button className={styles.dropdownOption} onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

TopbarLayout.propTypes = {
  email: PropTypes.string,
  routeName: PropTypes.string,
  logout: PropTypes.func.isRequired
};

export default TopbarLayout;
