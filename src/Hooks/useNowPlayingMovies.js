import { useDispatch } from "react-redux"
import { API_OPTIONS} from "../utils/constant"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

const useNowPlayingMovies = () =>{
    
  //Getting Movies data form TMDB API
  const dispatch = useDispatch()
  const getNowPlayingMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const movies = await data.json()
   
    dispatch(addNowPlayingMovies(movies.results))
  }

  useEffect(()=>{
getNowPlayingMovies()
  },[])
}

export default useNowPlayingMovies;