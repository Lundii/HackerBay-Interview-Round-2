import React from 'react';
import PropTypes from 'prop-types';
import { SquareContainer } from './styledSquare';

/**
 * A functional based component to display the squares
 * @param {object} props - props passed down to the component
 */
const Square = (props) => {
  const { selected, mainSquare } = props;
  return (
      <SquareContainer 
        selected={selected} 
        mainSquare={mainSquare}
      />
  );
};

Square.propTypes = {
  selected: PropTypes.bool,
  mainSquare: PropTypes.bool,
}

export default Square;
