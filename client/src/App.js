// import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products/:type' exact component={Products} />
        <Route path='/product/:id' exact component={Product} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />

        <Route path='/url' component={Main} /> {/* TEMP */}
      </Switch>

      <Footer />
    </div>
  );
}

export default App;