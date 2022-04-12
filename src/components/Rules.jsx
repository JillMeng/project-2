import React from 'react';
import './Rules.css';
import correct from '../examples/correct_position.png';
import wrong from '../examples/wrong_position.png';
import nonexist from '../examples/not_in_word.png';

export default function Rules() {
    return (
        <div className="rules-card">
                <header>
                    Rules
                </header>
            <div className="rules">
                <div>
                    <p>
                    Guess the WORDLE in six tries.
                    </p>
                    <p>
                    Each guess must be a valid five-letter word. Hit the enter button to submit.
                    </p>
                    <p className='line-after'>
                    After each guess, the color of the tiles will change to show how close your guess was to the word.
                    </p>
                </div>
                <div className='example'>
                    <h2>Examples</h2>
                    <img src={correct} className="eg" alt='correct position' />
                    <p> The letter S is in the word and in the correct spot. </p>
                    <img src={wrong} className="eg" alt='exists in word but wrong position' />
                    <p>The letter U is in the word but in the wrong spot.</p>
                    <img src={nonexist} className="eg" alt="doesn't exist in word"/>
                    <p>The letter O is not in the word in any spot.</p>
                </div>
            </div>
        </div>
    )
}