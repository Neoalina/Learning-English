import React, {useState, useEffect} from 'react';

const WordsContext = React.createContext();

function WordsContextProvider(props) {
    const [words, setWords] = useState([]);
    const [loading, setLoading]= useState(true);
    const [error, setError] = useState(true);

    useEffect( () => {
        getWords();
    }, []);

    const getWords = () => {
        setLoading(true);
        fetch('http://itgirlschool.justmakeit.ru/api/words')
                .then((response) => response.json())
                .then((response) => {
                    setWords(response);
                })
                .catch((errors) => setError(errors))
                .finally(() => {
                    setLoading(false);
                });
    };

    const editWords = (word) => {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${word.id}/update`, {
            method: 'POST',
            body: JSON.stringify(word),
        })
            .then((response) => response.json())
            .then(() => { 
                getWords(); 
            })
            .catch((errors) => setError(errors));
    };
    
    const deleteWords = (word) => {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${word.id}/delete`, {
            method: 'POST',
            
        })
            .then((response) => response.json())
            .then(() => { 
                getWords(); 
            })
            .catch((errors) => setError(errors));
    };

    return (
        <WordsContext.Provider value={{words, loading, error, editWords, deleteWords}}>
            {props.children}
        </WordsContext.Provider>
    );
}

export {WordsContextProvider, WordsContext};