import React, { useEffect, useState } from 'react'
import style from './Footer.module.css'
import logo from '../../assets/logo.png'


export default function Footer() {
    
    return <>
    
    <div className='bg-white text-black '>
    <div className='container mx-auto text-black'>
        <div className='pb-8'>
        <img src={logo} width={100} alt="" />
        <h3 className='text-3xl py-3'>Get the Food app</h3>
        <p className='text-lg pb-4 text-gray-400'>We will send email to download app</p>
        <div className='flex justify-between items-center'>
        <input type="text" placeholder='Write Your Email' id="input" className="bg-white-100 border border-gray-950 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
        <button type="button" className="focus:outline-none text-white bg-black hover:bg-black focus:ring-4  font-medium rounded-lg text-sm px-2 py-2.5  me-2 dark:bg-black dark:hover:bg-black dark:focus:ring-black">Share App Link</button>
        </div>
  </div>
    </div>
    </div>
    </>
}
