import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard= ({posterId}) => {
    console.log(posterId)
  return (
    <div className='w-24 md:w-48 pr-4'>
        <img src={IMG_CDN_URL+posterId} alt="movie_image" />
    </div>
  )
}

export default MovieCard