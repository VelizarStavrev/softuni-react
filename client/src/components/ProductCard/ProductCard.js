import './ProductCard.css';

import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    return (
        <Link to={`/product/${props.productId}`} className='productCard'>
            <img src={props.image} alt='campaign' />
            <div className='productInfo'>
                <h3>{props.name}</h3>
                <p>{props.type}</p>
                <p className='productPrice'>
                    <span>{props.price} лв.</span>
                    <span>{(props.price - (props.price * (props.priceDiscount / 100))).toFixed(2)} лв.</span>
                </p>
                <p>Арт. №: {props.productNumber}</p>
                <p>Налични размери: {props.productSizes}</p>
            </div>
            <span className='productSale'>
                -{props.priceDiscount}%
            </span>
        </Link>
    );
};

export default ProductCard;