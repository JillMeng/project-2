import React from 'react';
import Letter from './Letter';
import './Game.css';

function Board(props) {

  const rowArray = [];
  for (let i = 0; i < props.row; i++) {
    rowArray.push(i);
  }

  const colArray = [];
  for (let j = 0; j < props.col; j++) {
    colArray.push(j);
  }

  return <div className={props.className}>
    <div className='message'>{props.message}</div>
    {rowArray.map((numR, index) => <div className='row'>
      {colArray.map((numC, index) => <Letter letterRow={numR} letterCol={numC} />)}
    </div>)}
  </div>;
}

export default Board;