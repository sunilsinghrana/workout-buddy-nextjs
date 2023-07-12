import React from 'react'
import {FiLogOut} from 'react-icons/fi'

function Navbar() {
  return (
    <nav className='w-full flex justify-between items-center px-16 bg-white h-24'>
        <div className="logo text-4xl font-bold">GymBuddy</div>
        <div className="logout bg-slate-900 px-3 flex justify-between items-center py-1 rounded-md text-white">Logout <FiLogOut className=''/></div>
    </nav>
  )
}

export default Navbar
