import './Header.css';

import { useContext } from 'react';
import isLogged from '../../contexts/isLoggedContext';

import { Link, NavLink } from 'react-router-dom';

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

    const { logged } = useContext(isLogged);

    return (
        <header>
            <div className='topInfo'>
                <div className='topInfoContainer'>
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
                    <Link to={logged ? '/profile' : '/login'} className='iconHolder'>
                        <img className='icon-bottom' src={profile} alt='top info icon' />
                        {logged ? 'ПРОФИЛ' : 'ВХОД'}
                    </Link>
                    <Link to='/favorites' className='iconHolder'>
                        <img className='icon-bottom' src={favorites} alt='top info icon' />
                        ЛЮБИМИ
                    </Link>
                    <Link to='/cart' className='iconHolder'>
                        <img className='icon-bottom' src={cart} alt='top info icon' />
                        КОЛИЧКА
                    </Link>
                    <Link to='/cart' className='iconHolder'>
                        0 бр. / 0.00 лв
                    </Link>
                </div>
            </div>

            <nav>
                <NavLink to='/' className='navLink'>НАЧАЛО</NavLink>
                <NavLink to='/products/male' className='navLink' activeClassName='navLinkActive'>МЪЖКИ</NavLink>
                <NavLink to='/products/female' className='navLink' activeClassName='navLinkActive'>ДАМСКИ</NavLink>
                <NavLink to='/products/kid' className='navLink' activeClassName='navLinkActive'>ДЕТСКИ</NavLink>
                <NavLink to='/products/sale' className='navLink navLinkSale'>РАЗПРОДАЖБА</NavLink>
            </nav>
        </header>
    );
};

export default Header;