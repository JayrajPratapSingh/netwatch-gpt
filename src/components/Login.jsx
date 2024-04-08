import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)
const toggleSignInform =()=>{
  setIsSignInForm(!isSignInForm)
}
  return (
    <div >
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
      </div>
      <form action="" className=' w-6/12 md:w-3/12  py-4 px-8 absolute mt-36 m-auto left-0 right-0 bg-black bg-opacity-70'>
        <div className='text-gray-100 py-4 font-bold text-3xl duration-700'>{isSignInForm? "Sign In" : "Sign Up"}</div>
        {
          !isSignInForm && <input type="text" placeholder='Name' className='p-2 my-2 cursor-pointer rounded-sm w-full bg-gray-700'/>
        }

        <input type="text" placeholder='Email or Phone number' className='p-2 my-2 cursor-pointer rounded-sm w-full bg-gray-700'/>
        <input type="password" placeholder='Password' className='p-2 my-2 rounded-sm w-full cursor-pointer bg-gray-700'/>
        <button type='submit' className='bg-red-600 hover:bg-red-700 py-2 my-4 rounded-sm cursor-pointer text-red-100 duration-700 w-full'>{isSignInForm? "Sign In" : "Sign Up"}</button>

        <p onClick={toggleSignInform} className='text-gray-100 text-xs md:text-sm cursor-pointer hover:underline hover:text-sky-500 duration-700 '>{isSignInForm? "New to NETWATCH-GPT? SignUp now":"Already NETWATCH-GPT user? SignIn"}</p>
      </form>
    </div>
  )
}

export default Login