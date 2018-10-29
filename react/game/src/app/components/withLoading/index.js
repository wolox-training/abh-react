import React from 'react';

import styles from './styles.scss';

const withLoading = (Component, external) => props => {
  const { loading, msgLoading } = props;
  const endClass = external ? 'External' : 'Internal';
  const LoadingComp = loading ? (
    <div className={styles[`loadingContainer${endClass}`]}>
      <div className={styles[`loading${endClass}`]} />
      <div className={styles[`loadingText${endClass}`]}>{msgLoading}</div>
    </div>
  ) : (
    <Component {...props} />
  );
  return LoadingComp;
};

export default withLoading;
