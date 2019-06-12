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
    const row = [];
    for (i of [0,])

      return (
        <div>
          {board}
        </div>
      );
  }
}