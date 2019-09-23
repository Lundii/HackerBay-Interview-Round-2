import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Column from '../Column';
import { BoardContainer } from './styledBoard';

/**
 * Board - A class based component
 * @class Board
 */
class Board extends Component {
  constructor(props){
    super(props);
    this.getRows = this.getRows.bind(this);
  }

  /**
   * class method to display the number of columns in the board
   * @param {integer} length - the number of columns in the board
   * @return an array containing the column elements
   */
  getRows(length) {
    const { columns } = this.props;
    const rowSquares = [];

    for (let i = 1; i <= length; i++) {
      const row = 
      <Column 
        columns={columns}
        key={i}
        x_axis={i}
        randomSquares={this.props.randomSquares}
        middleSquare={this.props.mainSquare}
      />
      rowSquares.push(row);
    }
    return rowSquares;
  }

  /**
   * component render method
   */
  render(){
    const { rows } = this.props;
    const boardRows = this.getRows(rows);
    return (
      <BoardContainer>
        {boardRows}
      </BoardContainer>
    );
  }
}

Board.propTypes = {
  rows: PropTypes.number,
  columns: PropTypes.number,
  randomSquares: PropTypes.array,
  mainSquare: PropTypes.array
}

export default Board;
