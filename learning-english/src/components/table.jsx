import React, { useState } from 'react';
import './assets/style/scss/main.scss';
import words from './words.json';
import Row from './row';
import RowInput from './rowInput';
import WordStore from '../stores/words';

function Table() {
    let randomIndex = Math.round((Math.random() * words.length));

    const [wordsCollection, setWordsCollection] = useState(words);
    const [addWord, setAddWord] = useState(false);
    const [cardIndex, setCardIndex] = useState(randomIndex);
    const [newWord, setNewWord] = useState({});

    const handleAddWord = () => {
        setAddWord(true);
    }

    const handleDelete = () => {
        const array = [...wordsCollection];
        array.splice(cardIndex, 1);
        setWordsCollection(array);
    }

    return (
        <div className='table'>
            <table className='table__title'>
                <thead>
                    <tr className='table__title-item'>
                        <th className='table__title-item'>English word</th>
                        <th className='table__title-item'>Transcription</th>
                        <th className='table__title-item'>Russian word</th>
                        <th className='table__title-item'>Theme</th>
                        <th className='table__title-item'>Button</th>
                    </tr>
                </thead>
                <tbody>
                    {wordStore.words.map((word, index) =>
                        <Row
                            key={word.id}
                            english={word.english}
                            transcription={word.transcription}
                            russian={word.russian}
                            tags={word.tags}
                            isEdit={false}
                            opened={false}
                            isDelete={handleDelete}
                        />
                    )}
                </tbody>
            </table>
            <div>
                <button onClick={handleAddWord}>Add Word</button>
                {addWord ? <RowInput setAddWord={setAddWord} /> : null}
            </div>

        </div>
    )
}

export default Table;