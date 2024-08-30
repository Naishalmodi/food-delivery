import React, { useContext } from 'react'
import './Fooditem.css';
import { assets } from '../../assets/assets';
import { storeContext } from '../../context/storeContext';

function Fooditem({id,name,price,image,description}) {
    // const [itemcount,setItemcount] = useState(0);
    const {cartitem,addToCart,removeFromCart} = useContext(storeContext);
  return (
    <div className='food-item'>
        <div className='food-item-container'>
            <img className='food-item-image' src={image} alt=''/>
            {
                !cartitem[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>    
                :<div className='food-item-counter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
                    <p>{cartitem[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/>
                </div>
            }
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt=''/>
            </div>
            <p className='food-item-des'>{description}</p>
            <p className='food-item-price'>₹{price}</p>
        </div>
    </div>
  )
}

export default Fooditem;
