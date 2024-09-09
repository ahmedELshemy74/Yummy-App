import React, { useEffect, useState } from 'react'
import style from './Categoryitem.module.css'
import Loading from '../Loading/Loading.jsx'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import useCategorie from '../../Hooks/useCategorie.jsx'
export default function Categoryitem() {

    const [categoryItems, setCategoryItems] = useState([])
    let {strCategory}=useParams()
    async function getCategoryItems(strCategory) {
        let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)
        console.log(data.meals);
        setCategoryItems(data.meals)
      }
      useEffect(() => {
        getCategoryItems(strCategory);
      }, [])
  let {  isLoading } = useCategorie()
    
    return <>        
         {isLoading ?<Loading/> :<div className='flex flex-wrap container mx-auto justify-center pt-16 py-2'>
        {categoryItems?.map((category, index) =>
            <div key={index} className="md:w-1/4 p-4 cursor-pointer">
          <Link to={`/productdetails/${category.idMeal}`}>
          <div className=' py-2 item '>
                    <img src={category.strMealThumb} className='w-full h-[200px]' alt={category.strMeal} />
                    <div className='text'>
                        <h2 className='text-main text-center py-4 text-3xl text-white'>{category.strMeal}</h2>
                        </div>
          </div>
          </Link>
        </div>
        
        )
        }</div>}
      
    
    </>
}
