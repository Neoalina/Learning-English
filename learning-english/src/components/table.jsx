import React, { useState, useEffect, useContext } from 'react';
import './assets/style/scss/main.scss';
// import words from './words.json';
import Row from './row';
import RowInput from './rowInput';
import { WordsContext } from '../context/wordsContext';


function Table() {
    let randomIndex = Math.round((Math.random() * words.length));

    const { words, loading, error, editWords, deleteWords } = useContext(WordsContext);
    const [wordsCollection, setWordsCollection] = useState(words);
    const [addWord, setAddWord] = useState(false);
    const [cardIndex, setCardIndex] = useState(randomIndex);
    const [newWord, setNewWord] = useState({});
    // const [words, setWords] = useState([]);

    // useEffect(() => {
    //     fetch('http://itgirlschool.justmakeit.ru/api/words')
    //         .then((response) => response.json())
    //         .then((response) => setWords({ words: response }))
    //         .catch((errors) => console.log('error', errors));
    // }, []);

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
                    {/* <WordsContext.Consumer>
                        {words => words.map((word) =>
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
                    </WordsContext.Consumer> */}
                    {words.map((word) =>
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