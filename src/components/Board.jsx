import React from 'react';
import Letter from './Letter';
import './Game.css';

function Board(props) {

  const rowArray = [];
  for(let i = 0; i< props.row; i++) {
    rowArray.push(i);
  }
  console.log(rowArray.length);

  const colArray = [];
  for(let j = 0; j< props.col; j++) {
    colArray.push(j);
  }
  console.log(colArray.length);

  return <div className = {props.className}>
      {rowArray.map((numR, index) => <div className='row'>
          {colArray.map((numC, index) => <Letter letterRow={numR} letterCol={numC} />)}
        </div>)}
    </div>; 
}

export default Board;