import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sidebar from './pages/components/sidebar/Sidebar'
import Navbar from './pages/components/navbar/Navbar'
import Footer from './pages/components/footer/Footer'
import Histories from './pages/components/histories/Histories'
import Contact from './pages/contact/Contact'
import Projects from './pages/projects/Projects'
import Skills from './pages/skills/Skills'
import Blog from './pages/blog/Blog'
import Page404 from './pages/404/Page404'


import { Link } from 'react-router-dom';

import { FaTelegram } from "react-icons/fa6";
import { HiHome } from "react-icons/hi2";
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";

function App() {



  return (
   <BrowserRouter>
     <div className='main_bg py-5'> 
      <div className="main_box w-[100%]  xl:w-[70%] mx-auto">
        <div className='flex w-[100%]'>
          <div className="left-box w-[30%] p-2">
            <Sidebar />  
          </div>
          <div className="right-box w-[70%] p-2">
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
            <div className="text-white page_box bg-[--gray] min-h-[76.5vh] mt-4 rounded-md p-6 pages_box">
              <Routes>
                <Route path='/' element={<Histories />}/>
                <Route path='/projects' element={<Projects />}/>
                <Route path='/skills' element={<Skills />}/>
                <Route path='/blog' element={<Blog />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/404' element={<Page404 />}/>
              </Routes>
            </div>
          </div>
        </div>
          <Footer />
      </div>
    </div>
   </BrowserRouter>
  )
}

export default App
