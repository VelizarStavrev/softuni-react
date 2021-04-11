import './Cart.css';

import { Link } from 'react-router-dom';

import HeaderInfo from '../HeaderInfo/HeaderInfo';

const Cart = () => {

    const cartItems = JSON.parse(localStorage.getItem('cart-items'));

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
                {cartItems ? cartItems.map(x => {
                    return <Link to={'/product/' + x.id} key={x.id}>
                        <img id='productPageImageContainerMainImg' src={process.env.PUBLIC_URL + `/products/${x.id}/1.jpg`} alt='product visual' />
                        №: {x.id} | Размер: {x.size} | Цена: {(x.price - (x.price * (x.discount / 100))).toFixed(2)}лв.
                    </Link>;
                }) : <p>Нямате добавени продукти в кошницата</p>}

                <div>
                    <span>TOTAL: {cartItems ? cartItems.reduce((a, b) => a += (b.price - b.price * (b.discount / 100)), 0 ).toFixed(2) : 0}</span>
                    <button onClick={makeOrder}>ORDER</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;