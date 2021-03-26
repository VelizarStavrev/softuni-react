import './Home.css';

import campaign from './assets/images/campaign.jpg';
import discount from './assets/images/discount.jpg';
import vip from './assets/images/vip.jpg';

import view from './assets/icons/view-gray.svg';
import check from './assets/icons/check-gray.svg';
import delivery from './assets/icons/delivery-gray.svg';
import returnProduct from './assets/icons/return-gray.svg';

import NewOffers from '../NewOffers/NewOffers';
import Brands from '../Brands/Brands';

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
                <NewOffers name='Нови предложения' />
                <NewOffers name='Най-продавани' />
                <NewOffers name='Препоръчани продукти' />
                <NewOffers name='Най-намалени' />
                <Brands />


                <div className='homeFinalDesc'>
                    <p className='homeSmallText'>ShopSector.com е онлайн магазин за оригинални маратонки и други спортни обувки на най-популярните световни марки - Puma. Adidas, Reebok, Asics, Nike и др.</p>
                    <p className='homeSmallText'>При нас ще откриете огромно разнообразие от мъжки, дамски и детски оригинални маратонки за спорт и ежедневни нужди. Обогатяваме асортимента си непрестанно, така че независимо дали търсите иновативни модели или по-традиционни, имаме от всичко - от леки и здрави модели за бягане, през удобни и практични маратонки за разходка, до най-екстравагантните спортни изкушения за вашите ходила.</p>
                    <p className='homeSmallText'>Всеки модел, който предлагаме е подбран според критериите ни за високо качество на материалите, красив външен вид и производствена технология за постигане на перфектен комфорт при носене. Покупката на маратонки онлайн е инвестиция не само в имидж, но и в здраве. В ShopSector вярваме, че поръчката на спортни обувки е много лесна когато са налице всички положителни параметри на “перфектните маратонки”, и че всеки чифт трябва да отговаря на изискванията на клиентите за здравина, визия и удобство.</p>
                    <p className='homeSmallText'>Мисията на екипа на ShopSector е да предлага атрактивни маратонки на конкурентни цени, като спазва принципите за безупречно обслужване и гарантира бърза доставка до всяка точка на България. Комбинацията от продукти с доказан произход, възможността за лесна поръчка и професионалното отношение на нашите експерти е отлична предпоставка за изпълнението на нашата цел номер 1 - доволни клиенти.</p>
                    <p className='homeSmallText'> Потопете се в изобилието от оригинални маратонки за всякаква спортна дейност - бягане, тенис, фитнес, футбол или просто за разходки сред природата в парка или планината. Ние от ShopSector.com гарантираме, че ще предлагаме най-страхотните модели ТОП марки на супер цени и да ви ги доставим по максимално най-бързия начин.</p>
                </div>
            </div>
        </main>
    );
};

export default Home;