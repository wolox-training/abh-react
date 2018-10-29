import React from 'react';

import styles from './styles.scss';

const withLoading = (Component, external) => props => {
  const { loading, msgLoading } = props;
  const LoadingComp = loading ? (
    external ? (
      <div className={styles.loadingContainerExternal}>
        <div className={styles.loadingExternal} />
        <div className={styles.loadingTextExternal}>{msgLoading}</div>
      </div>
    ) : (
      <div className={styles.loadingContainerInternal}>
        <div className={styles.loadingInternal} />
        <div className={styles.loadingTextInternal}>{msgLoading}</div>
      </div>
    )
  ) : (
    <Component {...props} />
  );
  return LoadingComp;
};

export default withLoading;
