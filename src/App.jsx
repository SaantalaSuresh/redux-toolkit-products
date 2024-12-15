
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';
import { Route,Routes } from 'react-router-dom';
import Cart from './components/cart';
import NavBar from './components/Navbar';


const App = () => {

return (
  <div>
    <NavBar />
    <Routes>
    <Route path="/" element={<Product />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
  </div>
) 
}

export default App