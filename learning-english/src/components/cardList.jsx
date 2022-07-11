import React, { useState } from "react";
import Card from "./card";
import words from './words.json';
import './assets/style/scss/main.scss';

export default function CardList() {
    let randomIndex = Math.round((Math.random() * words.length));

    const [cardIndex, setCardIndex] = useState(randomIndex);
    const [counter, setCounter] = useState(0);

    const handleNextCard = () => {
        setCardIndex(cardIndex + 1);
        console.log(cardIndex);
    };

    const handlePrevCard = () => {
        if (cardIndex < 0) {
            setCardIndex(words.length - 1);
        }
        setCardIndex(cardIndex - 1);
        console.log(cardIndex);
    };

    const handleSetCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <div className="cardlist">
            <div className="cardPosition">
                <Card
                    key={words[cardIndex].id}
                    english={words[cardIndex].english}
                    transcription={words[cardIndex].transcription}
                    russian={words[cardIndex].russian}
                    nextCard={handleNextCard}
                    isCounter={handleSetCounter}
                />
            </div>
            <div className="slider">
                <button className='round-button' onClick={handlePrevCard}>Prev</button>
                <div className="pagination"> {counter}/10</div>
                <button className='round-button' onClick={handleNextCard} >Next</button>
            </div>
        </div>
    )
}