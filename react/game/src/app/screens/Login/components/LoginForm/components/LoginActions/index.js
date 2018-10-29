import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ROUTES from '@constants/routes';
import Button from '@components/CustomFormFields/Button';
import formNames from '@constants/formNames';
import withLoading from '@components/withLoading';
import msg from '@constants/messages';

import styles from './styles.scss';

const { btnTitles, btnTooltips } = formNames.LOGIN;
function LoginActions({ errorMessage, pristine, submitting }) {
  return (
    <Fragment>
      {errorMessage && <div className={styles.errorMessage}>Error: {errorMessage}</div>}
      <Button disabled={pristine || submitting} type="submit" title={btnTooltips.login} visible>
        {btnTitles.login}
      </Button>
      <p className={styles.message}>
        Not registered?{' '}
        <Link to={ROUTES.AUTH.REGISTER.path} title={btnTooltips.register}>
          {btnTitles.register}
        </Link>
      </p>
    </Fragment>
  );
}

LoginActions.propTypes = {
  errorMessage: PropTypes.string,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default withLoading(LoginActions, { isContained: true, msgLoading: msg.login.LOADING_LOGIN });
