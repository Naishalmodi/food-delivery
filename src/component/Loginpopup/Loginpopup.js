import React, { useState } from 'react'
import './Loginpopup.css';
import { assets } from '../../assets/assets';

function Loginpopup({setShowlogin}) {
    const [currstate, setCurrstate] = useState('Login');
  return (
    <div className='login-popup'>
        <form className='login-popup-form'>

            <div className='login-popup-title'>
                <h2>{currstate}</h2>
                <img onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt=''/>
            </div>

            <div className='login-popup-inputs'>
                {currstate==="Login"?<></>:<input type='text' placeholder='Enter your name' required/>}
                
                <input type='email' placeholder='Enter your Email' required/>
                <input type='password' placeholder='Enter your passsword' required/>
            </div>

            <button>{currstate==="Sign Up"?"Create account":"Login"}</button>

            <div className='login-popup-condi'>
                <input type='checkbox' required/>
                <p>By continuing, i agree to the term of use & privacy policy.</p>
            </div>

            {currstate==="Login"
                ?<p>Create a new account ? <span onClick={()=>setCurrstate("Sign Up")}>Click here</span></p>
                :<p>Already have an account ? <span onClick={()=>setCurrstate("Login")}>Login here</span></p>   
            }

            
            

        </form>
    </div>
  )
}

export default Loginpopup;
