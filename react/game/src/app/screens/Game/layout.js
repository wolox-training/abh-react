import React, { Component } from 'react';
import { arrayOf, bool, number, string, func, shape } from 'prop-types';

import styles from './styles.scss';
import Board from './components/Board';

class GameLayout extends Component {
  getClassWinner = () => {
    if (this.props.winner && this.props.winner === 'X') {
      return styles.statusWinnerX;
    } else if (this.props.winner && this.props.winner === 'O') {
      return styles.statusWinnerO;
    }
  };

  render() {
    const current = this.props.history[this.props.stepNumber];
    const status = this.props.checkStatus();
    const moves = this.props.history.map(this.props.movement);
    return (
      <div className={styles.game}>
        <Board
          squares={current.squares}
          xIsNext={this.props.xIsNext}
          onClick={this.props.handleClick}
          winner={this.props.winner}
        />
        <div className={styles.gameInfo}>
          <div className={`${styles.status} ${this.getClassWinner()}`}>{status}</div>
          <h3 className={styles.gameHistoryTitle}>Game History</h3>
          <ol className={styles.gameHistoryList}>{moves}</ol>
        </div>
      </div>
    );
  }
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
