import { useDispatch } from "react-redux"
import { API_OPTIONS} from "../utils/constant"
import { addPopulerMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

const usePopulerMovies = () =>{
    
  //Getting Movies data form TMDB API
  const dispatch = useDispatch()
  const getPopulerMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    const movies = await data.json()
   
    dispatch(addPopulerMovies(movies.results))
  }

  useEffect(()=>{
getPopulerMovies()
  },[])
}

export default usePopulerMovies;