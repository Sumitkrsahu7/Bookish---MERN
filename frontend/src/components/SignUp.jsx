import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className='justify-center flex items-center h-screen'>
        <div id="my_modal_3" className="border py-8 px-2 rounded-xl shadow-md w-[500px]">
          <div className='modal-box'>
            <form method="dialog">
              {/* Close button */}
              <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            </form>
            <h3 className="font-bold text-lg">Sign Up</h3>
            {/* Name */}
            <div className='mt-4 space-y-2'>
              <span>Name</span>
              <br />
              <input placeholder='Enter your full name' type='text' className='w-80 px-3 border rounded-md outline-none py-1' />
            </div>
            {/* Email */}
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input placeholder='Enter your email' type='email' className='w-80 px-3 border rounded-md outline-none py-1' />
            </div>
            {/* Password */}
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <div className="relative w-80">
                <input
                  placeholder='Enter your password'
                  type={passwordVisible ? 'text' : 'password'}
                  className='w-full px-3 border rounded-md outline-none py-1'
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-500 hover:text-gray-700"
                >
                  {passwordVisible ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            <br />
            {/* Login and SignUp links */}
            <div className='flex justify-around mt-5'>
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-600 duration-300">Sign Up</button>
              <p>Existing User? <button className='underline text-blue-700 cursor-pointer hover:text-blue-800' onClick={() => document.getElementById('my_modal_3').showModal()}>Login</button>{" "} <Login /></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
