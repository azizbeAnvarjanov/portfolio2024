import React from 'react';

import { Link } from 'react-router-dom';

import { FaTelegram } from "react-icons/fa6";
import { HiHome } from "react-icons/hi2";
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";


function Navbar() {
  return (
    <nav className='text-white bg-[--gray] flex items-center px-1 py-3 rounded-[10px] backdrop-blur-lg navsticky'>
            <Link to="/" className='px-0 py-0 rounded-md mx-2 home_link bg-[--blue] hover:opacity-[0.5] transition-all mobile'><HiHome /></Link>
        <div className='flex items-center ul'>
            <Link to="/" className='px-0 py-0 rounded-md mx-2 home_link bg-[--blue] hover:opacity-[0.5] transition-all'><HiHome /></Link>
            <Link to="/projects" className='py-1 rounded-md mx-2 hover:opacity-[0.5] transition-all'>Projects</Link>
            <Link to="/skills" className='py-1 rounded-md mx-2 hover:opacity-[0.5] transition-all'>Skills</Link>
            <Link to="/blog" className='py-1 rounded-md mx-2 hover:opacity-[0.5] transition-all'>Blog</Link>
            <Link to="/contact" className='py-1 rounded-md mx-2 hover:opacity-[0.5] transition-all'>Contact</Link>
            <div className="close_btn"><IoClose /></div>
        </div>
        <a href='#' className='flex items-center ml-auto mr-3 bg-[--blue] p-2 rounded-[50px] hover:opacity-[0.5] transition-all telegram_link'>
            <FaTelegram className='size-6'/>
        </a>
        <div className="menu flex items-center ml-auto mr-3 bg-[--blue] p-2 rounded-[50px] hover:opacity-[0.5] transition-all">
          <SlMenu className='size-6'/>
        </div>
    </nav>
  )
}

export default Navbar