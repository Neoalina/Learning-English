import './assets/style/scss/main.scss';
import React, { useState } from 'react';

function Row(props) {
    const [opened, setOpened] = useState(false);
    const [fixed, setFixed] = useState(props);
    const [words, setWords] = useState([]);


    const handleChange = (event) => {
        setFixed({
            ...fixed,
            [event.target.dataset.name]: event.target.value,
        });
    };

    const handleEdit = () => {
        setOpened(!opened);
    };

    const handleCancel = () => {
        setOpened(!opened);
    };
    const handleSave = (word) => {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${word.id}/update`, {
            method: 'POST',
            body: JSON.stringify(word),
        })
            .then((response) => response.json())
            .then((response) => { setWords(response); })
            .catch((errors) => console.log('error', errors));
    };

    return (
        <>
            {!opened
                ? < tr >
                    < td >{props.english}</td >
                    <td>{props.transcription}</td>
                    <td>{props.russian}</td>
                    <td>{props.tags}</td>
                    <td className='table__title-item'>
                        <button onClick={handleEdit}>&#9998;</button>
                        <button onClick={props.isDelete}>&#10060;</button>
                    </td>
                </tr >
                : < tr >
                    < td > {<input data-name={'english'} type="text" value={fixed.english} onChange={handleChange} />}</td >
                    <td>{<input data-name={'transcription'} type="text" value={fixed.transcription} onChange={handleChange} />}</td>
                    <td>{<input data-name={'russian'} type="text" value={fixed.russian} onChange={handleChange} />}</td>
                    <td>{<input data-name={'tags'} type="text" value={fixed.tags} onChange={handleChange} />}</td>
                    <td className='table__title-item'>
                        <button onClick={handleSave}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </td>
                </tr >
            }
        </>
    )
}

export default Row;