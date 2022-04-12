import React from 'react';
import './Game.css';
import Board from "./Board";
import Keyboard from "./Keyboard";
import { createContext, useState } from "react";
import { initalBoard } from "./BoardMatrix";
import { useParams } from 'react-router';

export const AppContext = createContext();

function Game(props) {
    let params = useParams();
    let difficulty = params.difficulty;

    let boardRow = 
    (difficulty === 'easy') ? 7 : 
    (difficulty === 'medium') ? 6 : 5;

    let boardCol = 
    (difficulty === 'easy') ? 5 : 
    (difficulty === 'medium') ? 6 : 7;


    let defaultBoard = initalBoard;
    const [board, setBoard] = useState(defaultBoard);
    const [currCount, setCurrCount] = useState({
        row: 0,
        col: 0
    });


    const onEnter = () => {
        if (currCount.col !== boardCol) {
            alert("THE WORD LENGTH IS: " + boardCol);
            const newBoard = [...board];
            for (var i = 0; i < currCount.col; i++) {
                newBoard[currCount.row][i] = "";
            }
            setBoard(newBoard);
            setCurrCount({
                row: currCount.row,
                col: 0
            });
        } else {
            setCurrCount({
                row: currCount.row + 1,
                col: 0
            });
        }
    }

    const onDelete = () => {
        if (currCount.col === 0) return;
        const newBoard = [...board];
        newBoard[currCount.row][currCount.col - 1] = "";
        setBoard(newBoard);
        setCurrCount({
            row: currCount.row,
            col: currCount.col - 1
        });
    }

    const onSelect = (props) => {
        if (currCount.col > boardCol) return;
        const newBoard = [...board];
        newBoard[currCount.row][currCount.col] = props.keyValue;
        setBoard(newBoard);
        setCurrCount({
            row: currCount.row,
            col: currCount.col + 1
        });
    }

    const onRefresh = () => {
        const newBoard = defaultBoard;
        setBoard(newBoard);
        setCurrCount({
            row: 0,
            col: 0,
        });
    }

    
    return (
        <div className="Game">
            <header> Difficulty Level - {difficulty}</header>
            <AppContext.Provider value={{
                board,
                setBoard,
                currCount,
                setCurrCount,
                onDelete,
                onEnter,
                onSelect,
                onRefresh,
            }}>
                <div className='container'>
                    <Board className = {difficulty} row = {boardRow} col = {boardCol}/>
                    <Keyboard />
                </div>
            </AppContext.Provider>
        </div>
    );
}

export default Game;