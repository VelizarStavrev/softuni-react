import './Product.css';

import { Link } from 'react-router-dom';

import productOne from './assets/images/product-1.jpg';

import view from './assets/icons/view-gray.svg';
import check from './assets/icons/check-gray.svg';
import delivery from './assets/icons/delivery-gray.svg';
import phone from './assets/icons/phone-gray.svg';
import shoe from './assets/icons/shoe-gray.svg';
import returnProduct from './assets/icons/return-gray.svg';
import arrowReview from './assets/icons/star-yellow_filled.svg';

import facebook from './assets/icons/facebook-black.svg';
import pinterest from './assets/icons/pinterest-black.svg';
import google from './assets/icons/google-black.svg';

const Product = () => {
    return (
        <main>
            <div className='productPageContainer'>
                <div className='productPageDeliveryContainer'>
                    <div className='productPageItem'>
                        <img src={view} alt='products info icon' />
                        Тест и преглед преди плащане
                    </div>

                    <div className='productPageItem'>
                        <img src={check} alt='products info icon' />
                        Всички стоки са налични
                    </div>

                    <div className='productPageItem'>
                        <img src={delivery} alt='products info icon' />
                        Безплатна доставка над 100лв.
                    </div>

                    <div className='productPageItem'>
                        <img src={returnProduct} alt='products info icon' />
                        30 дни безплатно връщане
                    </div>
                </div>

                <div className='productPageContainerTop'>
                    <div className='productPageImageContainer'>
                        <img src={productOne} alt='product visual' />
                        <div className='productImageNavContainer'>
                            <img src={productOne} alt='product visual' />
                            <img src={productOne} alt='product visual' />
                            <img src={productOne} alt='product visual' />
                            <img src={productOne} alt='product visual' />
                            <img src={productOne} alt='product visual' />
                            <img src={productOne} alt='product visual' />
                        </div>
                    </div>

                    <div className='productPageInfoContainer'>
                        <h3>PRODUCT NAME</h3>
                        <p>PRODUCT TYPE</p>
                        <p>Арт. №: 000000</p>
                        <p>
                            <img className='starReview' src={arrowReview} alt='star review' />
                            <img className='starReview' src={arrowReview} alt='star review' />
                            <img className='starReview' src={arrowReview} alt='star review' />
                            <img className='starReview' src={arrowReview} alt='star review' />
                            <img className='starReview' src={arrowReview} alt='star review' />
                            5.00 от 5 / 20 гласа
                        </p>
                        <p className='productPrice'>
                            <span>00.00 лв.</span>
                            <span>00.00 лв.</span>
                        </p>
                        <p>Спестявате 00.00 лв.</p>
                        <p>Налични цветове:</p>

                        <select name="sortBy" id="sortBy">
                            <option value="0" selected>Избери размер</option>
                            <option value="32">32</option>
                            <option value="72">72</option>
                            <option value="144">144</option>
                        </select>

                        <button>ДОБАВИ В КОЛИЧКАТА</button>

                        <p>Поръчай сега и ще получиш в Чет. 01.04</p>

                        <div className='productPageDeliverySmallContainer'>
                            <div className='productPageItem'>
                                <img src={view} alt='products info icon' />
                                Тест и преглед преди плащане
                            </div>

                            <div className='productPageItem'>
                                <img src={check} alt='products info icon' />
                                Всички стоки са налични
                            </div>

                            <div className='productPageItem'>
                                <img src={delivery} alt='products info icon' />
                                Безплатна доставка над 100лв.
                            </div>

                            <div className='productPageItem'>
                                <img src={shoe} alt='products info icon' />
                                Само оригинални стоки
                            </div>

                            <div className='productPageItem'>
                                <img src={returnProduct} alt='products info icon' />
                                30 дни безплатно връщане
                            </div>

                            <div className='productPageItem'>
                                <img src={phone} alt='products info icon' />
                                0895 12 16 16 
                            </div>
                        </div>

                        <div className='productShareLinks'>
                            Сподели:
                            <Link to='/url'><img src={facebook} alt='products info icon' /></Link>
                            <Link to='/url'><img src={pinterest} alt='products info icon' /></Link>
                            <Link to='/url'><img src={google} alt='products info icon' /></Link>
                        </div>
                    </div>

                    <div className='productPageOrderContainer'>
                        QUICK ORDER FORM
                    </div>
                </div>

                <div className='productPageContainerBottom'>
                    Bottom container
                </div>
            </div>
        </main>
    );
};

export default Product;