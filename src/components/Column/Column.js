import React from 'react';
import Square from '../Square';
import { ColumnContainer } from './styledColumn';
import { isArrayInArray } from '../../utils';

const Column = (props) => {
  const { columns, x_axis, randomSquares, middleSquare } = props;
  const getSquares = (number) => {
    const columnSquares = [];

    for ( let i = 1; i <= number; i++) {
      const selected = isArrayInArray(randomSquares, [i, x_axis]);
      const mainSquare = (middleSquare[0] === i && middleSquare[1] === x_axis);
      const square = 
      <Square 
        key={i}
        x_axis={x_axis}
        y_axis={i}
        selected={selected}
        mainSquare={mainSquare}
      />
      columnSquares.push(square);
    }
    return columnSquares;
  }


  const squares = getSquares(columns)
  return (
    <ColumnContainer>
      {squares}
    </ColumnContainer>
  )
}

export default Column;