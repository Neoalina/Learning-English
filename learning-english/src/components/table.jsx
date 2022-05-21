import './assets/style/scss/main.scss';
import Row from './row';
import words from './words.json';



function Table(isChecked) {

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
                    {/* <Row english={<input type="text" />} transcription={<input type="text" />} russian={<input type="text" />} tags={<input type="text" />} /> */}

                    {words.map((word) =>

                        <Row english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} isEdit={false} />
                        // < Row english={<input type="text" value={word.english} />} transcription={<input type="text" value={word.transcription} />} russian={<input type="text" value={word.russian} />} tags={<input type="text" value={word.tags} />} />
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table;