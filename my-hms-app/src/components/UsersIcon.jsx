import React from 'react';
import { FaUserAlt } from "react-icons/fa";

const UsersIcon=()=>{
   const userName=localStorage.getItem("username");

   if(userName){
    const userIcon=userName[0].toUpperCase();
    return(
        <div className='w-10 h-10 rounded-full bg-white font-bold text-sky-800 flex justify-center items-center'>{userIcon}</div>
    )
   }else{
    return(
        <div className='w-10 h-10 rounded-full bg-white font-bold  text-gray-500 bg-white flex justify-center items-center'><FaUserAlt /></div>
    )
   }
}
export default UsersIcon;