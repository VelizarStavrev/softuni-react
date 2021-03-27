import './NewOffers.css';

import { Link } from 'react-router-dom';

import productOne from './assets/images/product-1.jpg';
import productTwo from './assets/images/product-2.jpg';
import productThree from './assets/images/product-3.jpg';
import productFour from './assets/images/product-4.jpg';

import arrowLeft from './assets/icons/arrow-black_left.svg';
import arrowRight from './assets/icons/arrow-black_right.svg';

const NewOffers = (props) => {
    return (
        <div className='newOffersContainer'>
            <h2>{props.name}</h2>
            <div className='productContainer'>
                <Link to='/url' className='productCard'>
                    <img src={productOne} alt='campaign' />
                    <div className='productInfo'>
                        <h3>Adidas Adilette Shower</h3>
                        <p>Дамски джапанки</p>
                        <p className='productPrice'>
                            <span>49.99 лв.</span>
                            <span>39.99 лв.</span>
                            </p>
                        <p>Арт. №: FZ2853</p>
                        <p>Налични размери: 37 / 38 / 39 / 40.5 / 42</p>
                    </div>
                    <span className='productSale'>
                        -21%
                    </span>
                </Link>
                <Link to='/url' className='productCard'>
                    <img src={productTwo} alt='campaign' />
                    <div className='productInfo'>
                        <h3>Adidas Adilette Shower</h3>
                        <p>Дамски джапанки</p>
                        <p className='productPrice'>
                            <span>49.99 лв.</span>
                            <span>39.99 лв.</span>
                            </p>
                        <p>Арт. №: FZ2853</p>
                        <p>Налични размери: 37 / 38 / 39 / 40.5 / 42</p>
                    </div>
                    <span className='productSale'>
                        -25%
                    </span>
                </Link>
                <Link to='/url' className='productCard'>
                    <img src={productThree} alt='campaign' />
                    <div className='productInfo'>
                        <h3>Adidas Adilette Shower</h3>
                        <p>Дамски джапанки</p>
                        <p className='productPrice'>
                            <span>49.99 лв.</span>
                            <span>39.99 лв.</span>
                            </p>
                        <p>Арт. №: FZ2853</p>
                        <p>Налични размери: 37 / 38 / 39 / 40.5 / 42</p>
                    </div>
                    <span className='productSale'>
                        -37%
                    </span>
                </Link>
                <Link to='/url' className='productCard'>
                    <img src={productFour} alt='campaign' />
                    <div className='productInfo'>
                        <h3>Adidas Adilette Shower</h3>
                        <p>Дамски джапанки</p>
                        <p className='productPrice'>
                            <span>49.99 лв.</span>
                            <span>39.99 лв.</span>
                            </p>
                        <p>Арт. №: FZ2853</p>
                        <p>Налични размери: 37 / 38 / 39 / 40.5 / 42</p>
                    </div>
                    <span className='productSale'>
                        -54%
                    </span>
                </Link>
                
                <div className='productArrowContainer productArrowLeft'>
                    <div className='productArrow'>
                        <img src={arrowLeft} alt='arrow left' />
                    </div>
                </div>
                <div className='productArrowContainer productArrowRight'>
                    <div className='productArrow'>
                        <img src={arrowRight} alt='arrow right' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewOffers;