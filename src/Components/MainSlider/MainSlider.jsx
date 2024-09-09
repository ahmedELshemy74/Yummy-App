import React, { useState } from 'react'
import style from './MainSlider.module.css'
import Slider from "react-slick";
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'



export default function MainSlider() {


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
  };

    
  return <>
    
    <div className="flex">
      <div className="w-full md:w-3/4">
      <Slider {...settings}>
      <img src={img1} className='w-full h-[500px]' alt="slide1" />
      <img src={img2} className='w-full h-[500px]' alt="slide2" />
      <img src={img3} className='w-full h-[500px]' alt="slide3" />
    </Slider>
      </div>
      <div className="hidden md:block md:w-1/4">
      <img src={img4} className='w-full h-[250px] rounded-s-none' alt="slide4" />
      <img src={img5} className='w-full h-[250px] rounded-s-none' alt="slide5" />
      </div>
    </div>  
    
  </>
}
