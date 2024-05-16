import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"
import { TrailerVideo } from "../utils/moviesSlice"
import { useDispatch } from "react-redux"

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch()
    // fetch Movie Trailer video and store in redux store 
    const getMovieVideos = async() =>{
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
      const movieDetailes = await data.json()
  
  const filterTrailers = movieDetailes.results.filter((video)=> video.type === "Trailer")
  const trailer = filterTrailers.length ? filterTrailers[0] : movieDetailes.result[0]

  dispatch(TrailerVideo(trailer))
    }
  
  
    useEffect(()=>{
      getMovieVideos()
    },[])
  
}

export default useMovieTrailer;