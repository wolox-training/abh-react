import React, { Component } from 'react';
import { string, func, number } from 'prop-types';

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
    const { value } = this.props;
    if (value === 'X') {
      return styles.xSelected;
    } else if (value === 'O') {
      return styles.oSelected;
    } else if (!value && !this.props.winner) {
      return styles.selectableSquare;
    }
    return '';
  };

  toggleHoverState = () => {
    this.setState(prevState => ({ hover: !prevState.hover }));
  };

  handleClick = () => {
    this.props.onClick(this.props.position);
  };

  render() {
    const value = this.getValue();
    const squareClasses = `${styles.square} ${this.getSquareClass()}`;

    return (
      <button
        className={`${squareClasses}`}
        onClick={this.handleClick}
        onMouseEnter={this.toggleHoverState}
        onMouseLeave={this.toggleHoverState}
      >
        {value}
      </button>
    );
  }
}

Square.propTypes = {
  value: string,
  onClick: func.isRequired,
  currentPlayer: string.isRequired,
  winner: string,
  position: number
};

export default Square;
