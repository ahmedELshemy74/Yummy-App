import React, { useEffect, useState } from 'react'
import style from './Categories.module.css'
import Loading from '../Loading/Loading.jsx';
import useCategorie from '../../Hooks/useCategorie.jsx';
import { Link } from 'react-router-dom';
export default function Categories() {
   

  let { data, isLoading } = useCategorie()
  console.log(data);
  
  return <>
    
    {isLoading ? <Loading /> :
      <div className='flex flex-wrap container mx-auto justify-center pt-16 py-2'>
        {data?.map((category, index) =>
            <div key={index} className="md:w-1/4 p-4 cursor-pointer">
          <Link to={`/categoryitem/${category.strCategory}`}>
          <div className=' py-2 '>
            <img src={category.strCategoryThumb} className='w-full h-[200px]' alt={category.strCategory} />
            <h2 className='text-main text-center py-4 text-3xl text-white'>{category.strCategory}</h2>
          </div>
          </Link>
        </div>
        
        )
        }</div>
    }
  
  </>
}
