import './assets/style/scss/main.scss';
import React, { useState } from 'react';



function Row(props) {
    const [opened, setOpened] = useState(false);

    const handleEdit = () => {
        setOpened(!opened);
    };
    const handleCancel = () => {
        setOpened(!opened);
    };
    return (
        <>
            {!opened
                ? < tr >
                    < td > {props.english}</td >
                    <td>{props.transcription}</td>
                    <td>{props.russian}</td>
                    <td>{props.tags}</td>
                    <td className='table__title-item'>
                        <button onClick={handleEdit}>&#9998;</button>
                        <button>&#10060;</button></td>
                </tr >
                : < tr >
                    < td > {<input type="text" value={props.english} />}</td >
                    <td>{<input type="text" value={props.transcription} />}</td>
                    <td>{<input type="text" value={props.russian} />}</td>
                    <td>{<input type="text" value={props.tags} />}</td>
                    <td className='table__title-item'>
                        <button>Save</button>
                        <button onClick={handleCancel}>Cancel</button> </td>
                </tr >
            }
        </>

    )
}

export default Row;