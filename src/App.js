import './App.scss';

import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { ListingPage , ProductPage,CartPage } from './pages'
import { useSelector } from 'react-redux'

function App() {
  const items = useSelector((state) => state.cart.items);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
      <header className="App-header">
        <div className='website-header'><img src={`${process.env.PUBLIC_URL}/picture/logo.png`} alt="list"/></div>
         <div className='menu-header'>
          <ul className='list-menu'>
            <li><Link to="/"><img src={`${process.env.PUBLIC_URL}/picture/iconList.png`} alt="list"/></Link></li>
            <li><Link to="/cart"><img src={`${process.env.PUBLIC_URL}/picture/cart.png`}  alt="list"/>
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}</Link></li>
            <li><img src={`${process.env.PUBLIC_URL}/picture/setting.png`}  alt="list"/></li>
          </ul>
           </div>
      </header>
        
     
        <Routes>
          <Route path='/' element={<ListingPage/>}/>
          <Route path='/product' element={<ProductPage/>}/>
          <Route path='/cart' element={<CartPage/>} />
        </Routes>
      
     
    </div>
    </BrowserRouter>
  );
}

export default App;
