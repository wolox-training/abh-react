import React from 'react';
import { arrayOf, string, func, bool } from 'prop-types';

import Square from './components/Square';
import styles from './styles.scss';

function Board({ squares, onClick, xIsNext, winner }) {
  const renderSquare = position => (
    <Square
      position={position}
      onClick={onClick}
      value={squares[position]}
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
  squares: arrayOf(string).isRequired,
  onClick: func.isRequired,
  xIsNext: bool.isRequired,
  winner: string
};

export default Board;
