import React from 'react';

import styles from './styles.scss';

class Square extends React.Component {
  render() {
    return <button className={styles.square}>{Math.random() > 0.5 ? 'X' : 'O'}</button>;
  }
}

export default Square;
