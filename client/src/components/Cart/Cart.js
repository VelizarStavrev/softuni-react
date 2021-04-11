import './Cart.css';

import { Link } from 'react-router-dom';

import HeaderInfo from '../HeaderInfo/HeaderInfo';

const Cart = () => {

    const cartItems = JSON.parse(localStorage.getItem('cart-items'));

    function makeOrder() {
        const userid = localStorage.getItem('user-id');
        console.log(userid, cartItems);
        // TO DO
        // SEND TO BACKEND
    }

    return (
        <div className='cartContainer'>
            <HeaderInfo />

            <div className='cartInfoContainer'>
                <h2>КОЛИЧКА</h2>
                {cartItems ? cartItems.map(x => {
                    return <Link to={'/product/' + x.id} key={x.id}>
                        <img id='productPageImageContainerMainImg' src={process.env.PUBLIC_URL + `/products/${x.id}/1.jpg`} alt='product visual' />
                        №: {x.id} | Размер: {x.size} | Цена: {(x.price - (x.price * (x.discount / 100))).toFixed(2)}лв.
                    </Link>;
                }) : <p>Нямате добавени продукти в кошницата</p>}

                <div>
                    <span>TOTAL: {cartItems.reduce((a, b) => a += (b.price - b.price * (b.discount / 100)), 0 ).toFixed(2)}</span>
                    <button onClick={makeOrder}>ORDER</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;