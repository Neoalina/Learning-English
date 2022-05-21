import words from './words.json';
import './assets/style/scss/main.scss'

function Card(props) {
    // let actionItem;
    // if (props.isPlay) {
    //     // actionItem = <div className="card-russianword">{words[0].russian}</div>;
    //     actionItem = <button className="card-button">check</button>;
    // } else {
    //     // actionItem = <button className="card-button">Проверить</button>;
    //     actionItem = <div className="card-russianword">{words[0].russian}</div>;
    // }
    return (
        <div className="card-body">
            <div className="card-englishword">{words[0].english}</div>
            <div className="card-transcription">{words[0].transcription}</div>
            {props.isPlay
                ? <div className="card-russianword">{words[0].russian}</div>
                : <button className="card-button">check</button>
            }

        </div>)
}
export default Card;