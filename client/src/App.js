// import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// import Main from './components/Main/Main';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      
      <Header />

      {/* <Main /> */}
      <Home />

      <Footer />

    </div>
  );
}

export default App;