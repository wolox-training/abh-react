import React from 'react';

import styles from './styles.scss';

const withLoading = (Component, { isContained, msgLoading }) => ({ loading, ...props }) => {
  const LoadingComp = loading ? (
    <div className={`${styles.loadingContainer} ${!isContained ? styles.external : ''}`}>
      <div className={styles.loading} />
      <div className={styles.text}>{msgLoading}</div>
    </div>
  ) : (
    <Component {...props} />
  );
  return LoadingComp;
};

export default withLoading;
