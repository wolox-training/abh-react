import React, { Component, Fragment } from 'react';

import Square from './components/Square';
import styles from './styles.scss';

class Board extends Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true,
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    winner: null
  };

  handleClick = i => {
    const squares = this.state.squares.slice();
    if (this.state.winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares,
      xIsNext: !this.state.xIsNext,
      winner: this.calculateWinner(squares)
    });
  };

  calculateWinner = squares => {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < lines.length; i += 1) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  renderSquare = i => (
    <Square
      onClick={() => this.handleClick(i)}
      value={this.state.squares[i]}
      currentPlayer={this.state.xIsNext ? 'X' : 'O'}
      winner={this.state.winner}
    />
  );

  render() {
    let status;
    if (this.state.winner) {
      status = `Winner: ${this.state.winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className={styles.boardContainer}>
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
    );
  }
}

export default Board;
