import React, { useEffect, useState } from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
export default function Layout() {
    
    return <>
        
        <Navbar />
        <div className='bg-black'>
        <div className=" ">
            <Outlet></Outlet>
            </div>
            </div>
        <Footer/>
    </>
}
