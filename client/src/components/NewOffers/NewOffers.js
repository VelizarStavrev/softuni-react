import { useState, useEffect } from 'react';

import './NewOffers.css';

import ProductCard from '../ProductCard/ProductCard';

import arrowLeft from './assets/icons/arrow-black_left.svg';
import arrowRight from './assets/icons/arrow-black_right.svg';

const NewOffers = (props) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        fetch(`http://localhost:4000/getOneType/${props.type}`, { signal: signal })
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
    }, [props.type])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className='newOffersContainer'>
                <h2>{props.name}</h2>
                <div className='productContainer'>
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
    }
};

export default NewOffers;