import React, { useContext } from 'react'
import './Placeorder.css';
import { storeContext } from '../../context/storeContext';

function Placeorder() {

  const {getTotalCartAmount} =useContext(storeContext)
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>

        <div className='multi-fields'>
          <input type='text' placeholder='First name'></input>
          <input type='text' placeholder='Last name'></input>
        </div>
        <input type='email' placeholder='Email address'></input>
        <input type='text' placeholder='Street'></input>

        <div className='multi-fields'>
          <input type='text' placeholder='City'></input>
          <input type='text' placeholder='State'></input>
        </div>
        <div className='multi-fields'>
          <input type='text' placeholder='Zip-code'></input>
          <input type='text' placeholder='Country'></input>
        </div>
          <input type='text' placeholder='Phone'></input>
      </div>


      <div className='place-order-right'>
      <div className="cart-total">
              <h2>Cart Total</h2>

              <div>
              <div className="cart-total-details">
                  <p>Subtotal</p>
                  <p>₹ {getTotalCartAmount()}</p>
                </div>
                <hr/> 

                <div className="cart-total-details">
                  <p>Delevary Fee</p>
                  <p>₹ {getTotalCartAmount() ===0?0:10}</p>
                </div>
                <hr/>

                <div className="cart-total-details">
                  <b>Total</b>
                  <b>₹ {getTotalCartAmount() === 0?0: getTotalCartAmount()+10}</b>
                </div>
              </div>
              <button>PROCEED TO PAYMENT</button>
          </div>
      </div>
    </form>
  )
}

export default Placeorder;
