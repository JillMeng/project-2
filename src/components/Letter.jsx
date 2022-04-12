import React, { useContext } from 'react';
import { AppContext } from './Game';

function Letter(props) {
  const { board, answer, currCount } = useContext(AppContext);
  const letter = board[props.letterRow][props.letterCol];

  const correct = answer[props.letterCol] === letter;
  const almost = !correct && letter && answer.includes(letter);

  // only check after we press 'enter'
  const letterResult = currCount.row > props.letterRow &&
    (correct ? "correct" : almost ? "almost" : "wrong");

  return (
    <div className='letter' id={letterResult}>{letter}</div>
  )
}

export default Letter