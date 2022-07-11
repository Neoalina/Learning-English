import './assets/style/scss/main.scss'
import React, { useState } from 'react';

function Card(props) {
    const [showTranslate, setShowTranslate] = useState(false);

    const handleShowTranslate = () => {
        setShowTranslate(!showTranslate);
        props.isCounter();
    };

    return (
        <div className="card-body">
            <div className="card-englishword">{props.english}</div>
            <div className="card-transcription">{props.transcription}</div>
            {showTranslate
                ? <div className="card-russianword">{props.russian}</div>
                : <button className="card-button" onClick={handleShowTranslate}>Проверить</button>
            }
        </div>)
}
export default Card;