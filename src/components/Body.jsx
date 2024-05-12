import React, { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
  const dispach = useDispatch()
  

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Login />
    },
    {
      path:"/browse",
      element:<Browse />
    }
  ])

  useEffect(()=>{


onAuthStateChanged(auth, (user) => {
  if (user) {
    
   const {uid,email, displayName, photoURL} = user;
  
   dispach(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
  } else {
    dispach(removeUser())
  }
});
  })


  return (
    <div>


<RouterProvider router={appRouter}/>

    </div>
  )
}

export default Body