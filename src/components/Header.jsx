import React, { useEffect } from 'react'
import Logo from "../assets/logo-transparent-png.png"
import { FiLogOut } from "react-icons/fi";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { SUPPORTED_LANGUAGES, UserIcon } from '../utils/constant';
import{ setToggleGptBtn} from "../utils/gptSlice"
import { setLang } from '../utils/consfigSlice';

const Header = () => {
  const navigate = useNavigate()
  const dispach = useDispatch()
  const user = useSelector(store=> store.user)
  const gptToggle = useSelector(store=> store.gpt.toggleGptBtn)
 
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


  const handleGptSuggestion =()=>{
    // toggle GPT button
    dispach(setToggleGptBtn())
  }

  const handleLanguageChange = (e) =>{
    // toggle Language Change
    dispach(setLang(e.target.value))
  }

  return (
    <div className='flex justify-between absolute w-full bg-gradient-to-b px:5 md:px-8 py-2 from-black z-10'>
      <img className='w-32 h-10 md:w-60 md:h-20' src={Logo} alt="logo" />
     { user && <div className='flex p-2 items-center space-x-2'>
      {gptToggle && <select name="" id="" className='bg-gray-800 text-white py-2 px-4 duration-700' onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map(lang=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}

      </select>}
     <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300 duration-700"
     onClick={handleGptSuggestion}
     >
        {gptToggle?"Homepage" : "GPT Suggests"}
    </button>
        <img className='w-5 h-5 md:w-10 md:h-10' src={user?.photoURL? user.photoURL : UserIcon} alt="user" />
        <button class="bg-red-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 duration-700" onClick={handleSignOut}><FiLogOut /></button>
      </div>}
    </div>
  )
}

export default Header