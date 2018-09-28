import React from 'react';

import styles from './styles.scss';
import Board from './components/Board';

function Game() {
  return (
    <div className={styles.game}>
      <div className={styles.gameBoard}>
        <Board />
      </div>
      <div className={styles.gameInfo}>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default Game;
