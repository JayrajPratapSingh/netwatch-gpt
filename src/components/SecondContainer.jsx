import React from 'react'
import MovieLists from './MovieLists'
import { useSelector } from 'react-redux'

const SecondContainer = () => {
  const moviesList = useSelector(store=> store.movies)
  return moviesList && (
    
    <div className=' bg-black'>
      {/* 
      #MovieLists
       - Movie Type Heading
       - Multiple Movies Card
      */}
   <div className='-mt-72 relative z-20'>
   <MovieLists title="Now Playing" movies={moviesList.nowPlayingMovies}  />
      <MovieLists title="Top Rated" movies={moviesList.TopRatedMovies}  />
      <MovieLists title="Populer" movies={moviesList.PopulerMovies}  />
      <MovieLists title="Upcoming" movies={moviesList.UpcomingMovies}  />
   </div>

      
      </div>
  )
}

export default SecondContainer