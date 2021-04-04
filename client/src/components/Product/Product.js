import { useState, useEffect } from 'react';

import './Product.css';

import { Link } from 'react-router-dom';

import view from './assets/icons/view-gray.svg';
import check from './assets/icons/check-gray.svg';
import delivery from './assets/icons/delivery-gray.svg';
import phone from './assets/icons/phone-gray.svg';
import shoe from './assets/icons/shoe-gray.svg';
import returnProduct from './assets/icons/return-gray.svg';
import starReview from './assets/icons/star-yellow_filled.svg';

import facebook from './assets/icons/facebook-black.svg';
import pinterest from './assets/icons/pinterest-black.svg';
import google from './assets/icons/google-black.svg';

const Product = ({
    match
}) => {

    function changePictureToClicked(e) {
        setImgSrc(e.target.src);
    }

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [imgSrc, setImgSrc] = useState('');

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        fetch(`http://localhost:4000/getOne/${match.params.id}`, { signal: signal })
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setItems(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

        return function cleanup() {
            if (abortController) abortController.abort();
        }
    }, [match.params.id])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
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
                            <img id='productPageImageContainerMainImg' src={imgSrc ? imgSrc : process.env.PUBLIC_URL + `/products/${items._id}/1.jpg`} alt='product visual' />
                            <div className='productImageNavContainer'>
                                <img src={process.env.PUBLIC_URL + `/products/${items._id}/1.jpg`} alt='product visual' onClick={changePictureToClicked} />
                                <img src={process.env.PUBLIC_URL + `/products/${items._id}/2.jpg`} alt='product visual' onClick={changePictureToClicked} />
                                <img src={process.env.PUBLIC_URL + `/products/${items._id}/3.jpg`} alt='product visual' onClick={changePictureToClicked} />
                                <img src={process.env.PUBLIC_URL + `/products/${items._id}/4.jpg`} alt='product visual' onClick={changePictureToClicked} />
                                <img src={process.env.PUBLIC_URL + `/products/${items._id}/5.jpg`} alt='product visual' onClick={changePictureToClicked} />
                                <img src={process.env.PUBLIC_URL + `/products/${items._id}/6.jpg`} alt='product visual' onClick={changePictureToClicked} />
                            </div>
                        </div>
    
                        <div className='productPageInfoContainer'>
                            <h3>{items.name}</h3>
                            <p>{items.type}</p>
                            <p>Арт. №: {items._id}</p>
                            <p>
                                {items.rating ? [...Array(Math.round(items.rating))].map((x, index) => (<img key={index} className='starReview' src={starReview} alt='star review' />)) : ''}
                                {items.rating} от 5 / {items.votes} гласа
                            </p>
                            <p className='productPrice'>
                                <span>{items.price ? items.price.toFixed(2) : ''} лв.</span>
                                <span>{items.price ? (items.price - (items.price * (items.discount / 100))).toFixed(2) : ''} лв.</span>
                            </p>
                            <p>Спестявате {items.price ? (items.price.toFixed(2) - (items.price - (items.price * (items.discount / 100)))).toFixed(2) : ''} лв.</p>
                            <p>Налични цветове: {items.color}</p>
    
                            <select name="sortBy" id="sortBy" defaultValue="0">
                                <option value="0">Избери размер</option>
                                {items.sizes ? items.sizes.map(x => {
                                    return <option key={x} value={x}>{x}</option>;
                                }) : ''}
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
                                <Link to={{ pathname: 'https://www.facebook.com/ShopSector/' }} target='_blank'><img src={facebook} alt='products info icon' /></Link>
                                <Link to={{ pathname: 'https://www.pinterest.com/shopsector/' }} target='_blank'><img src={pinterest} alt='products info icon' /></Link>
                                <Link to={{ pathname: 'https://plus.google.com/+Shopsector' }} target='_blank'><img src={google} alt='products info icon' /></Link>
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
    }
};

export default Product;