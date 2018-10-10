import React from 'react';
import logo from '@assets/wolox_logo.svg';

import styles from './styles.scss';

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Logo;
