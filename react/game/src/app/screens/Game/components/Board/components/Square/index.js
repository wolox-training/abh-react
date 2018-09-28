import React from 'react';

import styles from './styles.scss';

function Square() {
  return <button className={styles.square}>{Math.random() > 0.5 ? 'X' : 'O'}</button>;
}

export default Square;
