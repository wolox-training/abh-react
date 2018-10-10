import React from 'react';

import styles from './styles.scss';

function E404() {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorTitle}>404</h1>
      <h2 className={styles.errorBody}>Not found</h2>
    </div>
  );
}

export default E404;
