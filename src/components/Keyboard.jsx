import React, { useCallback } from 'react';
import Key from './Key';

function Keyboard() {
  const lettersL1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const lettersL2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const lettersL3 = ["Z", "X", "C", "V", "B", "N", "M",];

  return (
    <div>
    <div className='keyboard'>
      <div className='line'> {lettersL1.map((key) => {
        return <Key keyValue={key}/>
      })}
      </div>
      <div className='line'> {lettersL2.map((key) => {
        return <Key keyValue={key}/>
      })}
      </div>
      
      <div className='line'> 
      <Key keyValue="ENTER" wordKey/>
      {lettersL3.map((key) => {
        return <Key keyValue={key}/>
      })}
      <Key keyValue="DELETE" wordKey/>
      <Key keyValue="REFRESH" wordKey/>
      </div>
    </div>
    </div>
    
  )
}

export default Keyboard;