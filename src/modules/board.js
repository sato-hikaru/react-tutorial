import React from 'react';
import Square from './square';

export default class Board extends React.Component {
  renderSquare(i, highlight) {
    return (<Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
      key={i}
      highlight={highlight}
    />);
  }

  render() {
    const size = 3;
    const rows = [];
    const highlightLine = this.props.highlightLine || [];

    for (let i = 0; i < size; i++) {
      const columns = [];
      for (let j = 0; j < size; j++) {
        const index = j + i * size;
        const highlight = highlightLine.includes(index);
        columns[j] = this.renderSquare(index, highlight);
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