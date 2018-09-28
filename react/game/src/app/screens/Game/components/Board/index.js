import React, { Component, Fragment } from 'react';

import Square from './components/Square';
import styles from './styles.scss';

class Board extends Component {
  renderSquare = i => <Square value={i} />;

  render() {
    const status = 'Next player: X';

    return (
      <Fragment>
        <div className={styles.status}>{status}</div>
        <div className={styles.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </Fragment>
    );
  }
}

export default Board;
