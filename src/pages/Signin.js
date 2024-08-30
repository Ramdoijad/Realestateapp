import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link ,useNavigate} from 'react-router-dom';
import { signinStart,signinSuccess,signInfauilur } from '../redux/user/userSlice';
const SignIn = () => {
  const [formData, setformData] = useState({});
  const {loading,error}=useSelector((state)=> state.user)
   const dispatch = useDispatch()

  const navigate = useNavigate()
  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signinStart())
    fetch('http://localhost:4000/api/auth/SignIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === false) {
         dispatch(signInfauilur(data.message))
          return;
        }
       dispatch(signinSuccess(data))
        navigate('/')
        console.log(data);
       
        setformData({});
      });
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-6xl text-center font-semibold my-4 font-serif">Sign IN</h1>
      <form onSubmit={handleSubmit} className="flex flex-col  gap-4 border border-neutral-600 shadow-xl p-6 rounded-lg">
        <label  className='ml-4 mb-[-15px]'>Email :</label>
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          onChange={handleChange}
          id="email"
          value={formData.email || ''}
        />
         <label className='ml-4 mb-[-15px]'>Password :</label>
        <input
          type="password"
          placeholder="password"
          onChange={handleChange}
          id="password"
          className="border p-3 rounded-lg"
          value={formData.password || ''}
        />
        <button
          disabled={loading}
          className="border p-3 rounded-lg bg-slate-900 text-white uppercase hover:opacity-75 disabled:opacity-80"
        >
          {loading ? 'loading' : 'Sign In'}
        </button>
      </form>
      <div className="flex my-4">
        <p className="text-xl">Don't Have an Account?</p>
        <Link to="/signup" className="text-blue-700 text-xl font-bold">
          Sign UP
        </Link>
      </div>
      <div>
        <h1 className='text-red-500 text-lg '>{error}</h1>
      </div>
    </div>
  );
};

export default SignIn;
