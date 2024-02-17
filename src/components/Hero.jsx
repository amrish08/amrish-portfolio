import React from 'react';
import HeroImg from '../assets/hero.png';
import { AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

const Hero = () => {
  const config = {
    subtitle: "I'm a Full-Stack developer"
  }
  return (
    <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='w-1/2 flex flex-col'>
            <h1 className='md:w-1/2 text-white text-6xl font-hero-font '>Hi, <br/> I'm <span className='text-black'>S</span> Amrish 
            <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href='https://www.linkedin.com/in/amrish08' className='pr-5 hover:text-white'><AiOutlineLinkedin size={40} /></a>
                <a href='https://www.instagram.com/zipp_y_seve' className='pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
                <a href='https://www.facebook.com/virat.amrish' className='pr-5  hover:text-white'><AiOutlineFacebook size={40} /></a>
            </div>
        </div>
        
        <img className='md:w-1/3' src={HeroImg} />
    </section>
  )
}

export default Hero;