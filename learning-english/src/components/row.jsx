import './assets/style/scss/main.scss';
import React, { useState } from 'react';



function Row(props) {
    const [opened, setOpened] = useState(props.opened || false);

    const handleChange = () => {
        setOpened(!opened);
    };
    return (
        <>
            {opened
                ? < tr >
                    < td > {props.english}</td >
                    <td>{props.transcription}</td>
                    <td>{props.russian}</td>
                    <td>{props.tags}</td>
                    <td className='table__title-item'>
                        <button onClick={handleChange}>&#9998;</button>
                        <button>&#10060;</button></td>
                </tr >
                : < tr >
                    < td > {<input type="text" value={props.english} />}</td >
                    <td>{<input type="text" value={props.transcription} />}</td>
                    <td>{<input type="text" value={props.russian} />}</td>
                    <td>{<input type="text" value={props.tags} />}</td>
                    <td className='table__title-item'>
                        <button>&#9989;Save</button>
                        <button>&#65794;Cancel</button> </td>
                </tr >
            }
        </>

    )
}

export default Row;