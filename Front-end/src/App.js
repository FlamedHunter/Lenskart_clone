import './App.css';
import Footer from './assets/footer/Footer';
import Navbar from './assets/navbar/Navbar';
import Home from './components/home/Home';
import ListingPage from './components/listing page/ListingPage';
import Login from './components/login_signup page/Login';
import Register from './components/login_signup page/Register';
import ProductPage from './components/product page/ProductPage';

function App() {
  return (
    <>
        <Navbar/>
        <Register/>
        <Footer/>
    </>
  );
}

export default App;
