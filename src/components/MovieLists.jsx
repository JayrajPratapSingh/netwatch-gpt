import React from 'react'
import MovieCard from './MovieCard'

const MovieLists = ({title, movies}) => {
   
console.log(movies)
  return (
    <div className='px-6 '>
        <h1 className='text-xs text-white md:text-3xl font-bold py-3'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        
        <div className='flex'>
           { movies?.map( movie => <MovieCard key={movie.id} posterId={movie.poster_path}/>)}
        </div>
      </div>
    </div>
  )
}

export default MovieLists;