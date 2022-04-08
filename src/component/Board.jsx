import React from 'react'
import Letter from './Letter';



function Board() {

  return (
    <div className='board'>
        <div className='row'> 
        <Letter letterRow={0} letterCol={0}/>
        <Letter letterRow={0} letterCol={1}/>
        <Letter letterRow={0} letterCol={2}/>
        <Letter letterRow={0} letterCol={3}/>
        <Letter letterRow={0} letterCol={4}/>
        </div>
        <div className='row'>
        <Letter letterRow={1} letterCol={0}/>
        <Letter letterRow={1} letterCol={1}/>
        <Letter letterRow={1} letterCol={2}/>
        <Letter letterRow={1} letterCol={3}/>
        <Letter letterRow={1} letterCol={4}/>
        </div>
        <div className='row'>
        <Letter letterRow={2} letterCol={0}/>
        <Letter letterRow={2} letterCol={1}/>
        <Letter letterRow={2} letterCol={2}/>
        <Letter letterRow={2} letterCol={3}/>
        <Letter letterRow={2} letterCol={4}/>
        </div>
        <div className='row'>
        <Letter letterRow={3} letterCol={0}/>
        <Letter letterRow={3} letterCol={1}/>
        <Letter letterRow={3} letterCol={2}/>
        <Letter letterRow={3} letterCol={3}/>
        <Letter letterRow={3} letterCol={4}/>
        </div>
        <div className='row'>
        <Letter letterRow={4} letterCol={0}/>
        <Letter letterRow={4} letterCol={1}/>
        <Letter letterRow={4} letterCol={2}/>
        <Letter letterRow={4} letterCol={3}/>
        <Letter letterRow={4} letterCol={4}/>
        </div>
        <div className='row'>
        <Letter letterRow={5} letterCol={0}/>
        <Letter letterRow={5} letterCol={1}/>
        <Letter letterRow={5} letterCol={2}/>
        <Letter letterRow={5} letterCol={3}/>
        <Letter letterRow={5} letterCol={4}/>
        </div>
        <div className='row'>
        <Letter letterRow={6} letterCol={0}/>
        <Letter letterRow={6} letterCol={1}/>
        <Letter letterRow={6} letterCol={2}/>
        <Letter letterRow={6} letterCol={3}/>
        <Letter letterRow={6} letterCol={4}/>
        </div>
    </div>
  )
}

export default Board;