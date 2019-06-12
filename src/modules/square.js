import React from 'react';

export default function Square(props) {
  return (
    <button
      className={props.highlight ? 'square highlight' : 'square'}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
