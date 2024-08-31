import './App.css';
import Nav from './components/Navigation/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer/Footer.js';
import Footer2 from './components/Footer/Footer2.js';

function App() {
  return (
    <div className="App">
        <Nav />
        <Main />
        <Footer />
        <Footer2 />
    </div>
  );
}

export default App;
