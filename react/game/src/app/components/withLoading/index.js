import React, { Fragment } from 'react';

import styles from './styles.scss';

const withLoading = Component => props => {
  const { loading, msgLoading, msgError } = props;
  const loadingComp = loading ? (
    <div className={styles.loadingContainer}>
      <div className={styles.loading} />
      <div className={styles.loadingText}>{msgLoading}</div>
    </div>
  ) : msgError ? (
    <Fragment>
      <div className={styles.error}>{msgError}</div>
      <Component {...props} />
    </Fragment>
  ) : (
    <Component {...props} />
  );
  return loadingComp;
};

export default withLoading;
