import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import logo from '../assets/port-logo.jpg';

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className='sticky top-0 flex justify-between px-10 py-5 pz-10 bg-primary'>
        <a className="font-bold text-black" href="#"><img className='h-10 w-30' src={logo}/></a>
        <nav className='hidden md:block text-white'>
            <ul className='flex'>
                <li className=' hover:text-black'><a href ="/">Home</a></li>
                <li className=' hover:text-black'><a href ="#about">About</a></li>
                <li className=' hover:text-black'><a href ="#projects">Projects</a></li>
                <li className=' hover:text-black'><a href ="#resume">Resume</a></li>
                <li className=' hover:text-black'><a href ="#contact">Contact</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className='block md:hidden'>
            <ul onClick={() => setToggleMenu(!toggleMenu)}  className='flex flex-col text-white mobile-nav'>
                <li><a href ="/">Home</a></li>
                <li><a href ="#about">About</a></li>
                <li><a href ="#projects">Projects</a></li>
                <li><a href ="#resume">Resume</a></li>
                <li><a href ="#contact">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
  )
};

export default Header;