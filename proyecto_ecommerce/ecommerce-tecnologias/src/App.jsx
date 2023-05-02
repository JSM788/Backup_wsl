import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Checkout from './pages/Checkout';
import Checkout2 from './pages/Checkouts/Checkout2';
import Checkout3 from './pages/Checkouts/Checkout3';
import Checkout4 from './pages/Checkouts/Checkout4';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Header from './components/Header';
import Searching from './components/Searching';
import Hero from './components/Hero';
import PopUpPrivacyPolicy from './components/PopUpPrivacyPolicy';
import AsideCheckout from './components/AsideCheckout';
import ArticleCheckout from './components/ArticleCheckout';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/checkout2' element={<Checkout2/>} />
          <Route path='/checkout3' element={<Checkout3/>} />
          <Route path='/checkout4' element={<Checkout4/>} />
          <Route path='cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
