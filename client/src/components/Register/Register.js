import './Register.css';

import { useState } from 'react';

import { Link } from 'react-router-dom';

import HeaderInfo from '../HeaderInfo/HeaderInfo';

const Register = () => {

    const [email, setEmail] = useState('');
    const [reemail, setReEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');


    function onSubmitHandler(e) {
        e.preventDefault();

        if (email !== reemail) {
            console.log('Mails don\'t match!');
            return;
        }

        if (password !== repassword) {
            console.log('Passwords don\'t match!');
            return;
        }

        let data = {
            email,
            password,
            name,
            phone
        }

        // SEND TO BACKEND
        fetch(`http://localhost:4000/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div className='profileRegisterContainer'>
            <HeaderInfo />

            <div className='profileRegisterForm'>
                <h2>НОВА РЕГИСТРАЦИЯ</h2>
                <div className='profileRegisterFormContainer'>
                    <form onSubmit={onSubmitHandler}>
                        <div className='registerFormDiv'>
                            <h3>Данни за вход</h3>
                            <label>
                                Имейл<br />
                                <input
                                    type="email"
                                    name="name"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                            </label><br />
                            <label>
                                Потвърди имейл<br />
                                <input
                                    type="email"
                                    name="reemail"
                                    value={reemail}
                                    onChange={e => setReEmail(e.target.value)}
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
                        </div>
                        <div className='registerFormDiv'>
                            <h3>Лична информация</h3>
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
                                    placeholder="0888899999"
                                    required
                                />
                            </label><br />
                        </div>
                        <input type="submit" value="РЕГИСТРАЦИЯ" className='profileRegisterFormContainerInputBtn' /><br />
                        <Link to='/login'>Назад към входа</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;