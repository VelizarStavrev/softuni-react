import './ProductCard.css';

import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    return (
        <Link to={`/product/${props.productId}`} className='productCard'>
            <img src={process.env.PUBLIC_URL + `/products/${props.productId}/1.jpg`} alt='campaign' />
            <div className='productInfo'>
                <h3>{props.name}</h3>
                <p>{props.type}</p>
                <p className='productPrice'>
                    <span>{props.price} лв.</span>
                    <span>{(props.price - (props.price * (props.discount / 100))).toFixed(2)} лв.</span>
                </p>
                <p>Арт. №: {props.productId}</p>
                <p>Налични размери: {props.sizes.join(' / ')}</p>
            </div>
            <span className='productSale'>
                -{props.discount.toFixed(0)}%
            </span>
        </Link>
    );
};

export default ProductCard;