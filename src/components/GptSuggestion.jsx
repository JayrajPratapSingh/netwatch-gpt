import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import {BACKGROUND_IMG} from "../utils/constant.js"
const GptSuggestion = () => {
  return (
    <div>
      {/* 
      Gpt SearchBar
      Gpt Movie Suggestions
      */}
       <div className="absolute -z-10">
        <img
          src={BACKGROUND_IMG}
          alt=""
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSuggestion; 