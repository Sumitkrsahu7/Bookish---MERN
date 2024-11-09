// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useForm } from "react-hook-form";

// const Login = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };


//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm()

//   const onSubmit = (data) => console.log(data)

//   return (
//     <>
//       {/* Modal for Login */}
//       <dialog id="my_modal_3" className="modal">
//         <div className="modal-box">
//           <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
//             {/* Close button */}
//             <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          
//           <h3 className="font-bold text-lg">Login</h3>

//           {/* Email */}
//           <div className='mt-4 space-y-2'>
//             <span>Email</span>
//             <br />
//             <input 
//               placeholder='Enter your email' 
//               type='text' 
//               className='w-80 px-3 border rounded-md outline-none py-1'
//               {...register("email", { required: true })}
//             />
//           </div>

//           {/* Password with Show/Hide Toggle */}
//           <div className='mt-4 space-y-2'>
//             <span>Password</span>
//             <br />
//             <div className="relative w-80">
//               <input
//                 placeholder='Enter your password'
//                 type={passwordVisible ? 'text' : 'password'}
//                 className='w-full px-3 border rounded-md outline-none py-1'
//                 {...register("password", { required: true })}
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-500 hover:text-gray-700"
//               >
//                 {passwordVisible ? 'Hide' : 'Show'}
//               </button>
//             </div>
//           </div>

//           {/* Login Button and SignUp Link */}
//           <br />
//           <div className='flex justify-around'>
//             <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-600 duration-300" >Login</button>
//             <p>New User? <Link to='/signup' className='underline text-blue-700 cursor-pointer hover:text-blue-800'>SignUp</Link></p>
//           </div>
//           </form>
//         </div>
//       </dialog>
//     </>
//   );
// };

// export default Login;






















import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      {/* Modal for Login */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Close button */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('my_modal_3').close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email */}
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input 
                placeholder='Enter your email' 
                type='text' 
                className='w-80 px-3 border rounded-md outline-none py-1'
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>

            {/* Password with Show/Hide Toggle */}
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <div className="relative w-80">
                <input
                  placeholder='Enter your password'
                  type={passwordVisible ? 'text' : 'password'}
                  className='w-full px-3 border rounded-md outline-none py-1'
                  {...register("password", { required: true })}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-500 hover:text-gray-700"
                >
                  {passwordVisible ? 'Hide' : 'Show'}
                </button>
              </div>
              {errors.password && <span className="text-red-500">Password is required</span>}
            </div>

            {/* Login Button and SignUp Link */}
            <br />
            <div className='flex justify-around'>
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-600 duration-300">
                Login
              </button>
              <p>New User? 
                <Link to='/signup' className='underline text-blue-700 cursor-pointer hover:text-blue-800'>
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;





















// import React from 'react'
// import {Link} from 'react-router-dom'

// const Login = () => {
//   return (
//     <>
//         {/* You can open the modal using document.getElementById('ID').showModal() method */}
// <dialog id="my_modal_3" className="modal">
//   <div className="modal-box">
//     <form method="dialog">
//       {/* if there is a button in form, it will close the modal */}
//       <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//     </form>
//     <h3 className="font-bold text-lg">Login</h3>
//     {/* Email */}
//     <div className='mt-4 space-y-2'>
//         <span>Email</span>
//         <br></br>
//         <input placeholder='Enter your email' type='text' className='w-80 px-3 border rounded-md outline-none py-1'/>
//     </div>
//     {/* password */}
//     <div className='mt-4 space-y-2'>
//         <span>Password</span>
//         <br></br>
//         <input placeholder='Enter your password' type='password' className='w-80 px-3 border rounded-md outline-none py-1'/>
//     </div>
//     <br></br>
//     {/* button  */}
//     <div className='flex justify-around'>
//         <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-600 duration-300">Login</button>
//         <p>New User? <Link to='/signup' className='underline text-blue-700 cursor-pointer hover:text-blue-800'>SignUp</Link></p>
//     </div>
//   </div>
// </dialog>
//     </>
//   )
// }

// export default Login