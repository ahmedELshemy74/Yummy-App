import React, { useEffect, useState } from 'react'
import style from './Brands.module.css'
import Loading from '../Loading/Loading';
import useBrands from '../../Hooks/useBrands.jsx';
export default function Brands() {

    let { data,isLoading}=useBrands()

    console.log(data);
    
  return <>
    
    {isLoading ? <Loading /> :
      <div className='md:flex md:flex-wrap md:justify-center pt-16 py-1'>
        {data?.map((Brand) => <div key={Brand._id} className="md:w-1/5 p-4 cursor-pointer ">
          <div className='border border-solid border-gray-400 meal p-4'>
            <img src={Brand.image} className='w-full' alt={Brand.slug} />
            <h2 className='text-main text-center text-2xl text-white py-2 '>{Brand.name}</h2>
          </div>
        </div>
        
        )
        }</div>
    }
  
  </>
}
