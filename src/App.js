import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListingPage , ProductPage,CartPage } from './pages'
import { useSelector } from 'react-redux'

function App() {
  const items = useSelector((state) => state.cart.items);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="App">
      <header className="App-header">
        <div className='website-header'><img src="/picture/logo.png" alt="list"/></div>
         <div className='menu-header'>
          <ul className='list-menu'>
            <li><a href='/'><img src="/picture/iconList.png" alt="list"/></a></li>
            <li><a href='/cart'><img src="/picture/cart.png" alt="list"/></a>
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}</li>
            <li><img src="/picture/setting.png" alt="list"/></li>
          </ul>
           </div>
      </header>
        
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListingPage/>}/>
          <Route path='Product' element={<ProductPage/>}/>
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
       </BrowserRouter>
     
    </div>
  );
}

export default App;
