import './Cart.css';

import { useContext } from 'react';

import { Link } from 'react-router-dom';

import cartContext from '../../contexts/cartContext';

import HeaderInfo from '../HeaderInfo/HeaderInfo';

const Cart = () => {

    let cartItems = JSON.parse(localStorage.getItem('cart-items'));
    const { cart, setCart } = useContext(cartContext);

    function cartRemoveItem(e) {
        let id = e.target.id;

        function numToPop () {
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i].id === id) {
                    return i;
                }
            }
        };

        let popNum = numToPop();

        cartItems.splice(popNum, 1);

        if (cartItems.length < 1) {
            localStorage.setItem('cart-items', null);
            setCart(cartItems);
            return;
        }

        localStorage.setItem('cart-items', JSON.stringify(cartItems));
        setCart(cartItems);
    }

    function makeOrder() {
        const userid = localStorage.getItem('user-id');
        const total = cartItems ? cartItems.reduce((a, b) => a += (b.price - b.price * (b.discount / 100)), 0 ).toFixed(2) : 0;
        
        let data = {userid, products: cartItems, total}
        console.log(data);

        // SEND TO BACKEND
        fetch(`http://localhost:4000/createOrder`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            localStorage.removeItem('cart-items');
            setCart(null);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div className='cartContainer'>
            <HeaderInfo />

            <div className='cartInfoContainer'>
                <h2>КОЛИЧКА</h2>
                {cart ? cart.map(x => {
                    return <div className='cartProductContainer' key={x.id}>
                        <Link to={'/product/' + x.id}>
                            <img id='productPageImageContainerMainImg' src={process.env.PUBLIC_URL + `/products/${x.id}/1.jpg`} alt='product visual' />
                            №: {x.id} | Размер: {x.size} | Цена: {(x.price - (x.price * (x.discount / 100))).toFixed(2)}лв.
                        </Link>
                        <div className='cartRemoveItem' id={x.id} onClick={cartRemoveItem}>x</div>
                    </div>;
                }) : <p>Нямате добавени продукти в кошницата.</p>}

                <div>
                    <span>TOTAL: {cart ? cart.reduce((a, b) => a += (b.price - b.price * (b.discount / 100)), 0 ).toFixed(2) : (0).toFixed(2)}лв.</span>
                    <button onClick={makeOrder}>ORDER</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;