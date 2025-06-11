import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import { GiAmbulance } from "react-icons/gi";
import { TbClock24 } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { PiStethoscope } from "react-icons/pi";
import { TbLocationShare } from "react-icons/tb";
import { FaMoneyCheck } from "react-icons/fa";
import { MdFeaturedPlayList } from "react-icons/md";
import { IoIosArrowForward } from 'react-icons/io';
import { GiSkeleton } from "react-icons/gi";
import { GiMicroscope } from "react-icons/gi";
import { TbCheckupList } from "react-icons/tb";
import { GiFruitBowl } from "react-icons/gi";
import { FaPlusSquare } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { GiDrippingTube } from "react-icons/gi";
import { FaCalendarDays } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import Footer from './Footer';
import Subnav from './Subnav';



//https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
//https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D






const About = () => {

    let slidebar = [
        "http://upkaarhospital.com/img/carousel-1.jpg",
        "https://assets.hillrom.com/is/image/hillrom/Med-Surg_1984-feature-hero-banner-desktop?$featureProductCarouselDesktop$",
        "https://blog.pattersonpope.com/hs-fs/hubfs/Maximize-Efficiency-in-Hospital-Supply-Room-Header-1.jpg?width=1925&height=1000&name=Maximize-Efficiency-in-Hospital-Supply-Room-Header-1.jpg",
        "https://themighty.com/wp-content/uploads/2018/06/GettyImages-695337976-1280x640.jpg"
    ]

    let doctors = [
        {
            name: "Dr.HH Trivedi",
            descript: "Consultant--Internal Medicine & Rheumatology",
            image: "https://bansalgroup-assets.s3.ap-south-1.amazonaws.com/PRD/Bansal_Hospital/2020/09/Dr-H-H-Trivedi-213x230.png"
        },
        {
            name: "Dr.Skand Kumar Trivedi",
            descript: "Consultant-Cardiology"
        },
        {
            name: "Dr.Ajit Verma",
            descript: "Consultant-Neurology"
        },
        // {
        //     name: "Dr.Ashok Gupta",
        //     descript: "Consultant-Internal Medicine & Rheumatology"
        // },
    ]

    return (
        <>
            {/* <Subnav /> */}
            <Navbar />
            <Carousel slidebar={slidebar} />

            <div className='flex h-[600px] w-full pt-15 bg-stone-100'>

                {/* About Section */}
                <div className='text-black'>
                    <ul >

                        <li className='font-mono font-semibold rounded-xl text-xl items-center px-9 py-6 mx-25 my-4 shadow-2xl bg-white h-[90px] w-[350px] flex gap-4 hover:scale-105 transition-transform duration-200'><PiStethoscope size={50} className='text-blue-500' />Professional Staff</li>
                        <li className='font-mono font-semibold rounded-xl text-xl items-center px-8 py-6 mx-25 my-4 shadow-2xl bg-white h-[90px] w-[350px] flex gap-4 hover:scale-105 transition-transform duration-200 '><GiAmbulance size={55} className='text-blue-500' />Emergency Treatment</li>
                        <li className='font-mono font-semibold rounded-xl text-xl items-center px-9 py-6 mx-25 my-4 shadow-2xl bg-white h-[90px] w-[350px] flex gap-4 hover:scale-105 transition-transform duration-200'><FaUserDoctor size={50} className='text-blue-500' />Trusted Doctors</li>
                        <li className='font-mono font-semibold rounded-xl text-xl items-center px-9 py-6 mx-25 my-4 shadow-2xl bg-white h-[90px] w-[350px] flex gap-4 hover:scale-105 transition-transform duration-200'><TbClock24 size={50} className='text-blue-500' />24/7 Services</li>
                    </ul>
                </div>

                <div>
                    <div className='text-4xl font-semibold text-black pr-10'>
                        ABOUT BANSAL HOSPITAL
                    </div>

                    <p className='my-5 w-[400px] text-gray-500 text-lg'><b>Bansal  Hospital,  Bhopal,</b>  is  a  300  bedded  Super  Specialty  Hospital is born of a dream. A dream that the people of Bhopal and Central India get the best healthcare at affordable prices. A dream that the best infrastructure and technology be provided to doctors so that they can serve patients to best of their capability. A dream that our people need not flee to metros for medical needs. This conviction inspired us to make a world class hospital in the heart of the country where the best infrastructure meets the best doctors to deliver cutting edge technology with care.</p>
                </div>

                <div className=''>
                    <ul >

                        <li className='font-mono font-semibold rounded-lg items-center px-8 py-6 mx-25 my-4 shadow-2xl text-lg bg-sky-700 text-white h-[90px] w-[350px] flex gap-5'><MdFeaturedPlayList size={40} className='text-white' />Sample Collection<IoIosArrowForward size={30} className='ml-1' /></li>
                        <li className='font-mono font-semibold rounded-lg items-center px-9 py-6 mx-25 my-4 shadow-2xl text-lg bg-sky-700 text-white h-[90px] w-[350px] flex gap-5 '><FaUserDoctor size={40} className='text-white' />Find Doctors<IoIosArrowForward size={30} className='ml-9' /></li>
                        <li className='font-mono font-semibold rounded-lg items-center px-9 py-6 mx-25 my-4 shadow-2xl text-lg bg-sky-700 text-white h-[90px] w-[350px] flex gap-5'><TbLocationShare size={40} className='text-white' />Find Locations<IoIosArrowForward size={30} className='ml-7' /></li>
                        <li className='font-mono font-semibold rounded-lg items-center px-9 py-6 mx-25 my-4 shadow-2xl text-lg bg-sky-700 text-white h-[90px] w-[350px] flex gap-5'><FaMoneyCheck size={40} className='text-white' />Book a Health Checkup<IoIosArrowForward size={30} className='ml-3' /></li>
                    </ul>
                </div>
            </div>


            {/* Department Cards */}
            <div className='bg-stone-200 h-[700px] w-full pt-20'>
                <h1 className='text-sky-700 font-semibold pl-175 text-xl'>Departments</h1>
                <h3 className='text-black font-bold pl-160 pt-3 font-sans text-2xl'>Our Medical Services</h3>
                <div className='h-1 w-10 bg-sky-700 rounded-lg ml-185 mt-5'></div>


                <div className='ml-20 mt-25 mr-20 flex gap-4'>

                    <div className='bg-white h-[230px] w-[330px]  rounded-lg shadow-gray-400 text-black hover:bg-sky-700 hover:text-white '>
                        <GiSkeleton size={80} className='items-center ml-30 pt-5 hover:text-green-500' />

                        <h2 className='font-bold pl-25 pt-5 text-2xl'>Radiology</h2>
                        <p className='pl-12 pt-5 text-lg '>Department of Radiology and Intervention...</p>

                    </div>
                    <div className='bg-white h-[230px] w-[330px] rounded-lg shadow-gray-400 text-black hover:bg-sky-700 hover:text-white '>
                        <GiMicroscope size={70} className='items-center ml-30 pt-5 hover:text-green-500' />

                        <h2 className='font-bold pl-25 pt-6 text-2xl'>Pathology</h2>
                        <p className='pl-12 pt-5 text-lg '>Clinical laboratory Services of Bansal...</p>

                    </div>
                    <div className='bg-white h-[230px] w-[330px] rounded-lg shadow-gray-400 text-black hover:bg-sky-700 hover:text-white '>
                        <TbCheckupList size={70} className='items-center ml-30 pt-5 hover:text-green-500' />

                        <h2 className='font-bold pl-20 pt-6 text-2xl'>Health Checkup</h2>
                        <p className='pl-12 pt-5 text-lg '>Bansal Hospital Provides Health Assessment...</p>

                    </div>
                    <div className='bg-white h-[230px] w-[330px] rounded-lg shadow-gray-400 text-black hover:bg-sky-700 hover:text-white '>
                        <GiFruitBowl size={70} className='items-center ml-30 pt-5 hover:text-green-500' />

                        <h2 className='font-bold pl-25 pt-6 text-2xl'>Dietics</h2>
                        <p className='pl-12 pt-5 text-lg '>The Department of Dietics and...</p>

                    </div>
                </div>

                <div><button className='bg-sky-300 text-white font-semibold px-5 py-2.5 gap-2 rounded-lg mt-30 ml-170 flex hover:text-xl'>View All Departments<IoIosArrowForward size={25} /></button></div>
            </div>


            {/* Human Structure  */}
            <div className="relative w-full h-[1000px] justify-center items-center">
                {/* Background image */}
                <img
                    src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-15"
                />

                <div className="relative z-10 text-white pt-20 pl-[150px]">
                    <p className="text-sky-500 font-semibold font-sans text-lg">
                        Select The Concern Area, We Will Guide You.
                    </p>
                    <h1 className="font-bold text-3xl font-sans pt-2">
                        Not Sure About The Medical Terms?
                    </h1>
                    <div className="mt-10 space-x-4">
                        <button className="bg-white px-6 py-2 text-lg text-black rounded-lg">Male</button>
                        <button className="bg-white px-6 py-2 text-lg text-black rounded-lg">Female</button>
                    </div>
                </div>
            </div>




            {/* Doctors Cards */}

            <div className='bg-stone-100 h-[1000px] w-full'>

                <h1 className='text-sky-800 font-semibold pl-175 text-lg pt-20'>Meet Our Team</h1>
                <h3 className='text-black font-bold pl-160 pt-3 font-sans text-3xl'>Specialist Doctors</h3>
                <div className='h-1 w-10 bg-sky-700 rounded-lg ml-185 mt-5'></div>

                <div className='flex gap-5 mt-15 mb-10 p-25'>

                    {doctors.map((v, i, a) => (
                        <div className='h-[500px] w-[400px] bg-stone-200 '>
                            {/* <h2>{v.image}</h2> */}
                            <div className='justify-centre items-centre'>

                                <h3 className='bg-white rounded-full h-[200px] w-[200px] mx-29 my-5 hover:bg-sky-700'></h3>
                                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                                    <h1 className='font-bold text-2xl justify-center text-black font-sans'  key={i}>{v.name}</h1>
                                    <p className='font-sans text-gray-500 m-auto'>{v.descript}</p>
                                    <span className='h-1 w-10 bg-sky-700 rounded-lg mt-2.5'></span>

                                    <p className='font-sans text-gray-500 m-auto'>Specialization and...</p>

                                    <button className='font-semibold text-sm mt-7 font-sans px-30 py-3 border bg-stone-200 hover:bg-sky-700 text-black hover:text-white'>View Profile</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className='bg-sky-900 h-[400px] w-full'>
                <div className='flex flex-row justify-center items-center gap-20 text-white p-20 relative'>
                    <img src="https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-cover absolute h-[400px] w-full  opacity-12" />
                    <h1 className='p-10'><b className='text-5xl'><FaPlusSquare />10 Years</b><br />and counting</h1>
                    <h1 className='p-10'><b className='text-5xl'><IoPeopleSharp />30000+</b><br /> Blood Donors Active</h1>
                    <h1 className='p-10'><b className='text-5xl'><FaBuilding />401+</b><br /> Kidney Transplant Patients</h1>
                    <h1 className='p-10'><b className='text-5xl'><GiDrippingTube />35+</b><br /> Liver Transplant Successful</h1>

                </div>

            </div>

            {/* NEWS */}

            <div className='bg-stone-50 h-[300px] w-[full]'>
                <h1 className='text-sky-700 font-semibold pl-175 text-lg pt-20'>Hospitals</h1>
                <h3 className='text-black font-bold pl-160 pt-3 font-sans text-3xl'>Bansal Facilities</h3>
                <div className='h-1 w-10 bg-sky-700 rounded-lg ml-180 mt-5'></div>
            </div>
            <div className='bg-sky-700 h-[500px] w-full'>
            </div>

            <div className='bg-stone-50 h-[900px] w-full'>
                <h1 className='text-sky-700 font-semibold pl-175 text-lg pt-20'>Our Latest</h1>
                <h3 className='text-black font-bold pl-160 pt-3 font-sans text-3xl'>News And Events</h3>
                <div className='h-1 w-10 bg-sky-700 rounded-lg ml-183 mt-5'></div>

                <div className='flex gap-7 p-30'>

                    <div className='bg-white h-[500px] w-[400px] shadow-2xl hover:scale-105 transition-transform duration-200 relative'>
                        <div className='bg-gray-300 h-[260px] w-[400px] '> </div>
                        <button className='bg-sky-700 px-4 py-2 mx-3  text-white gap-1 flex absolute top-58 rounded-lg'><FaCalendarDays size={20} />May 30, 2025  <IoPerson size={20} />Israr</button>
                    </div>

                    <div className='bg-white h-[450px] w-[400px] shadow-2xl hover:scale-105 transition-transform duration-200 relative'>
                        <div className='bg-gray-300 h-[260px] w-[400px] '>  </div>
                        <button className='bg-sky-700 px-4 py-2 mx-3  text-white gap-1 flex absolute top-58 rounded-lg'><FaCalendarDays size={20} />May 27, 2025  <IoPerson size={20} />Israr</button>

                        <h2 className='font-bold text-2xl text-black pt-10 font-mono'>In the news 23.05.2025</h2>
                    </div>

                    <div className='bg-white h-[500px] w-[400px] shadow-2xl hover:scale-105 transition-transform duration-200 relative'>
                        <div className='bg-gray-300 h-[260px] w-[400px] '> </div>
                        <button className='bg-sky-700 px-4 py-2 mx-3  text-white gap-1 flex absolute top-58 rounded-lg'><FaCalendarDays size={20} />May 16, 2025  <IoPerson size={20} />bansalgroup</button>

                    </div>
                </div>

            </div>


            <Footer />



        </>
    )
}

export default About
