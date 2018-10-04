import React, { Component } from 'react';
import { arrayOf, bool, string, number, shape, func } from 'prop-types';
import { connect } from 'react-redux';

import { calculateWinner } from '../../../utils/game';
import { actionCreators } from '../../../redux/game/actions';

import styles from './styles.scss';
import Board from './components/Board';

class Game extends Component {
  handleClick = position => {
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.props.winner || squares[position]) {
      return;
    }
    squares[position] = this.props.xIsNext ? 'X' : 'O';
    const winner = calculateWinner(squares);
    this.props.playerMove(history, winner, squares);
  };

  jumpTo = step => {
    this.props.changeHistory(step);
  };

  checkStatus = () => {
    if (this.props.winner) {
      if (this.props.winner === 'tie') {
        return `We have a TIE`;
      }
      return `Winner: ${this.props.winner}`;
    }
    return `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;
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
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const status = this.checkStatus();
    const moves = history.map(this.movement);

    const getClassWinner = () => {
      if (this.props.winner && this.props.winner === 'X') {
        return styles.statusWinnerX;
      } else if (this.props.winner && this.props.winner === 'O') {
        return styles.statusWinnerO;
      }
    };

    return (
      <div className={styles.game}>
        <Board
          squares={current.squares}
          xIsNext={this.props.xIsNext}
          onClick={this.handleClick}
          winner={this.props.winner}
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

Game.propTypes = {
  history: arrayOf(shape({})),
  xIsNext: bool,
  stepNumber: number,
  winner: string,
  playerMove: func.isRequired,
  changeHistory: func.isRequired
};

const mapStateToProps = state => ({
  history: state.game.history,
  xIsNext: state.game.xIsNext,
  stepNumber: state.game.stepNumber,
  winner: state.game.winner
});

const mapDispatchToProps = dispatch => ({
  playerMove: (history, winner, squares) =>
    dispatch(actionCreators.handlePlayerMove(history, winner, squares)),
  changeHistory: step => dispatch(actionCreators.handleHistoryChange(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
