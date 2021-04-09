import './Register.css';

import { useState } from 'react';

import { Link } from 'react-router-dom';

import HeaderInfo from '../HeaderInfo/HeaderInfo';

const Register = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function onSubmitHandler(e) {
        e.preventDefault();
        
        let data = {
            name,
            password
        }

        // TO DO
        console.log('Register form data:', data);
        // SEND TO BACKEND
    }

    return (
        <div className='profileContainer'>
            <HeaderInfo />

            <div className='profileLoginForm'>
                <h2>НОВА РЕГИСТРАЦИЯ</h2>
                <div className='profileLoginContainer'>
                    <div className='profileLoginSide'>
                        <form onSubmit={onSubmitHandler}>
                            <div>
                                <h3>Данни за вход</h3>
                                <label>
                                    Имейл<br />
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={name}
                                        onChange={e => setName(e.target.value)}
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
                            </div>
                            <div>
                                <h3>Лична информация</h3>
                                <label>
                                    Имейл<br />
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={name}
                                        onChange={e => setName(e.target.value)}
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
                            </div>
                            <input type="submit" value="РЕГИСТРАЦИЯ" className='profileLoginSideInputBtn' /><br />
                            <Link to='/login'>Назад към входа</Link>
                        </form>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default Register;