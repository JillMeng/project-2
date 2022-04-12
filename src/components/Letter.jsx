import React, { useContext } from 'react';
import { AppContext } from './Game';


function Letter(props) {
    const {board} = useContext(AppContext);
    const letter = board[props.letterRow][props.letterCol];
  return (
      
    <div className='letter'>{letter}</div>
  )
}

export default Letter