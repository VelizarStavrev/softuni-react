// import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Main from './components/Main/Main';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/url' component={Main} /> {/* TEMP */}
      </Switch>

      <Footer />
    </div>
  );
}

export default App;