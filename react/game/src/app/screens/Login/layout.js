import React from 'react';
import PropTypes from 'prop-types';
import Logo from '@components/Logo';

import styles from './styles.scss';
import LoginForm from './components/LoginForm';

function LoginLayout({ onSubmit }) {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.loginPage}>
        <div className={styles.loginFormContainer}>
          <Logo />
          <LoginForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}

LoginLayout.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default LoginLayout;
