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
    const [message, setMessage] = useState(null);

    const deepBoardCopy = (board) => {
        let newBoard = [];
        for (let row of board) {
            let newRow = [];
            for (let l of row) {
                newRow.push(l);
            }
            newBoard.push(newRow);
        }
        return newBoard;
    }

    useEffect(() => {
        const newAnswer = wordBank[boardCol][Math.floor(Math.random() * wordBank[boardCol].length)].toUpperCase();
        setAnswer(newAnswer);
        setCurrCount({
            row: 0,
            col: 0,
        });
        setBoard(initalBoard);
    }, [boardCol]);

    const handleMessage = (message) => {
        setMessage(message);
        setTimeout(() => {
            setMessage(null);
        }, 2000);
    }
    const onEnter = () => {
        if (currCount.col !== boardCol) {
            handleMessage("The word length is: " + boardCol);
            let newBoard = deepBoardCopy(board);

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

            for (let i = 0; i < boardCol; i++) {
                attempt += board[currCount.row][i];
            }

            if (attempt === answer) {
                handleMessage("Congratulations! You won! Try again?");

            } else if (currCount.row === boardRow - 1) {
                handleMessage("Sorry, you failed. Try again?");
            }
            setCurrCount({
                row: currCount.row + 1,
                col: 0
            });
        }
    }

    const onDelete = () => {
        if (currCount.col === 0) return;
        let newBoard = deepBoardCopy(board);
        newBoard[currCount.row][currCount.col - 1] = "";
        setBoard(newBoard);
        setCurrCount({
            row: currCount.row,
            col: currCount.col - 1
        });
    }

    const onSelect = (props) => {
        if (currCount.col > boardCol) return;
        let newBoard = deepBoardCopy(board);
        newBoard[currCount.row][currCount.col] = props.keyValue;
        setBoard(newBoard);
        setCurrCount({
            row: currCount.row,
            col: currCount.col + 1
        });
    }

    const onRefresh = () => {
        let newBoard = deepBoardCopy(initalBoard);
        setBoard(newBoard);
        setCurrCount({
            row: 0,
            col: 0,
        });
        const newAnswer = wordBank[boardCol][Math.floor(Math.random() * wordBank[boardCol].length)].toUpperCase();
        setAnswer(newAnswer);
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
                onRefresh,
                answer,
                onSelect
            }}>
                <div className='container'>
                    <Board
                        className={difficulty}
                        row={boardRow}
                        col={boardCol}
                        message={message} />
                    <Keyboard />
                </div>
            </AppContext.Provider>
        </div>
    );
}

export default Game;