import React, { useEffect, useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import UsersIcon from './UsersIcon'

const Subnav = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        setIsLoggedIn(!!token);
    }, [])
    const navigate = useNavigate();
    return (
        <div>
            <div className='bg-sky-800 flex text-white gap-2 px-20 text-lg py-3 justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <FaPhoneAlt className='text-red-500' size={20} />
                    Emergency: 0755-408 6000
                </div>

                <div className='flex gap-4 items-center'>
                    <FaFacebookF className='w-6 h-6 hover:text-blue-700 hover:bg-white  hover:rounded-full p-1 transition duration-200' />
                    <FaTwitter className='w-6 h-6 hover:text-blue-700 hover:bg-white  hover:rounded-full p-1 transition duration-200' />
                    <FaYoutube className='w-6 h-6 hover:text-blue-700 hover:bg-white  hover:rounded-full p-1 transition duration-200' />
                    <FaInstagram className='w-6 h-6 hover:text-blue-700 hover:bg-white  hover:rounded-full p-1 transition duration-200' />



                    <div className='bg-sky-400 rounded-lg' >
                        {/* sign Up */}
                        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className=" rounded-lg  font-semibold px-4 py-1 hover:bg-sky-500">Sign Up</div>
                            <div tabIndex={0} className="dropdown-content menu bg-stone-100 text-blue-600 text-md rounded-box z-1 w-60 m-1  p-2 shadow-sm">

                                <button className='btn bg-sky-600 text-white border font-semibold p-2' onClick={() => { navigate("/patientSignin") }}>Sign up as Patient</button>
                                <button className='btn bg-sky-600 text-white border font-semibold p-2' onClick={() => { navigate("/doctorsSignin") }}>Sign up as Doctor</button>
                            </div>
                        </div>
                        {/* Logout */}
                        <button
                            className={`rounded-lg px-4 py-1 font-semibold text-white hover:bg-sky-600 ${isLoggedIn ? 'bg-rose-500' : 'bg-sky-500'
                                }`} onClick={() => {
                                    if (isLoggedIn) {
                                        localStorage.removeItem("username");
                                        localStorage.removeItem("accessToken");
                                        console.log("Refresh Token at Log Out", localStorage.getItem("refreshToken"))
                                        setIsLoggedIn(false);
                                    } else {
                                        navigate("/login")
                                    }
                                }} >
                            {isLoggedIn ? "Log Out" : "Log In"}
                        </button>
                    </div>

                    {/* user icon */}
                    <UsersIcon />
                </div>
            </div>




        </div>
    )
}

export default Subnav
