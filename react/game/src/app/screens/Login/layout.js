import React from 'react';
import { func } from 'prop-types';
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
  onSubmit: func.isRequired
};

export default LoginLayout;
