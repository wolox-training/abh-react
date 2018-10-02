import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

class Square extends Component {
  state = {
    hover: false
  };

  /*
  * Check class checks if the square has a value, if has a value it must be X or O, and will assign a propper class x-selected
  * or o-selected, if it does not have a value, and the game is not over, will assign the class selectable-square, 
  * if the square does not have value and it have a winner, the method will just return ''
  */
  checkClass = () => {
    if (this.props.value && this.props.value === 'X') {
      return styles.xSelected;
    } else if (this.props.value && this.props.value === 'O') {
      return styles.oSelected;
    } else if (!this.props.value && !this.props.winner) {
      return styles.selectableSquare;
    }
    return '';
  };

  /*
  * Check value will just check if the square has a value, if not, it will check if the current square has the state
  * of hover, and not a winner, if this is true, it will return the current player, if not it will just return ''
  */

  checkValue = () => {
    if (this.props.value) {
      return this.props.value;
    }
    return this.state.hover && !this.props.winner ? this.props.currentPlayer : '';
  };

  render() {
    return (
      <button
        className={`${styles.square} ${this.checkClass()}`}
        onClick={this.props.onClick}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        {this.checkValue()}
      </button>
    );
  }
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  currentPlayer: PropTypes.string.isRequired,
  winner: PropTypes.string
};

export default Square;
