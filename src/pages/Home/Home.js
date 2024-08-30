import React, { useState } from 'react'
import './Home.css';
import Header from '../../component/Header/Header';
import Exploremenu from '../../component/Exploremenu/Exploremenu';
import FoodDisplay from '../../component/Food_display/FoodDisplay';
import Appdownload from '../../component/Appdownload/Appdownload';

const Home = () => {

  const [category,setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <Exploremenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <Appdownload/>
    </div>
  )
}

export default Home;
