import React, { Component } from 'react';
import { arrayOf, bool, string, number, shape, func } from 'prop-types';
import { connect } from 'react-redux';
import { actionCreators } from '@redux/game/actions';
import { calculateWinner } from '@utils/game';
import { saveGameState } from '@services/gameService';
import { store } from '@redux/store';

import GameLayout from './layout';

class Game extends Component {
  componentDidMount() {
    this.props.loadGameInfo();
    this.unsuscribe = store.subscribe(() => {
      saveGameState(store.getState().game);
    });
  }

  componentWillUnmount() {
    this.unsuscribe();
  }

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
      <li key={step.id}>
        <button onClick={() => this.jumpTo(move)}>{desc}</button>
      </li>
    );
  };

  render() {
    return (
      <GameLayout
        history={this.props.history}
        stepNumber={this.props.stepNumber}
        checkStatus={this.checkStatus}
        movement={this.movement}
        winner={this.props.winner}
        xIsNext={this.props.xIsNext}
        handleClick={this.handleClick}
      />
    );
  }
}

Game.propTypes = {
  history: arrayOf(shape({})),
  xIsNext: bool,
  stepNumber: number,
  winner: string,
  playerMove: func.isRequired,
  changeHistory: func.isRequired,
  loadGameInfo: func.isRequired
};

const mapStateToProps = state => ({
  history: state.game.history,
  xIsNext: state.game.xIsNext,
  stepNumber: state.game.stepNumber,
  winner: state.game.winner
});

const mapDispatchToProps = dispatch => ({
  loadGameInfo: () => dispatch(actionCreators.handleLoadGameInfo()),
  playerMove: (history, winner, squares) =>
    dispatch(actionCreators.handlePlayerMove(history, winner, squares)),
  changeHistory: step => dispatch(actionCreators.handleHistoryChange(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
