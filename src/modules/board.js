import React from 'react';
import Square from './square';

export default class Board extends React.Component {
  renderSquare(i) {
    return (<Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />);
  }


  render() {
    const size = [0, 1, 2];
    const columns = [];
    const rows = [];

    for (let i in size) {
      for (let j in size) {
        columns.push(this.renderSquare(j));
      }
      rows.push(<div key={size[i]} className="board-row">{columns[i]}</div>);
    }

    return (
      <div>
        {rows}
      </div>
    )

    // return (
    //   <div>
    //     <div className="board-row">
    //       {this.renderSquare(0)}
    //       {this.renderSquare(1)}
    //       {this.renderSquare(2)}
    //     </div>
    //     <div className="board-row">
    //       {this.renderSquare(3)}
    //       {this.renderSquare(4)}
    //       {this.renderSquare(5)}
    //     </div>
    //     <div className="board-row">
    //       {this.renderSquare(6)}
    //       {this.renderSquare(7)}
    //       {this.renderSquare(8)}
    //     </div>
    //   </div>
    // );
  }
}