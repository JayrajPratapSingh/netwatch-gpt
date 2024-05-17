import { useDispatch } from "react-redux"
import { API_OPTIONS} from "../utils/constant"
import { addTopRatedMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

const useTopRatedMovies = () =>{
    
  //Getting Movies data form TMDB API
  const dispatch = useDispatch()
  const getTopRatedMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
    const movies = await data.json()
   
    dispatch(addTopRatedMovies(movies.results))
  }

  useEffect(()=>{
getTopRatedMovies()
  },[])
}

export default useTopRatedMovies;