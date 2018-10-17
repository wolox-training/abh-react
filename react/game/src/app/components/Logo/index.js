import React from 'react';
import PropTypes from 'prop-types';
import logo from '@assets/wolox_logo.svg';

import styles from './styles.scss';

function Logo({ logoImgClassName }) {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt="logo" className={logoImgClassName} />
    </div>
  );
}

Logo.propTypes = {
  logoImgClassName: PropTypes.string
};

export default Logo;
