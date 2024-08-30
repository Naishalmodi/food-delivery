import React from 'react'
import './Appdownload.css';
import { assets } from '../../assets/assets';

function Appdownload() {
  return (
    <div className='app-down' id='app-down'>

        <p>For Battter Experience Download <br/> Tomato App</p>
        <div className='app-down-platform'>
            <img src={assets.play_store} alt=''/>
            <img src={assets.app_store} alt=''/>
        </div>
      
    </div>
  )
}

export default Appdownload;
