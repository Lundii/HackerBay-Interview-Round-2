import React from 'react';
import PropTypes from 'prop-types';
import Square from '../Square';
import { ColumnContainer } from './styledColumn';
import { isArrayInArray } from '../../utils';

/**
 * A react functional based component
 * @param {object} props - props passed down to the component
 */
const Column = (props) => {
  const { columns, x_axis, randomSquares, middleSquare } = props;

  /**
   * 
   * @param {integer} length - the number of rolls on the board 
   */
  const getSquares = (length) => {
    const columnSquares = [];

    for ( let i = 1; i <= length; i++) {
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

Column.propTypes = {
  x_axis: PropTypes.number,
  columns: PropTypes.number,
  randomSquares: PropTypes.array,
  mainSquare: PropTypes.array
}
export default Column;
