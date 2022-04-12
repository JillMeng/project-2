import React, { useContext } from 'react';
import { AppContext } from './Game';

function Key(props) {
    const {
        onDelete,
        onEnter,
        onSelect,
        onRefresh,
    } = useContext(AppContext);

    const selectLetter = () => {
        if(props.keyValue === "ENTER") {
            onEnter();
        }else if(props.keyValue === "DELETE") {
            onDelete();
        }else if(props.keyValue === "RESTART") {
            onRefresh();
        } else {
            onSelect(props);
        }
    }
  return (
    <div className='key' 
    id = {(props.wordKey) ? "small" : (props.startKey) ? "startKey" : ""} 
    onClick={selectLetter}>{props.keyValue}</div>
  )
}

export default Key
