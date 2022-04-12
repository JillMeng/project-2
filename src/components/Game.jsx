import React from 'react';
import './Game.css';
import Board from "./Board";
import Keyboard from "./Keyboard";
import { createContext, useState, useEffect } from "react";
import { initalBoard } from "./BoardMatrix";
import { useParams } from 'react-router';
import { wordBank } from '../WordBank';

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

    const [board, setBoard] = useState(initalBoard);
    const [currCount, setCurrCount] = useState({
        row: 0,
        col: 0
    });
    const [answer, setAnswer] = useState("");
    console.log(answer);

    useEffect(() => {
        const newAnswer = wordBank[boardCol][Math.floor(Math.random() * wordBank[boardCol].length)].toUpperCase();
        setAnswer(newAnswer);
    }, []);

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
            let attempt = '';
            for (let i=0; i < 5; i++) {
                attempt += board[currCount.row][i];
            }

            if (attempt === answer) {
                alert("Congratulations! You won the game. Do you want to try again?")
            } else if (currCount.row === 6){
                alert("You failed to guess the word. Try again?")
            }

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
                answer
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