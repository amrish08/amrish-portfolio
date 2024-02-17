import React from 'react';
import AboutImg from '../assets/about.png';

const About = () => {
  return (
    <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'> 
        <div className='py-7 md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center '>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>Hi, My name is S Amrish. I am a Full-stack developer. I build beautiful websites with React.js and Tailwind CSS</p>
                <p className='pb-5'>I'm proficient in Frontend skills like React, Axios, Tailwind CSS, SaSS, CSS3 and many more.</p>
                <p className='pb-5'>In backend, I'm familiar with Ruby on rails, MySql, Restful Api etc</p>
            </div>
           
        </div>
    </section>
  )
};

export default About;