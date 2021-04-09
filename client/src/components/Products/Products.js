import { useState, useEffect } from 'react';

import './Products.css';

import ProductCard from '../ProductCard/ProductCard';

import HeaderInfo from '../HeaderInfo/HeaderInfo';

import arrowLeft from './assets/icons/arrow-black_left.svg';
import arrowRight from './assets/icons/arrow-black_right.svg';

const Products = ({
    match,
}) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        fetch(`http://localhost:4000/getOneType/${match.params.type}/0`, { signal: signal })
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
    }, [match.params.type])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <main>
                <div className='productsContainer'>
                    <HeaderInfo />
    
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
                            <div className='productsHeader'>
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
    
                            <div className='productsHeader'>
                                <div>
                                    На страница по:
                                    <select name="sortBy" id="sortBy" defaultValue="72">
                                        <option value="36">36</option>
                                        <option value="72">72</option>
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
                                {items.map(product => (
                                    <ProductCard
                                        key={product._id}
                                        productId={product._id}
                                        name={product.name}
                                        type={product.type}
                                        sizes={product.sizes}
                                        rating={product.rating}
                                        votes={product.votes}
                                        price={product.price}
                                        discount={product.discount}
                                        description={product.description}
                                        color={product.color}
                                        material={product.material}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
};

export default Products;