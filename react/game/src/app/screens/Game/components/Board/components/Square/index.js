import React, { Component } from 'react';
import { string, func } from 'prop-types';

import styles from './styles.scss';

class Square extends Component {
  state = {
    hover: false
  };

  getValue = () => {
    if (this.props.value) {
      return this.props.value;
    }
    return this.state.hover && !this.props.winner ? this.props.currentPlayer : '';
  };

  getSquareClass = () => {
    const { value } = { ...this.props };
    if (value === 'X') {
      return styles.xSelected;
    } else if (value === 'O') {
      return styles.oSelected;
    } else if (!value && !this.props.winner) {
      return styles.selectableSquare;
    }
    return '';
  };

  render() {
    return (
      <button
        className={`${styles.square} ${this.getSquareClass()}`}
        onClick={this.props.onClick}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        {this.getValue()}
      </button>
    );
  }
}

Square.propTypes = {
  value: string,
  onClick: func.isRequired,
  currentPlayer: string.isRequired,
  winner: string
};

export default Square;
