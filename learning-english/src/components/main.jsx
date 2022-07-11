import './assets/style/scss/main.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Table from './table';
import CardList from './cardList';


function Main() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Table />}>
                    <Route path='/table' />
                </Route>
                <Route path='/cardList' element={<CardList />} />
            </Routes>
        </div>
    )
}
export default Main;