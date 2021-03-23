import './Footer.css';

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
                            <a href='/male'>Мъжки</a>
                            <a href='/female'>Дамски</a>
                            <a href='/kid'>Детски</a>
                            <a href='/sale'>Разпродажба</a>
                        </div>
                    </div>

                    <div className='footerTopInfoColumn'>
                        <h3>Клиентски услуги</h3>
                        <div>
                            <a href='/about'>За нас</a>
                            <a href='/contacts'>Контакти</a>
                            <a href='/delivery'>Доставка и плащане</a>
                            <a href='/size-selection'>Как да изберете правилния размер</a>
                            <a href='/tips'>Съвети за поддръжка на Вашите маратонки</a>
                            <a href='/return'>Замяна или връщане</a>
                        </div>
                    </div>

                    <div className='footerTopInfoColumn'>
                        <h3> </h3>
                        <div>
                            <a href='/blog'>Блог</a>
                            <a href='/loyal-client'>Стани наш лоялен клиент</a>
                            <a href='/faq'>Често задавани въпроси</a>
                            <a href='/user-agreement'>Условия за ползване</a>
                            <a href='/cookies'>Политика за поверителност и бисквитки</a>
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
                            <a href='/facebook'><img className='icon-social' src={facebook} alt='social media icon' /></a>
                            <a href='/pinterest'><img className='icon-social' src={pinterest} alt='social media icon' /></a>
                            <a href='/twitter'><img className='icon-social' src={twitter} alt='social media icon' /></a>
                            <a href='/google'><img className='icon-social' src={google} alt='social media icon' /></a>
                            <a href='/instagram'><img className='icon-social' src={instagram} alt='social media icon' /></a>
                        </div>
                    </div>
                </div>

                <div className='footerBottomInfo'>
                    <div className='footerBottomLeft'>
                        Обявените цени са в Български лева (BGN). Всички права запазени 2020 © 
                    </div>

                    <div className='footerBottomRight'>
                        <a href='velizarstavrev.dev' target='_blank'>
                            Онлайн магазин от Velizar Stavrev.
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;