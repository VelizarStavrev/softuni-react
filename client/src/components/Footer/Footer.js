import './Footer.css';

import { Link } from 'react-router-dom';

import facebook from './assets/icons/socials/facebook-black.svg';
import pinterest from './assets/icons/socials/pinterest-black.svg';
import twitter from './assets/icons/socials/twitter-black.svg';
import google from './assets/icons/socials/google-black.svg';
import instagram from './assets/icons/socials/instagram-black.svg';

const Footer = () => {
    return (
        <footer>
            <div className='footerContainer'>
                <div className='footerTopInfo'>
                    
                    <div className='footerTopInfoColumn'>
                        <h3>Категории</h3>
                        <div>
                            <Link to='/url'>Мъжки</Link>
                            <Link to='/url'>Дамски</Link>
                            <Link to='/url'>Детски</Link>
                            <Link to='/url'>Разпродажба</Link>
                        </div>
                    </div>

                    <div className='footerTopInfoColumn'>
                        <h3>Клиентски услуги</h3>
                        <div>
                            <Link to='/url'>За нас</Link>
                            <Link to='/url'>Контакти</Link>
                            <Link to='/url'>Доставка и плащане</Link>
                            <Link to='/url'>Как да изберете правилния размер</Link>
                            <Link to='/url'>Съвети за поддръжка на Вашите маратонки</Link>
                            <Link to='/url'>Замяна или връщане</Link>
                        </div>
                    </div>

                    <div className='footerTopInfoColumn'>
                        <h3> </h3>
                        <div>
                            <Link to='/url'>Блог</Link>
                            <Link to='/url'>Стани наш лоялен клиент</Link>
                            <Link to='/url'>Често задавани въпроси</Link>
                            <Link to='/url'>Условия за ползване</Link>
                            <Link to='/url'>Политика за поверителност и бисквитки</Link>
                        </div>
                    </div>

                    <div className='footerTopInfoColumn'>
                        <h3>Ел. Бюлетин</h3>
                        <div>
                            Грабни 5% отстъпка за първата си поръчка и научавай първи за нови продукти и промоции.
                            Запиши се от тук сега!

                            <form action='/action_page.php'>
                                <input type='text' id='search' name='search' placeholder='Имейл' />
                                <button type='submit'>ИЗПРАТИ</button>
                            </form>
                        </div>
                        <h3>Последвайте ни</h3>
                        <div className='socialMediaContainer'>
                            <Link to={{ pathname: 'https://www.facebook.com/ShopSector/' }} target='_blank'><img className='icon-social' src={facebook} alt='social media icon' /></Link>
                            <Link to={{ pathname: 'https://www.pinterest.com/shopsector/' }} target='_blank'><img className='icon-social' src={pinterest} alt='social media icon' /></Link>
                            <Link to={{ pathname: 'https://twitter.com/ShopSector' }} target='_blank'><img className='icon-social' src={twitter} alt='social media icon' /></Link>
                            <Link to={{ pathname: 'https://www.instagram.com/shopsector.com_official/' }} target='_blank'><img className='icon-social' src={google} alt='social media icon' /></Link>
                            <Link to={{ pathname: 'https://plus.google.com/+Shopsector' }} target='_blank'><img className='icon-social' src={instagram} alt='social media icon' /></Link>
                        </div>
                    </div>
                </div>

                <div className='footerBottomInfo'>
                    <div className='footerBottomLeft'>
                        Обявените цени са в Български лева (BGN). Всички права запазени 2021 © 
                    </div>

                    <div className='footerBottomRight'>
                        <Link to={{ pathname: 'https://www.velizarstavrev.dev' }} target='_blank' rel='noopener noreferrer'>
                            Онлайн магазин от Velizar Stavrev.
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;