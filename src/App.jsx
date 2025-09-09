import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'


function App() {
  const [count, setCount] = useState(0)



  return (
    <>
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={ men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path='/product/:productId' element={<Product/>}/>

        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/login' element={<Login/>}/> 
      </Routes>
      <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App
