import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop' // Ensure this file exists as Shop.jsx in the pages directory
import ShopCategory from './pages/ShopCategory' // Ensure this file exists as ShopCategory.jsx in the pages directory
import Product from './pages/Product' // Ensure this file exists as Product.jsx in the pages directory
import LoginSignup from './pages/LoginSignup' // Ensure this file exists as LoginSignup.jsx in the pages directory
import Cart from './pages/Cart' // Ensure this file exists as Cart.jsx in the pages directory
import Footer from './components/Footer/Footer'
import Men_banner from './components/Assets/banner_mens.png'
import Women_banner from './components/Assets/banner_women.png'
import Kids_banner from './components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/Mens' element={<ShopCategory banner={Men_banner} category="Mens" />} />
          <Route path='/Womens' element={<ShopCategory banner={Women_banner} category="Womens" />} />
          <Route path='/Kids' element={<ShopCategory banner={Kids_banner} category="Kids" />} />
          <Route path='/product'>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
