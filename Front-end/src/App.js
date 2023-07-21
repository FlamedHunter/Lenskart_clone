import './App.css';
import Footer from './assets/footer/Footer';
import Navbar from './assets/navbar/Navbar';
import Home from './components/home/Home';
import ListingPage from './components/listing page/ListingPage';
import ProductPage from './components/product page/ProductPage';

function App() {
  return (
    <>
        <Navbar/>
        <ListingPage/>
        <Footer/>
    </>
  );
}

export default App;
