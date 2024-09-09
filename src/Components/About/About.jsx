import React, { useEffect, useState } from 'react'
import style from './About.module.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/chefs-1.jpg'
import img7 from '../../assets/chefs-3.jpg'
import img8 from '../../assets/chefs-2.jpg'
import img9 from '../../assets/meal-3.jpg'
import img10 from '../../assets/meal-4.jpg'

export default function About() {
    
    return <>
    

        <div className="about-page text-white pt-16 ">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-text">
          <h1>Welcome to Deliciously Yours!</h1>
          <p>Discover the true taste of home-cooked meals with a modern twist.</p>
        </div>
        <div className="hero-image">
          <img src={img9} alt="Delicious Food" />
        </div>
      </section>

      {/* Story Section */}
            <section className="about-story">
            <div className="story-image">
          <img src={img10} alt="Chef Preparing Food" />
        </div>
        <div className="story-content">
          <h2 className='pb-6 text-4xl'>Our Story</h2>
          <p className='text-l'>
            Deliciously Yours began in 2010 with a mission to bring fresh, high-quality ingredients to every dish. 
            Our passion for food comes from a love of cooking for family and friends. 
            We combine traditional recipes with modern techniques to create meals that satisfy both the body and soul.
          </p>
        </div>
       
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <h2 className='pb-6 text-4xl'>Our Mission</h2>
        <p className='text-l w-[80%] mx-auto'>
          At Deliciously Yours, our goal is to offer exceptional food that brings people together. 
          We believe in using the freshest ingredients, supporting local farmers, and providing meals that cater to all dietary preferences.
        </p>
        <ul className='p-8 '>
          <li className=''>Farm-fresh ingredients</li>
          <li>100% organic</li>
          <li>Gluten-free and vegan options available</li>
        </ul>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2 className='text-3xl mb-8'>Meet the Team</h2>
         <div className="team-grid">
          <div className="team-member">
            <img src={img6} alt="Head Chef" />
            <h3>John Doe</h3>
            <p>Head Chef</p>
          </div>
          <div className="team-member">
            <img src={img7} alt="Sous Chef" />
            <h3>Jane Smith</h3>
            <p>Sous Chef</p>
          </div>
          <div className="team-member">
            <img src={img8} alt="Restaurant Manager" />
            <h3>Emily Brown</h3>
            <p>Restaurant Manager</p>
          </div>
        </div> 
    

    </section>





      {/* Social Media Section */}
      <section className="about-social text-white">
        <h2 className='text-3xl'>Connect with Us</h2>
        <div className="social-icons text-white">
          <a href="https://facebook.com" className=' ' target="_blank" rel="noopener noreferrer">
            <i className='fa-brands fa-facebook-f'></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className='fa-brands fa-instagram'></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className='fa-brands fa-twitter'></i>
          </a>
        </div>
      </section>
    </div>
    </>
}
