import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext';
import navdrop_down from '../Assets/nav_dropdown.png'

function Header() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOPIFY</p>
      </div>

      <img
        className='nav-dropdown'
        onClick={dropdown_toggle}
        src={navdrop_down}
        alt=""
      />

      <ul ref={menuRef} className='nav-menu'>
        <li 
          className={menu === "shop" ? "active" : ""} 
          onClick={() => setMenu("shop")}
        >
          <Link to="/">Shop</Link>
        </li>

        <li 
          className={menu === "mens" ? "active" : ""} 
          onClick={() => setMenu("mens")}
        >
          <Link to="/mens">Men</Link>
        </li>

        <li 
          className={menu === "womens" ? "active" : ""} 
          onClick={() => setMenu("womens")}
        >
          <Link to="/womens">Women</Link>
        </li>

        <li 
          className={menu === "kids" ? "active" : ""} 
          onClick={() => setMenu("kids")}
        >
          <Link to="/kids">Kids</Link>
        </li>
      </ul>

      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}>Logout</button>
        :<Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
        <Link to="/cart"><img src={cart_icon} alt="cart"/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Header;
