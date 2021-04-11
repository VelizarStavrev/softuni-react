import './Orders.css';

import { useState, useEffect } from 'react';

import { Link, NavLink } from 'react-router-dom';

import HeaderInfo from '../HeaderInfo/HeaderInfo';

const Orders = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        fetch(`http://localhost:4000/getOrders/${localStorage.getItem('user-id')}`, { signal: signal })
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
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className='profileContainer'>
                <HeaderInfo />

                <div className='profileInfoContainer'>
                    <div className='profileLinkDiv'>
                        <NavLink to='/profile'>ПРОФИЛ</NavLink>
                        <NavLink to='/orders' activeClassName='profileActiveLink'>ПОРЪЧКИ</NavLink>
                    </div>

                    {items ? items.map(x => {
                        return <p key={x._id}>
                            №{x._id} - {x.products.map(y => <Link to={'/product/' + y.id} key={y.id}><img id='productPageImageContainerMainImg' src={process.env.PUBLIC_URL + `/products/${y.id}/1.jpg`} alt='product visual' /></Link>)} - Тотал: {x.total}лв.
                        </p>;
                    }) : <p>Нямате направени поръчки</p>}
                </div>
            </div>
        );
    }
};

export default Orders;