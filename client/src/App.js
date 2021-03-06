// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import isLogged from './contexts/isLoggedContext';
import cartContext from './contexts/cartContext';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Main from './components/Main/Main'; /* temp - used for testing */
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import Orders from './components/Orders/Orders';
import Cart from './components/Cart/Cart';

function App() {

  const checkIfLogged = localStorage.getItem('user-token') ? true : false;
  const cartInfoInitial = JSON.parse(localStorage.getItem('cart-items'));

  const [logged, setLogged] = useState(checkIfLogged);
  const value = { logged, setLogged };

  const [cart, setCart] = useState(cartInfoInitial);
  const cartValue = { cart, setCart };

  return (
    <div className="App">
      <isLogged.Provider value={value}>
        <cartContext.Provider value={cartValue}>
          <Header />

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/products/:type' exact component={Products} />
            <Route path='/product/:id' exact component={Product} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/profile'>
              {!localStorage.getItem('user-token') ? <Redirect to='/login' /> : <Profile />}
            </Route>
            <Route path='/orders'>
              {!localStorage.getItem('user-token') ? <Redirect to='/login' /> : <Orders />}
            </Route>
            <Route path='/cart' component={Cart} />

            <Route path='/' component={Home} />
            <Route path='/url' component={Main} /> {/* TEMP */}
          </Switch>

          <Footer />
        </cartContext.Provider>
      </isLogged.Provider>
    </div>
  );
}

export default App;