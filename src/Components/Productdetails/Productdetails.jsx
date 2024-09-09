import React, { useEffect, useState } from 'react'
import style from './Productdetails.module.css'
import axios from 'axios';
import Slider from "react-slick";
import Loading from '../Loading/Loading.jsx';
import { Link, useParams } from 'react-router-dom';
import useCategorie from '../../Hooks/useCategorie.jsx';

export default function Productdetails() {
    
const [productDetails, setProductDetails] = useState([])
  let { idMeal } = useParams();
  
    
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    autoplay: true,
    autoplaySpeed:1000,
  };

  async function getProductDetails(idMeal) {
    let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    console.log(data.meals);
    setProductDetails(data.meals)
  }
  useEffect(() => {
    getProductDetails(idMeal);
  }, [])
  let { isLoading } = useCategorie()
  
  return <>
      {isLoading? <Loading/>:<div className='container flex flex-wrap h-screen pt-16 mt-8 mx-auto'>
      {productDetails.map((product) =>
       <div key={product.idMeal} className="flex items-start gap-12 py-10 text-white">
      <div className="md:w-1/4 w-full ">
            <img src={product.strMealThumb} className='w-full rounded-md' alt={product.strMeal} />
            <h3 className='text-white text-center text-4xl font-semibold py-3'>{product.strMeal}</h3>
      </div>
      <div className="md:w-3/4 w-full">
            <div >
              <h2 className='text-4xl font-semibold underline mb-4'>Instructions</h2>
          <p className=' text-white text-l border-b-4 border-dotted pb-5 '>{product.strInstructions}</p>
          <h3 className='text-3xl mt-3'>Area: {product.strArea}</h3>
          <h3 className='text-3xl mt-3'>Category: {product.strCategory}</h3>
            </div>
            <div>
              <h2 className='font-semibold text-3xl py-5'>Tags :</h2>
              <Link target='_blank' to={product.strSource}><button type="button" className="text-black  bg-white hover:bg-white  font-medium rounded-full text-sm px-5 py-2.5 text-center me-4 mb-2 dark:bg-white dark:hover:bg-white dark:focus:ring-white">Source</button>
              </Link>
              <Link target='_blank' to={product.strYoutube}><button type="button" className="text-white bg-red-700 hover:bg-red-800  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Youtube</button>

              </Link>
            </div>
      </div>
    </div>
      )}
        
        </div>}
    
    </>
}
