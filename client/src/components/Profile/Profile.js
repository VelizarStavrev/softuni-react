import './Profile.css';

import { useState, useEffect, useContext } from 'react';
import isLogged from '../../contexts/isLoggedContext';

import { Link, NavLink } from 'react-router-dom';

import HeaderInfo from '../HeaderInfo/HeaderInfo';

const Profile = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);

    const { onChangeLogHandler } = useContext(isLogged);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        fetch(`http://localhost:4000/getOneUser/${localStorage.getItem('user-id')}`, { signal: signal })
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    // setItems(data);

                    setEmail(data.email);
                    setName(data.name);
                    setPhone(`${0}` + data.phone);
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

    function onSubmitHandler(e) {
        e.preventDefault();

        let data = {
            email,
            password
        }

        console.log('Data: ', data);
    }

    function logoutHandler() {
        localStorage.clear();
        onChangeLogHandler.bind(this);
    }

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
                        <NavLink to='/profile' activeClassName='profileActiveLink'>ПРОФИЛ</NavLink>
                        <NavLink to='/orders'>ПОРЪЧКИ</NavLink>
                    </div>

                    <form onSubmit={onSubmitHandler}>
                        <label>
                            Имейл<br />
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                disabled
                            />
                        </label><br />
                        <label>
                            Име и фамилия<br />
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </label><br />
                        <label>
                            Мобилен телефон<br />
                            <input
                                type="tel"
                                name="tel"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                pattern="[0-9]{10}"
                                required
                            />
                        </label><br />
                        <label>
                            Парола<br />
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                minLength="6"
                                required
                            />
                        </label><br />
                        <label>
                            Потвърди паролата<br />
                            <input
                                type="password"
                                name="password"
                                value={repassword}
                                onChange={e => setRePassword(e.target.value)}
                                minLength="6"
                                required
                            />
                        </label><br />
                        <input type="submit" value="ЗАПАЗИ" className='profileLoginSideInputBtn' /><br />
                        <Link to='/' onClick={logoutHandler}>Изход от профила</Link>
                    </form>
                </div>
            </div>
        );
    }
};

export default Profile;