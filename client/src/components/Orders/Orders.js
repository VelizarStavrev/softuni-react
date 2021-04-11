import './Orders.css';

import { useState, useEffect } from 'react';

import { Link, NavLink } from 'react-router-dom';

import HeaderInfo from '../HeaderInfo/HeaderInfo';

const Profile = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        fetch(`http://localhost:4000/getOneUser/${localStorage.getItem('user-id')}`, { signal: signal })
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

                    <p>№8808802492 - 19.11.2018 - Admin Adminov - Sent - 169.99 BGN</p>
                    <p>№8808802492 - 19.11.2018 - Admin Adminov - Sent - 169.99 BGN</p>
                    <p>№8808802492 - 19.11.2018 - Admin Adminov - Sent - 169.99 BGN</p>
                </div>
            </div>
        );
    }
};

export default Profile;