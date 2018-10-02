import React from 'react';
import PropTypes from 'prop-types';

import Square from './components/Square';
import styles from './styles.scss';

function Board({ squares, onClick, xIsNext, winner }) {
  const renderSquare = i => (
    <Square
      onClick={() => onClick(i)}
      value={squares[i]}
      currentPlayer={xIsNext ? 'X' : 'O'}
      winner={winner}
    />
  );

  return (
    <div className={styles.boardContainer}>
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
  );
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  xIsNext: PropTypes.bool.isRequired,
  winner: PropTypes.string
};

export default Board;
