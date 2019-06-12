import React from 'react';
import Square from './square';

export default class Board extends React.Component {
  renderSquare(i) {
    return (<Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
      key={i}
    />);
  }

  render() {
    const size = 3;
    const rows = [];

    for (let i = 0; i < size; i++) {
      let columns = [];
      for (let j = 0; j < size; j++) {
        columns[j] = this.renderSquare(j + i * size);
      }
      rows.push(<div key={i} className="board-row">{columns}</div>);
    }

    return (
      <div>
        {rows}
      </div>
    );
  }
}