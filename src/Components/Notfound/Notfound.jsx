import React, { useEffect, useState } from 'react'
import style from './Notfound.module.css'
import img from '../../assets/404-error-page-templates.jpg'


export default function Notfound() {
    
    return <>
    
    <div>
      <img src={img} className='w-full mx-auto' alt="" />
    </div>
    </>
}
