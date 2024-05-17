import React, { useRef, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import {auth} from "../utils/firebase"
import Header from "./Header";
import { inputDataValidation } from "../utils/validate";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMG, UserAvatar } from "../utils/constant";
const Login = () => {
  const dispach = useDispatch()
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);
  const handleInputdata = () => {
    // validation of input data
    const Message = inputDataValidation(
      email.current.value,
      password.current.value
    );
   
    setErrorMessage(Message);


    if(Message) return;


    /////SignIn / SignUp Logic

    if(!isSignInForm){
      // Sign Up Logic

      createUserWithEmailAndPassword(auth, email.current.value,
        password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

     updateProfile(user, {
      displayName:name.current.value,
      photoURL:UserAvatar
    }).then(() => {
      const {uid,email, displayName, photoURL} = auth.currentUser;  // any thing updated will be in auth
  
   dispach(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
   
    }).catch((error) => {
      setErrorMessage(error.message)
    });

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  setErrorMessage(errorCode + "-"+ errorMessage)
  });

    }
    else{
      // Sign in Logic
      signInWithEmailAndPassword(auth, email.current.value,
        password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
      



      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "" + errorMessage)
      })


    }

  };

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src= {BACKGROUND_IMG}
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-6/12 md:w-3/12  py-4 px-8 absolute mt-36 m-auto left-0 right-0 bg-black bg-opacity-70"
      >
        <div className="text-gray-100 py-4 font-bold text-3xl duration-700">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </div>
        {!isSignInForm && (
          <input
          ref = {name}
            type="text"
            placeholder="Name"
            className="p-2 my-2 cursor-pointer rounded-sm w-full bg-gray-700 text-gray-50"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or Phone number"
          className="p-2 my-2 cursor-pointer rounded-sm w-full bg-gray-700 text-gray-50"
          
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 rounded-sm w-full cursor-pointer bg-gray-700 text-gray-50"
        />

        <p className="text-red-400 font-bold p-1">{errorMessage}</p>

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 py-2 my-4 rounded-sm cursor-pointer text-red-100 duration-700 w-full"
          onClick={handleInputdata}
        >
          {isSignInForm ? "Sign In" : "Sign Up "}
        </button>

        <p
          onClick={toggleSignInform}
          className="text-gray-100 text-xs md:text-sm cursor-pointer hover:underline hover:text-sky-500 duration-700 "
        >
          {isSignInForm
            ? "New to NETWATCH-GPT? SignUp now"
            : "Already NETWATCH-GPT user? SignIn"}
        </p>
      </form>
    </div>
  );
};

export default Login;
