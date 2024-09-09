import React, { useEffect, useState } from 'react'
import style from './CategorySlider.module.css'
import Slider from "react-slick";
import axios from 'axios';
import useCategorie from '../../Hooks/useCategorie.jsx';

export default function CategorySlider() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
  };


    let { data, isLoading } = useCategorie()



    
  return <>
    
      <Slider {...settings}>
      {data?.map((category, index) => <div key={index} className='my-6'>
        <img src={category.strCategoryThumb} className=' w-full h-[200px]' alt={category.strCategory} />
        <h3 className='text-center text-white'>{ category.strCategory}</h3>
        </div>)}
      </Slider>  
  </>
}
