import React, { useContext } from "react";
import "./Cart.css";
import { storeContext } from "../../context/storeContext";
import { food_list as assetFoodList } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {cartitem,food_list: contextFoodList,removeFromCart,getTotalCartAmount} = useContext(storeContext);
  const navigate = useNavigate();
  const foodList = contextFoodList || assetFoodList; // Use the context food list or fallback to asset food list

  // Debugging: log the foodList and cartItems to the console
  console.log("foodList:", foodList);
  console.log("cartItems:", cartitem);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {foodList.map((item, index) => {
          if (cartitem?.[item._id] > 0) {
            return (
              <div>
                <div key={item._id}>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt=""></img>
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                    <p>{cartitem[item._id]}</p>
                    <p>₹ {item.price * cartitem[item._id]}</p>
                    <p onClick={()=>removeFromCart(item._id)} className="cross">X</p>
                  </div>
                  <hr />
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
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
              <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
              <div>
                <p>If you have promo code , enter here</p>
                <div className="cart-promocode-input">
                    <input type="text" placeholder="Enter promocode"/>
                    <button>Submit</button>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Cart;
