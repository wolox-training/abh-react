import React, { Component } from 'react';

import styles from './styles.scss';
import Board from './components/Board';

class Game extends Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    xIsNext: true,
    stepNumber: 0,
    winner: null
  };

  handleClick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.state.winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      winner: this.calculateWinner(squares)
    });
  };

  jumpTo = step => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
      winner: step === this.state.history.length - 1 ? this.state.winner : null
    });
  };

  checkStatus = () => {
    if (this.state.winner) {
      if (this.state.winner === 'tie') {
        return `We have a TIE`;
      }
      return `Winner: ${this.state.winner}`;
    }
    return `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
  };

  calculateWinner = squares => {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    let fullLine = 0;
    for (let i = 0; i < lines.length; i += 1) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[b] && squares[c]) {
        fullLine += 1;
      }
      if (fullLine === 8) {
        return 'tie';
      }
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  movement = (step, move) => {
    const desc = move ? `Go to move #${move}` : 'Go to game start';
    return (
      <li key={parseInt(move.toString(), 10)}>
        <button onClick={() => this.jumpTo(move)}>{desc}</button>
      </li>
    );
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const status = this.checkStatus();
    const moves = history.map(this.movement);

    const showClassWinner = () => {
      if (this.state.winner && this.state.winner === 'X') {
        return styles.statusWinnerX;
      } else if (this.state.winner && this.state.winner === 'O') {
        return styles.statusWinnerO;
      }
    };

    return (
      <div className={styles.game}>
        <Board
          squares={current.squares}
          xIsNext={this.state.xIsNext}
          onClick={i => this.handleClick(i)}
          winner={this.state.winner}
        />
        <div className={styles.gameInfo}>
          <div className={`${styles.status} ${showClassWinner()}`}>{status}</div>
          <h3 className={styles.gameHistoryTitle}>Game History</h3>
          <ol className={styles.gameHistoryList}>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
