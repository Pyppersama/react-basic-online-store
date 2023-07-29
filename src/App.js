import './App.css';
import {Route, Routes} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Shop } from './pages/shop/shop'
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <ShopContextProvider >
      <Navbar />
      <Routes>
        <Route path='/' element={ <Shop /> } />
        <Route path='/cart' element={ <Cart /> } />
      </Routes>
      <Footer />
      </ShopContextProvider>
    </div>
  );
}

export default App;
