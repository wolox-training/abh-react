import React from 'react';
import { func } from 'prop-types';

import styles from './styles.scss';
import LoginForm from './components/LoginForm';

const LoginLayout = ({ onSubmit }) => (
  <div className={styles.pageContainer}>
    <div className={styles.loginPage}>
      <LoginForm onSubmit={onSubmit} />
    </div>
  </div>
);

LoginLayout.propTypes = {
  onSubmit: func.isRequired
};

export default LoginLayout;