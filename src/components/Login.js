import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

    const [isSignInForm , setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    } 
  return (
    <div className=''>
      <Header />
        <div className="absolute">
        <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg"
        alt='background'
        />
        </div>
            <form className='w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (
                    <input type='text' placeholder='Name' className='p-4 my-4 w-full bg-gray-700 opacity-80' />
                )}
                <input type='email' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 opacity-80' />
                <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 opacity-80'/>
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer'onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up Now": "Alerdy Registered? Sign In Now"}</p>
            </form> 
    </div>
  )
}

export default Login;
