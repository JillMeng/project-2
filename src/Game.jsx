import './Game.css';
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import {createContext, useEffect, useState} from "react";
import { initalBoard } from "./components/BoardMatrix";
import { wordBank } from './WordBank';

export const AppContext = createContext();

function Game() {
    const [board, setBoard] = useState(initalBoard);
    const [currCount, setCurrCount] = useState({
        row: 0,
        col: 0});
    const [answer, setAnswer] = useState("");

    useEffect(() => {
        const newAnswer = wordBank.fiveLetterWord[Math.floor(Math.random() * wordBank.fiveLetterWord.length)];
        setAnswer(newAnswer);
    }, []);


    const onEnter = () => {
        if(currCount.col !== 5) {
            alert("Invalid word length. Please try again.");
            const newBoard = [...board];
            for(var i=0; i<currCount.col; i++) {
            newBoard[currCount.row][i] = "";
            }
            setBoard(newBoard);
            setCurrCount({
                row: currCount.row,
                col: 0});
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
                col: 0});
        }  
    }

    const onDelete = () => {
        if(currCount.col === 0) return;
            const newBoard = [...board];
            newBoard[currCount.row][currCount.col - 1] = "";
            setBoard(newBoard);
            setCurrCount({
                row: currCount.row,
                col: currCount.col - 1});
    }

    const onSelect = (props) => {
        if (currCount.col > 5) return;
        const newBoard = [...board];
        newBoard[currCount.row][currCount.col] = props.keyValue;
        setBoard(newBoard);
        setCurrCount({
            row: currCount.row, 
            col: currCount.col + 1});
    }

    return (
        <div className="Game">
            <header>Wordle - Easy Version</header>
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
            <Board />
            <Keyboard />
            </div>
            </AppContext.Provider>

        </div>
    );
}

export default Game;