import React, { Component } from 'react';

import { winLines } from '../../../constants/game';

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

  handleClick = position => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.state.winner || squares[position]) {
      return;
    }
    squares[position] = this.state.xIsNext ? 'X' : 'O';
    this.setState(prevState => ({
      history: history.concat([
        {
          squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !prevState.xIsNext,
      winner: this.calculateWinner(squares)
    }));
  };

  jumpTo = step => {
    this.setState(prevState => ({
      stepNumber: step,
      xIsNext: step % 2 === 0,
      winner: step === prevState.history.length - 1 ? prevState.winner : null
    }));
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
    const lines = winLines;
    let winner;
    if (squares.every(el => el != null)) {
      winner = 'tie';
    }
    lines.forEach(line => {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        winner = squares[a];
      }
    });
    return winner || null;
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

    const getClassWinner = () => {
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
          onClick={this.handleClick}
          winner={this.state.winner}
        />
        <div className={styles.gameInfo}>
          <div className={`${styles.status} ${getClassWinner()}`}>{status}</div>
          <h3 className={styles.gameHistoryTitle}>Game History</h3>
          <ol className={styles.gameHistoryList}>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
