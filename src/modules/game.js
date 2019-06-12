import React from 'react';
import Board from './board';
import calculateWinner from './calculate-winner';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        location: { col: null, row: null },
        highlightLine: [],
      }],
      stepNumber: 0,
      xIsNext: true,
      orderByAsc: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history.slice().pop();
    const squares = current.squares.slice();
    const col = i % 3 + 1;
    const row = Math.ceil((i + 1) / 3);
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        location: { col, row },
        highlightLine: calculateWinner(squares),
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  toggleOrder() {
    this.setState({
      orderByAsc: !this.state.orderByAsc,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const stepNumber = this.state.stepNumber;
    const orderByAsc = this.state.orderByAsc;

    const moves = history.map((step, move) => {
      const desc = move ?
        `Go to move# ${move} (${step.location.col}, ${step.location.row})` :
        'Go to game start';
      const toBold = stepNumber === move ? 'bold' : null;

      return (
        <li key={move} >
          <button className={toBold} onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            highlightLine={current.highlightLine}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{orderByAsc ? moves : moves.reverse()}</ol>
          <button onClick={() => this.toggleOrder()}>Order by {orderByAsc ? 'asc' : 'desc'}</button>
        </div>
      </div>
    );
  }
}
