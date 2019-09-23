import React, { useState, Component } from 'react';
import Board from './components/Board';
import { AppContainer, Input, FormContainer, Header, FormItem, Label } from './styledApp';
import { getRandomInteger, closestSquare } from './utils';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      rowNum: 10,
      columnNum: 10,
      mainSquare: [],
      randomSquares: [],
      removeIndex: 0,
      moves: 0,
      startButtonEnabled: false,
    }
    this.moveMainSquare = this.moveMainSquare.bind(this);
    this.getRandomSquares = this.getRandomSquares.bind(this);
    this.moveHorizontal = this.moveHorizontal.bind(this);
    this.moveVertical = this.moveVertical.bind(this);
    this.updateRandomSquares = this.updateRandomSquares.bind(this);
    this.updateSquareCount = this.updateSquareCount.bind(this);
    this.start = this.start.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.randomSquares.length != prevState.randomSquares.length) {
      this.moveMainSquare()
    }
  }

  updateSquareCount(e, axis) {
    const { value } = e.target;
    if (axis === 'row') {
      this.setState({ rowNum: value })
    }
    else {
      this.setState({ columnNum: value })
    }
  }

  updateRandomSquares() {
    const item = this.state.randomSquares[this.state.removeIndex];
    const newArray = this.state.randomSquares.filter((square) => {
      return !(item[0] === square[0] && item[1] === square[1])
    })
    this.setState({
      randomSquares: newArray
    })
  }

  moveHorizontal( current, next, main, near){
    if (next < current) {
        this.setState({
          mainSquare: [current-1, this.state.mainSquare[1]],
          moves: this.state.moves + 1
        }, () => {
          current -= 1
          setTimeout(() => {
            this.moveHorizontal(current, next, main, near)
          }, 250)
        })
    } else if (next > current ) {
        this.setState({
          mainSquare: [current+1, this.state.mainSquare[1]],
          moves: this.state.moves + 1
      }, () => {
        current += 1
        setTimeout(() => {
          this.moveHorizontal(current, next, main, near)
        }, 250)
      })
  } 
  else {
      this.moveVertical(main[1], near[1])
  }
}

  moveVertical( current, next){
    if (next < current) {
        this.setState({
          mainSquare: [this.state.mainSquare[0], current-1],
          moves: this.state.moves + 1
        }, () => {
          current -= 1
          setTimeout(() => {
            this.moveVertical(current, next)
          }, 250)
        })
    } else if (next > current ) {
        this.setState({
          mainSquare: [this.state.mainSquare[0], current+1],
          moves: this.state.moves + 1
      }, () => {
        current += 1
        setTimeout(() => {
          this.moveVertical(current, next)
        }, 250)
      })
  }
  else {
    this.updateRandomSquares();
}
}

  moveMainSquare() {
    const { randomSquares, mainSquare } = this.state;
    const  { minIndex, nearest } = closestSquare(randomSquares, mainSquare);
    this.setState({
      removeIndex: minIndex
    })
    if (minIndex != undefined) this.moveHorizontal(mainSquare[0], nearest[0], mainSquare, nearest);
  }

  getRandomSquares() {
    const { rowNum, columnNum } = this.state;
    const rows = parseInt(rowNum);
    const columns = parseInt(columnNum);
    const middle = (rows + columns) / 2;
    for (let i = 1; i <= middle; i++) {
      const randomRow = getRandomInteger(1, rowNum);
      const randomColumn = getRandomInteger(1, columnNum);
      const axis = [randomRow, randomColumn];
      this.setState((state) => ({
        randomSquares: [...state.randomSquares, axis],
        mainSquare: [Math.ceil(rows/2), Math.ceil(columns/2)]
      }));
    }
  }

  start() {
    this.getRandomSquares();
    this.setState({
      startButtonEnabled: true
    })
  }

  reset() {
    this.setState({
      rowNum: 10,
      columnNum: 10,
      mainSquare: [],
      randomSquares: [],
      removeIndex: 0,
      moves: 0,
      startButtonEnabled: false,
    })
  } 

  render(){
    return(
      <AppContainer>
      <Header>
        <FormContainer>
          <FormItem>
            <Label> Number of rows: </Label>
            <Input type="number" value={this.state.rowNum} onChange={(e) => {this.updateSquareCount(e, 'row')} } />
          </FormItem>
          <FormItem>
            <Label> Number of column: </Label>
            <Input type="number" value={this.state.columnNum} onChange={(e) => {this.updateSquareCount(e, 'column')} } />
          </FormItem>
          <FormItem>
            <Label> Total number of moves: </Label>
            <Input type="test" disabled value={this.state.moves} />
          </FormItem>
          <Input type="button" value="Start" disabled={this.state.startButtonEnabled} onClick={() => this.start()} />
          <Input type="button" value="Reset" onClick={() => this.reset()} />
        </FormContainer>
      </Header>
      <Board 
        rows={this.state.rowNum}
        columns={this.state.columnNum}
        mainSquare={this.state.mainSquare}
        moveMainSquare={this.moveMainSquare}
        randomSquares={this.state.randomSquares}
      />
      </AppContainer>
    )
  }
}

export default App;
