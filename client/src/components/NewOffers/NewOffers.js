import './NewOffers.css';

import ProductCard from '../ProductCard/ProductCard';

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