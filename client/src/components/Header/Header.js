import './Header.css';
import logo from './assets/logo.svg';

const Header = () => {
    return (
        <header>
            <div className='topInfo'>
                <div className='topInfoLeft'>
                    <p>
                        Оригинални маратонки и кецове
                    </p>
                    <p>
                        !* Мнения от клиенти
                    </p>
                </div>

                <div className='topInfoRight'>
                    <p>
                        !* contact@shopsector.com
                    </p>
                    <p>
                        !* shopsector.com
                    </p>
                    <p>
                        !* 0895 12 16 16
                    </p>
                </div>
            </div>

            <div className='bottomInfo'>
                <div className='logoDiv'>
                    <img src={logo} alt='logo' />
                    <div className='logoText'>
                        <p>Само</p>
                        <p>Оригинални</p>
                        <p>Стоки</p>
                    </div>
                </div>

                <div>
                    Search
                </div>

                <div>
                    buttons
                </div>
            </div>
        </header>
    );
};

export default Header;