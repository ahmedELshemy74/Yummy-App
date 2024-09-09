import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About/About.jsx'
import Categories from './Components/Categories/Categories.jsx'
import ContactUs from './Components/ContactUs/ContactUs.jsx'
import Brands from './Components/Brands/Brands.jsx'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Notfound from './Components/Notfound/Notfound.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Productdetails from './Components/Productdetails/Productdetails.jsx'
import Categoryitem from './Components/Categoryitem/Categoryitem.jsx'
import Chat from './Components/Chat/Chat.jsx'
import { Toaster } from 'react-hot-toast'

let routers = createBrowserRouter([
      {path: '', element: <Layout />, children: [
      { index: true, element:<Home/> },
      { path:'about', element:<About/> },
      { path:'categories', element:<Categories/> },
      { path:'contactus', element:<ContactUs/> },
      { path:'productdetails/:idMeal', element:<Productdetails/> },
      { path:'categoryitem/:strCategory', element:<Categoryitem/> },
      { path:'brands', element:<Brands/> },
      { path:'*', element:<Notfound/> },
]}
])

let query = new QueryClient();

function App() {


  return <>
    <QueryClientProvider client={query}>
      <RouterProvider router={routers}></RouterProvider>
      <Toaster />
      </QueryClientProvider>
    </>
}

export default App
