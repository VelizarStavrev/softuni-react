import './Products.css';

import ProductCard from '../ProductCard/ProductCard';

import productOne from './assets/images/product-1.jpg';
import productTwo from './assets/images/product-2.jpg';
import productThree from './assets/images/product-3.jpg';
import productFour from './assets/images/product-4.jpg';

import view from './assets/icons/view-gray.svg';
import check from './assets/icons/check-gray.svg';
import delivery from './assets/icons/delivery-gray.svg';
import returnProduct from './assets/icons/return-gray.svg';

import arrowLeft from './assets/icons/arrow-black_left.svg';
import arrowRight from './assets/icons/arrow-black_right.svg';

const Products = () => {
    return (
        <main>
            <div className='productsContainer'>
                <div className='productsDeliveryContainer'>
                    <div className='productsItem'>
                        <img src={view} alt='products info icon' />
                        Тест и преглед преди плащане
                    </div>

                    <div className='productsItem'>
                        <img src={check} alt='products info icon' />
                        Всички стоки са налични
                    </div>

                    <div className='productsItem'>
                        <img src={delivery} alt='products info icon' />
                        Безплатна доставка над 100лв.
                    </div>

                    <div className='productsItem'>
                        <img src={returnProduct} alt='products info icon' />
                        30 дни безплатно връщане
                    </div>
                </div>

                <div className='productsContainerSides'>
                    <div className='productsLeft'>
                        <h2>ФИЛТРИ</h2>

                        <h3>Размер:</h3>
                        <div className='productFiltersContainer'>
                            <button className='productFilter productFilterSize' type='button'>20</button>
                            <button className='productFilter productFilterSize'>25</button>
                            <button className='productFilter productFilterSize'>35</button>
                            <button className='productFilter productFilterSize'>45</button>
                            <button className='productFilter productFilterSize'>55</button>
                            <button className='productFilter productFilterSize'>100</button>
                            <button className='productFilter productFilterSize'>100</button>
                        </div>

                        <h3>Марка:</h3>
                        <div className='productFiltersContainer'>
                            <button className='productFilter productFilterBrand'>Puma</button>
                            <button className='productFilter productFilterBrand'>Adidas</button>
                            <button className='productFilter productFilterBrand'>Puma</button>
                            <button className='productFilter productFilterBrand'>Puma</button>
                            <button className='productFilter productFilterBrand'>Le Coq Sportif</button>
                            <button className='productFilter productFilterBrand'>Test</button>
                            <button className='productFilter productFilterBrand'>Test</button>
                            <button className='productFilter productFilterBrand'>Test</button>
                            <button className='productFilter productFilterBrand'>Test</button>
                        </div>

                        <h3>Цвят:</h3>
                        <div className='productFiltersContainer'>
                            <button className='productFilter productFilterBrand'>Черен</button>
                            <button className='productFilter productFilterBrand'>Бял</button>
                            <button className='productFilter productFilterBrand'>Многоцветен</button>
                            <button className='productFilter productFilterBrand'>Камуфлаж</button>
                            <button className='productFilter productFilterBrand'>Син</button>
                            <button className='productFilter productFilterBrand'>Сив</button>
                        </div>

                    </div>

                    <div className='productsRight'>
                        <div class='productsHeader'>
                            <h2>НАЧАЛО / МЪЖКИ МАРАТОНКИ, КЕЦОВЕ И ДРУГИ</h2>
                            <div>
                                Подреди по:
                                <select name="sortBy" id="sortBy">
                                    <option value="newest">Най-нови</option>
                                    <option value="priceHighest">Цена най-висока</option>
                                    <option value="priceLowest">Цена най-ниска</option>
                                    <option value="biggestDiscount">Най-намалени</option>
                                    <option value="default">По подразбиране</option>
                                </select>
                            </div>
                        </div>

                        <div class='productsHeader'>
                            <div>
                                На страница по:
                                <select name="sortBy" id="sortBy">
                                    <option value="36">36</option>
                                    <option value="72" selected>72</option>
                                    <option value="144">144</option>
                                </select>
                            </div>

                            <div className='productsNavigation'>
                                <img src={arrowLeft} alt='arrow left' />
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button>4</button>
                                <button>5</button>
                                <button>6</button>
                                <img src={arrowRight} alt='arrow right' />
                            </div>
                        </div>

                        <div className='productCardsContainer'>
                            <ProductCard
                                productId={'1'}
                                image={productOne}
                                name='Adidas Adilette Shower'
                                type='Дамски джапанки'
                                price='49.99'
                                priceDiscount='20'
                                productNumber='FZ2853'
                                productSizes='37 / 38 / 39 / 40.5 / 42 / 59 / 123'
                            />
                            <ProductCard
                                productId={'2'}
                                image={productTwo}
                                name='Adidas Adilette Shower'
                                type='Дамски джапанки'
                                price='49.99'
                                priceDiscount='20'
                                productNumber='FZ2853'
                                productSizes='37 / 38 / 39 / 40.5 / 42 / 59 / 123'
                            />
                            <ProductCard
                                productId={'3'}
                                image={productThree}
                                name='Adidas Adilette Shower'
                                type='Дамски джапанки'
                                price='49.99'
                                priceDiscount='20'
                                productNumber='FZ2853'
                                productSizes='37 / 38 / 39 / 40.5 / 42 / 59 / 123'
                            />
                            <ProductCard
                                productId={'4'}
                                image={productFour}
                                name='Adidas Adilette Shower'
                                type='Дамски джапанки'
                                price='49.99'
                                priceDiscount='20'
                                productNumber='FZ2853'
                                productSizes='37 / 38 / 39 / 40.5 / 42 / 59 / 123'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Products;