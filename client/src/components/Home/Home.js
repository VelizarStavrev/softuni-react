import './Home.css';

import campaign from './assets/images/campaign.jpg';
import discount from './assets/images/discount.jpg';
import vip from './assets/images/vip.jpg';

import view from './assets/icons/view-gray.svg';
import check from './assets/icons/check-gray.svg';
import delivery from './assets/icons/delivery-gray.svg';
import returnProduct from './assets/icons/return-gray.svg';

import NewOffers from '../NewOffers/NewOffers';

const Home = () => {
    return (
        <main>
            <div className='homeContainer'>
                <p className='homeSmallText'>Онлайн магазин за оригинални маратонки ShopSector.com! Купи сега <a href='url'>мъжки маратонки</a>, <a href='url'>дамски маратонки</a> и <a href='url'>детски маратонки</a> с големи намаления.</p>
                <a href='url'><img src={campaign} alt='campaign' /></a>
                <div className='deliveryContainer'>
                    <div className='deliveryItem'>
                        <img src={view} alt='delivery info icon' />
                        Тест и преглед преди плащане
                    </div>

                    <div className='deliveryItem'>
                        <img src={check} alt='delivery info icon' />
                        Всички стоки са налични
                    </div>

                    <div className='deliveryItem'>
                        <img src={delivery} alt='delivery info icon' />
                        Безплатна доставка над 100лв.
                    </div>

                    <div className='deliveryItem'>
                        <img src={returnProduct} alt='delivery info icon' />
                        30 дни безплатно връщане
                    </div>
                </div>
                <div className='promotionsContainer'>
                    <div className='discountContainer'>
                        <img src={discount} alt='delivery info icon' />
                        <form action='/action_page.php'>
                            <div className='deliverySubContainer'>
                                <input type='text' name='subscribe' placeholder='Остави имейл' />
                                <button type='submit'>ИЗПРАТИ</button>
                            </div>
                            <label htmlFor="subscribe">* На посочения имейл ще изпратим промо код </label>
                        </form>
                    </div>
                    <a href='url'><img src={vip} alt='campaign' /></a>
                </div>
                <NewOffers />
                <NewOffers />
                <NewOffers />
                <NewOffers />
            </div>
        </main>
    );
};

export default Home;