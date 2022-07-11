import { useState } from 'react';

function RowInput(props, setAddWord) {

    const [fixed, setFixed] = useState('');

    const handleChange = (event) => {
        setFixed({
            ...fixed,
            [event.target.dataset.name]: event.target.value,
        });
    };
    const handleCancel = (props) => {
        setAddWord(false);
    }

    const handleSave = () => {
        // let newWord = {
        //     id: "11423",
        //     english: { fixed.english },
        //     transcription: { fixed.transcription },
        //     russian: { fixed.russian },
        //     tags: { fixed.tags },
        //     tags_json: "[]"
        // };
    }
    return (
        < tr >
            < td > {<input data-name={'english'} type="text" value={fixed.english} onChange={handleChange} />}</td >
            <td>{<input data-name={'transcription'} type="text" value={fixed.transcription} onChange={handleChange} />}</td>
            <td>{<input data-name={'russian'} type="text" value={fixed.russian} onChange={handleChange} />}</td>
            <td>{<input data-name={'tags'} type="text" value={fixed.tags} onChange={handleChange} />}</td>
            <td className='table__title-item'>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </td>
        </tr >
    )
}
export default RowInput;