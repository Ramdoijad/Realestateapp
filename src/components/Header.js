import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className='bg-slate-200 shadow-lg'>
      <div className='flex justify-between p-2 items-center max-w-6xl mx-auto'>
      <h1 className='font-bold text-sm sm:text-lg flex flex-wrap'>
        <span className='text-slate-500'>Rama </span>
        <span className='text-slate-800'> Groups</span>
      </h1>
      <form className=' bg-slate-100 rounded-lg p-2 flex items-center font-bold'>
        <input type="text" placeholder='search... ' className='bg-transparent focus:outline-none w-32 sm:w-64'   />
       <FaSearch/>
      </form>
      <ul className='flex gap-4'>
      <Link to='/home'>  <li className='hidden sm:inline text-gray-700 font-bold  hover:text-orange-700 cursor-pointer ' >Home</li></Link>
      <Link to='/about'>  <li className='hidden sm:inline text-gray-700 font-bold  hover:text-orange-700 cursor-pointer ' >About</li></Link>
      <Link to='/signin'>  <li className='hidden sm:inline text-gray-700 font-bold  hover:text-orange-700 cursor-pointer ' >Sign In</li></Link>
      </ul>
      </div>
    </header>
  )
}

export default Header