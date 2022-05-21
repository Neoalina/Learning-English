import './assets/style/scss/main.scss';

function Header() {
    return (
        <header className='header'>
            <div className='header__title'>Study English</div>
            <nav className='header__menu'>
                <a href="#">Learn</a>
                <a href="#">Play</a>
            </nav>
        </header>
    )
}
export default Header;
