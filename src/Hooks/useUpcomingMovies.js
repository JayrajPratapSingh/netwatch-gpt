import { useDispatch } from "react-redux"
import { API_OPTIONS} from "../utils/constant"
import { addUpcomingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

const useUpcomingMovies = () =>{
    
  //Getting Movies data form TMDB API
  const dispatch = useDispatch()
  const getUpcomingMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
    const movies = await data.json()
   
    dispatch(addUpcomingMovies(movies.results))
  }

  useEffect(()=>{
getUpcomingMovies()
  },[])
}

export default useUpcomingMovies;