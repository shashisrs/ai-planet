import React from 'react'
import {FaUserCircle} from 'react-icons/fa';
import Sidebar from "../components/Sidebar"
import { Outlet } from 'react-router-dom';
const AdminPanel = () => {
  return (
    <div>
    {/* Admin Panel Navbar */}
      <nav className='flex justify-between items-center border py-3 border-b-[#e26dff] '>
      <h1 className='text-[#e26dff] text-4xl font-semibold pl-24 cursor-pointer mr-1'>AI-Planet</h1>
      <div className='flex items-center gap-x-4 pr-12'>
        <h2 className='text-xl'>Admin Deva</h2>
        <FaUserCircle  className='text-[#e26dff] text-4xl'/>
      </div>
      </nav>
     
      <div className='flex gap-7'>
       {/* Admin Panel Sidebar */}
      <Sidebar />
      <Outlet></Outlet>
      </div>
      
    </div>
  )
}

export default AdminPanel