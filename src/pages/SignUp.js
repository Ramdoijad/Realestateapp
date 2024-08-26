import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-6xl text-center font-semibold my-4 font-serif'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' />
        <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' />
        <input type="password" placeholder='password'   id='password' />
         <button className='border p-3 rounded-lg bg-slate-900 text-white uppercase hover:opacity-75 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className='flex my-4'>
        <p className='text-xl'>Have a Account ?</p>
        <Link to='/signin' className='text-blue-700 text-xl font-bold '>
        Sign In
         </Link>
      </div>
    </div>
  )
}

export default SignUp