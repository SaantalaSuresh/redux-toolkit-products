
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';
import { Route,Routes } from 'react-router-dom';
import Cart from './components/cart';
import NavBar from './components/Navbar';
import EachProduct from './components/item';


const App = () => {

return (
  <div>
    <NavBar />
    <Routes>
    <Route path="/" element={<Product />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/products/:id" element={<EachProduct />} />
  </Routes>
  </div>
) 
}

export default App