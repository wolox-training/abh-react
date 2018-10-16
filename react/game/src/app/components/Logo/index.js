import React from 'react';
import { string } from 'prop-types';
import logo from '@assets/wolox_logo.svg';

import styles from './styles.scss';

function Logo(props) {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt="logo" className={props.logoImgClassName} />
    </div>
  );
}

Logo.propTypes = {
  logoImgClassName: string
};

export default Logo;
