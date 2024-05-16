import React, { useEffect } from 'react'
import Logo from "../assets/logo-transparent-png.png"
import { FiLogOut } from "react-icons/fi";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { UserIcon } from '../utils/constant';

const Header = () => {
  const navigate = useNavigate()
  const dispach = useDispatch()
  const user = useSelector(store=> store.user)
  
  const handleSignOut =()=> {
    signOut(auth).then(()=>{

    }).catch((error)=>{
      navigate("/error")
    })
  }

  useEffect(()=>{


   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        
       const {uid,email, displayName, photoURL} = user;
      
       dispach(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
       navigate("/browse")
      } else {
        dispach(removeUser())
       navigate("/")
      }
    })
    
      return ()=> unsubscribe()
      
  }, []) 
  return (
    <div className='flex justify-between absolute w-full bg-gradient-to-b px:5 md:px-8 py-2 from-black z-10'>
      <img className='w-32 h-10 md:w-60 md:h-20' src={Logo} alt="logo" />
     { user && <div className='flex p-2 items-center space-x-2'>
        <img className='w-5 h-5 md:w-10 md:h-10' src={user?.photoURL? user.photoURL : UserIcon} alt="user" />
        <button className='text-sm md:text-lg text-white font-bold bg-red-600 hover:bg-red-700 duration-500 p-[0.2rem] md:p-[0.7rem]' onClick={handleSignOut}><FiLogOut /></button>
      </div>}
    </div>
  )
}

export default Header