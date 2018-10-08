import React from 'react';
import { arrayOf, bool, number, string, func, shape } from 'prop-types';

import styles from './styles.scss';
import Board from './components/Board';

function GameLayout({ history, stepNumber, checkStatus, movement, winner, xIsNext, handleClick }) {
  const current = history[stepNumber];
  const status = checkStatus();
  const moves = history.map(movement);

  const getClassWinner = () => {
    if (winner && winner === 'X') {
      return styles.statusWinnerX;
    } else if (winner && winner === 'O') {
      return styles.statusWinnerO;
    }
  };

  return (
    <div className={styles.game}>
      <Board squares={current.squares} xIsNext={xIsNext} onClick={handleClick} winner={winner} />
      <div className={styles.gameInfo}>
        <div className={`${styles.status} ${getClassWinner()}`}>{status}</div>
        <h3 className={styles.gameHistoryTitle}>Game History</h3>
        <ol className={styles.gameHistoryList}>{moves}</ol>
      </div>
    </div>
  );
}

GameLayout.propTypes = {
  history: arrayOf(shape({})),
  stepNumber: number,
  checkStatus: func.isRequired,
  movement: func.isRequired,
  winner: string,
  xIsNext: bool,
  handleClick: func.isRequired
};

export default GameLayout;
