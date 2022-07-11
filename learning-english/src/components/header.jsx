import './assets/style/scss/main.scss';
import { Link } from 'react-router-dom';
// import brainstorm from './assets/style/images/brainstorm.png'

function Header() {
    return (
        <header className='header'>
            <div className='header__title'>
                <Link className='header__title' to="/table">Study English</Link>
            </div>
            <nav className='header__menu'>
                <Link className='link' to="/table">Learn</Link>
                <Link className='link' to="/cardList">Play</Link>
            </nav>
        </header>
    )
}
export default Header;