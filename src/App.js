import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cart from './cart';
import { CartProvider } from 'react-use-cart';
import Shop from './shop';


function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
      </Routes>
       
      </CartProvider>
    </Router>
  );
}


export default App;
