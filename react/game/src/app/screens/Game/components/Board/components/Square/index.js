import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

class Square extends Component {
  /*
  * If the game is over, we just render the classic button with the className if its X or O, but none click event
  */

  /*
* From here we just render the button as desired, with onClick event, classSelected for its X or O, or null, 
* and if its a selectable square
*/
  state = {
    hover: false
  };

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
