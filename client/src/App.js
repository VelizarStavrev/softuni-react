// import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' exact component={Products} />
        <Route path='/product' component={Product} />

        <Route path='/url' component={Main} /> {/* TEMP */}
      </Switch>

      <Footer />
    </div>
  );
}

export default App;