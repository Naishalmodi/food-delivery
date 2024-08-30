import React, { useContext, useState } from 'react'
import './Nav.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom';
import { storeContext } from '../../context/storeContext';

function Navbar({setShowlogin}) {

  const [menu,setMenu] = useState('Home');

  const {getTotalCartAmount} = useContext(storeContext);
  return (
    <div className='Navbar'>
        <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>
        <ul className='navbar-menu'>
          <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
          <a href="#explore-menu" onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
          <a href="#app-down" onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
          <a href="#footer" onClick={()=>setMenu("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact-us</a>
        </ul>
        <div className='navbar-right'>
          <img src={assets.search_icon} alt=''/>
          <div className='navbar-search-icon'>
          <Link to='/cart'> <img src={assets.basket_icon} alt=""/></Link>
              <div className={getTotalCartAmount() === 0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowlogin(true)}>Sign in</button>
        </div>
      </div>
  )
}

export default Navbar;