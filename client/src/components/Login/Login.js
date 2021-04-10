import './Login.css';

import { useState } from 'react';

import { Link } from 'react-router-dom';

import HeaderInfo from '../HeaderInfo/HeaderInfo';

import checkGreen from './assets/icons/check-green.svg';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onSubmitHandler(e) {
        e.preventDefault();
        
        let data = {
            email,
            password
        }

        // SEND TO BACKEND
        fetch(`http://localhost:4000/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);

            if (data.message === 'OK') {
                localStorage.setItem('user-token', data.token);
                localStorage.setItem('user-id', data.userid);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div className='profileContainer'>
            <HeaderInfo />

            <div className='profileLoginForm'>
                <h2>Вход или регистрация</h2>
                <div className='profileLoginContainer'>
                    <div className='profileLoginSide'>
                        <h3>Регистрирани клиенти</h3>
                        <form onSubmit={onSubmitHandler}>
                            <label>
                                Имейл<br />
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </label><br />
                            <label>
                                Парола<br />
                                <input 
                                    type="password" 
                                    name="password" 
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </label><br />
                            <input type="submit" value="ВХОД" className='profileLoginSideInputBtn' /><br />
                            <Link to='/url'>Забравена парола</Link>
                        </form>
                    </div>

                    <div className='profileRegisterSide'>
                        <h3>Нови клиенти</h3>
                        <p>Защо да се регистрирам?</p>
                        <div className='profileRegisterItem'>
                            <img src={checkGreen} alt='profile check icon' />
                            Научавате първи за новите модели и разпродажби
                        </div>
                        <div className='profileRegisterItem'>
                            <img src={checkGreen} alt='profile check icon' />
                            Бързо и лесно пазаруване
                        </div>
                        <div className='profileRegisterItem'>
                            <img src={checkGreen} alt='profile check icon' />
                            История на поръчките
                        </div>
                        <div className='profileRegisterItem'>
                            <img src={checkGreen} alt='profile check icon' />
                            Участвате в нашата програма Лоялен клиент
                        </div>
                        <Link to='/register'>РЕГИСТРАЦИЯ</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;