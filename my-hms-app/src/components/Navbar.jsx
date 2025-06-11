import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillThunderbolt } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
// import Carousel from './Carousel';
import Subnav from './Subnav';
// import Footer from './Footer';
// import About from './About';









const Navbar = () => {

  



  return (

    <>
      <Subnav />


      {/* MAINNAVBAR  */}

             <div className='sticky top-0 bg-white px-7 py-3 flex justify-center items-center shadow-md z-10'>
          <ul className='text-black gap-6 flex  justify-center items-center list-none'>
            <li className='mr-4'>
              <img src='https://cdn.hexahealth.com/Image/455e4c8f-448a-4609-ab54-80f141f0820a.jpg' className='h-[90px] w-[150px]' />
            </li>
            <li><a href='/' className='hover:text-blue-600 font-semibold'>Home</a></li>
            <Link to='/about'>
            <li><a className='hover:text-blue-600 font-semibold'>About</a></li>
            </Link>
            <li><a href='/doctors' className='hover:text-blue-600 font-semibold'>Doctors</a></li>
            <li><a className='hover:text-blue-600 font-semibold'>Facilities & Services</a></li>
            <li><a className='hover:text-blue-600 font-semibold'>Academics</a></li>
            <li><a className='hover:text-blue-600 font-semibold'>Gallery</a></li>
            <Link to='/contact'>
            <li className='hover:text-blue-600 font-semibold'>Contact Us</li>
            </Link>
            <li><a className='hover:text-blue-600 font-semibold'>Career</a></li>
            <li><a className='hover:text-blue-600 font-semibold'>Blogs</a></li>
            <li><a className='text-sky-900'><IoIosSearch size={30} /></a></li>
          </ul>

          <Link to='/portal'>
            <button className='ml-4 bg-sky-800 font-bold text-white px-6 py-2 flex items-center gap-2'>
              <AiFillThunderbolt size={25} />
              Patient Portal
            </button>
          </Link>
        </div>
{/* 
      <Carousel slidebar={slidebar} /> */}
     





    </>
  )
}

export default Navbar
