import React, { useState, useEffect, Component } from 'react';
import Column from '../Column';
import { BoardContainer } from './styledBoard';

class Board extends Component {
  constructor(props){
    super(props);
    this.getRows = this.getRows.bind(this);
  }

  getRows(numbers) {
    const { columns } = this.props;
    const rowSquares = [];

    for (let i = 1; i <= numbers; i++){
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
export default Board;
