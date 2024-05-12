import React from 'react'
import Logo from "../assets/Logo-transparent.png"
import { FiLogOut } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store=> store.user)
  
  const handleSignOut =()=> {
    signOut(auth).then(()=>{
      navigate("/")
    }).catch((error)=>{
      navigate("/error")
    })
  }
  return (
    <div className='flex justify-between absolute w-full bg-gradient-to-b px:5 md:px-8 py-2 from-black z-10'>
      <img className='w-32 h-10 md:w-60 md:h-20' src={Logo} alt="logo" />
     { user && <div className='flex p-2 items-center space-x-2'>
        <img className='w-5 h-5 md:w-10 md:h-10' src={user?.photoURL? user.photoURL :"https://i.pinimg.com/474x/d8/70/20/d87020c70b0bf5eec4918874fa7d0f9f.jpg"} alt="user" />
        <button className='text-sm md:text-lg text-white font-bold bg-red-600 hover:bg-red-700 duration-500 p-[0.2rem] md:p-[0.7rem]' onClick={handleSignOut}><FiLogOut /></button>
      </div>}
    </div>
  )
}

export default Header