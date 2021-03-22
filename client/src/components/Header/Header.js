import './Header.css';
import logo from './assets/logo.svg';

import opinions from './assets/icons/top-info/star-gray_empty.svg';
import email from './assets/icons/top-info/email-gray.svg';
import skype from './assets/icons/top-info/skype-gray.svg';
import phone from './assets/icons/top-info/phone-gray.svg';

import search from './assets/icons/user/search-black.svg';
import profile from './assets/icons/user/user-black.svg';
import favorites from './assets/icons/user/star-black_empty.svg';
import cart from './assets/icons/user/cart-black.svg';


const Header = () => {
    return (
        <header>
            <div className='topInfo'>
                <div className='topInfoLeft'>
                    <p>
                        Оригинални маратонки и кецове
                    </p>
                    <a className='iconHolder' href='/opinions'>
                        <img className='icon-top' src={opinions} alt='top info icon' />
                        Мнения от клиенти
                    </a>
                </div>

                <div className='topInfoRight'>
                    <div className='iconHolder'>
                        <img className='icon-top' src={email} alt='top info icon' />
                        contact@shopsector.com
                    </div>
                    <div className='iconHolder'>
                        <img className='icon-top' src={skype} alt='top info icon' />
                        shopsector.com
                    </div>
                    <div className='iconHolder'>
                        <img className='icon-top' src={phone} alt='top info icon' />
                        0895 12 16 16
                    </div>
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

                <form action='/action_page.php'>
                    <input type='text' id='search' name='search' placeholder='Търсене...' />
                    <img className='icon-bottom' src={search} alt='top info icon' />
                </form> 

                <div className='userIcons'>
                    <a className='iconHolder' href='/profile'>
                        <img className='icon-bottom' src={profile} alt='top info icon' />
                        ВХОД
                    </a>
                    <a className='iconHolder' href='/favorites'>
                        <img className='icon-bottom' src={favorites} alt='top info icon' />
                        ЛЮБИМИ
                    </a>
                    <a className='iconHolder' href='/cart'>
                        <img className='icon-bottom' src={cart} alt='top info icon' />
                        КОЛИЧКА
                    </a>
                    <a className='iconHolder' href='/cart'>
                        0 бр. / 0.00 лв
                    </a>
                </div>
            </div>

            <nav>
                <a className='navLink' href='/home'>НАЧАЛО</a>
                <a className='navLink' href='/male'>МЪЖКИ</a>
                <a className='navLink' href='/female'>ДАМСКИ</a>
                <a className='navLink' href='/kid'>ДЕТСКИ</a>
                <a className='navLink navLinkSale' href='/sale'>РАЗПРОДАЖБА</a>
            </nav>
        </header>
    );
};

export default Header;