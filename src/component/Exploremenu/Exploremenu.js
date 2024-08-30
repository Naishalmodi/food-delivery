import React from 'react'
import './Exploremenu.css';
import { menu_list } from '../../assets/assets';

function Exploremenu({category,setCategory}) {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Chose from a diverse menu featuring a deletable array of dishes crafted wiith the finest i gridents and culinary exparrtice.Our mission is to satisfy your cravings ellevate your dining experince one delicious meat at a time.</p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default Exploremenu;
