import React from 'react';
// import bgimg from '../src/assets/ContactBgImg.avif';
// import formBgImg from '../src/assets/ContactFormBg.avif';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFax } from "react-icons/fa";
import { PiEyedropperSampleFill } from "react-icons/pi";
const Contact = () => {
  return (
    <div>
      {/* Contact */}
      <div className='relative h-[290px] w-full flex items-center justify-start px-8 text-left bg-cover bg-center'
      style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className='absolute inset-0 bg-sky-900 opacity-80'></div>
        <div className='relative z-10'>
          <h1 className='text-white  text-4xl font-semibold mb-5'>Contact</h1>
          <Link to="/" className='text-zinc-400 hover:text-white text-lg'>Bansal Hospital Bhopal</Link>
          <span className='mx-2 text-zinc-400 text-lg'>&gt;</span>
          <span className='mx-2 text-white text-lg'> Contact</span>
        </div>
      </div>

      {/* Contact Info */}
      <div className="m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center pt-10 mt-12">
        <div className="font-semibold rounded-xl px-6 py-6 my-4 shadow-xl bg-white min-w-[400px]">
          <h2 className="flex flex-col items-center  gap-2 text-xl text-sky-700 mb-2">
            <FaLocationDot /> Our Location
          </h2>
          <p className="text-gray-700 text-center">Shahpura Lake, Shahpura, Bhopal, MP, (India)</p>
        </div>

        <div className="font-semibold rounded-xl px-6 py-6 my-4 shadow-xl/30 bg-white min-w-[400px]">
          <h2 className="flex flex-col items-center  gap-2 text-xl text-sky-700 mb-2">
            <HiOutlineMailOpen /> Email Address
          </h2>
          <p className="text-gray-700 text-center">contact@bansalhospital.net</p>
        </div>

        <div className="font-semibold rounded-xl px-6 py-6 my-4 shadow-xl/30 bg-white min-w-[400px]">
          <h2 className="flex flex-col items-center gap-2 text-xl text-sky-700 mb-2">
            <FaPhoneSquareAlt /> Phone Number
          </h2>
          <p className="text-gray-700 text-center">+91 (0755) 408 6000 & +91 (0755) 408 6099</p>
        </div>

        <div className="font-semibold rounded-xl px-6 py-6 my-4 shadow-xl/30 bg-white min-w-[400px]">
          <h2 className="flex flex-col items-center  gap-2 text-xl text-sky-700 mb-2">
            <FaFax /> FAX
          </h2>
          <p className="text-gray-700 text-center">+91 (0755) 408 6010</p>
        </div>

        <div className="font-semibold rounded-xl px-6 py-6 my-4 shadow-xl/30 bg-white min-w-[400px]">
          <h2 className="flex flex-col items-center  gap-2 text-xl text-sky-700 mb-2">
            <PiEyedropperSampleFill /> Sample Collection
          </h2>
          <p className="text-gray-700 text-center">+91 7898 38 9200</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className='relative bg-sky-700 grid grid-cols-2 pt-20 mt-12 mb-12 pb-20'
      style={{ backgroundImage: `url(${formBgImg})`}}
      >
        <div className='absolute inset-0 bg-sky-900 opacity-90'></div>
        <div className='relative z-10 text-white flex flex-col items-left py-5 px-10'>
          <h1 className='font-bold text-2xl'>How to Reach</h1>
          <div className="w-full h-[400px] mt-4">
            <iframe
              title="Bansal Hospital Location"
              className="w-full h-full border-0"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.840824494721!2d77.43916751542343!3d23.16252668488142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43cc98ec50ff%3A0x14aaf6586d9eac71!2sBansal%20Hospital!5e0!3m2!1sen!2sin!4v1628267814983!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>
        <div className='relative z-10 m-auto  py-5 px-10 flex justify-center text-white'>
          <form action="" className='space-y-2 w-full max-w-md'>
            <h1 className='font-bold text-2xl'>Get In Touch</h1>
            <label htmlFor="name" className='label text-white'>Your Name</label><br />
            <input type="text" className='input input-lg text-black' required/>
            <label htmlFor="email" className='label text-white'>Your Email</label><br />
            <input type="text" className='input input-lg text-black' required/>
            <label htmlFor="number" className='label text-white'>Contact Number</label><br />
            <input type="text" className='input input-lg text-black' required/>
            <label htmlFor="message" className='label text-white'>Your Message</label><br />
            <textarea className="textarea text-black" ></textarea>
            <button className='btn text-white bg-green-900 hover:bg-black mt-8' onClick={()=>alert("Form Submitted")} >Send</button>
          </form>
        </div>
      </div>
    </div>


  );
};

export default Contact;