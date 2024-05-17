import React from 'react'
import { FaSearch } from "react-icons/fa";
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
const GptSearchBar = () => {
  const  langKey = useSelector(store => store.config.lang)
  return (
    <div className='pt-[10%]'>
     
        <form className='bg-black w-1/2 m-auto p-4 flex justify-center'>
            <input type="text" className='p-2 w-[70%] ' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button   className="bg-red-600 hover:bg-red-700 py-3  cursor-pointer text-red-100 duration-700 px-6 flex justify-center items-center"> <FaSearch /><span className='ml-2'>{lang[langKey].search}</span> </button>
        </form>
    </div>
  )
}

export default GptSearchBar