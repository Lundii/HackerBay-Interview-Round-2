import React from 'react';
import { SquareContainer } from './styledSquare';
import green from '../../public/images/green.jpg'
import red from '../../public/images/red.png'

const Square = (props) => {
  const { x_axis, y_axis, selected, mainSquare } = props;
  return (
      <SquareContainer 
        selected={selected} 
        mainSquare={mainSquare}
      />
  );
};

export default Square;
