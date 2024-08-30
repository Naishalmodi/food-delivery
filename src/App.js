import React, { useState } from 'react';
import Navbar from './component/Nav/Nav';
import Home from './pages/Home/Home';
import Placeorder from './pages/Placeorder/Placeorder';
import Cart from './pages/Cart/Cart';
import { Routes, Route } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Loginpopup from './component/Loginpopup/Loginpopup';

function App() {
  const [showlogin,setShowlogin] = useState(false);
  return (
    <div>
      <>
      {showlogin?<Loginpopup setShowlogin={setShowlogin}/>:<></>}
      <Navbar setShowlogin={setShowlogin}/>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/cart' element={<Cart></Cart>}/>
        <Route path='/order' element={<Placeorder></Placeorder>}/> 
      </Routes> 
      <Footer/>
      </>
      
      {/* <Routes/> */}
    </div>
  );
}

export default App;
