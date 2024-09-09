import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import MainSlider from '../MainSlider/MainSlider'
import CategorySlider from '../CategorySlider/CategorySlider.jsx'
import { Link } from 'react-router-dom'
import useMeals from '../../Hooks/useMeals.jsx'
import Loading from '../Loading/Loading.jsx'
import yummy from '../../assets/yummy.jpg'
import Chat  from '../Chat/Chat.jsx'
// import SmallScreen from "./(componens)/chatPopup/page";

export default function Home() {

    let { data, isLoading } = useMeals();
    console.log(data);

    return <>
    
      <div>
        <img src={yummy} className='w-full h-[400px] '  alt="" />
        </div>
        {/* <MainSlider /> */}
        <CategorySlider />
        <div>
          <Chat/>
      </div>
        {!isLoading?  <div className="flex container mx-auto flex-wrap justify-center my-8 ">
    {data?.map((meal,index) => <div key={index} className="md:w-1/4 product px-2">
      <div className='text-center my-5'>
        <Link to={`/productdetails/${meal.idMeal}`}>
          <div className='item '>
          <img src={meal.strMealThumb} className='w-full' alt={meal.strMeal} />
            <div className='text text-center'>
              <div>
            <h2 className='text-2xl text-white font-semibold'>{meal.strMeal}</h2>
            <h2 className='font-medium text-xl text-white'>{meal.strCategory.split(' ').slice(0,2).join(' ')}</h2>
            <h2 className='font-medium text-white text-center '>{meal.strInstructions.split(' ').slice(0,8).join(' ')}</h2>
            </div>
              </div>
            </div>
        </Link>
        
    </div>
        </div> )}
        </div> : <Loading />}
        
   
        
    </>
}
